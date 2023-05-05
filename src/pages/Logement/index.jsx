import LogemontData from '../../data/mock-data.json'
import { useParams } from 'react-router-dom'
import styles from './index.module.scss'
import Tag from '../../components/Tag.jsx'
import Star from '../../components/Star'
import Accordion from '../../components/Accordion'
import Carrousel from '../../components/Carrousel'
import { GreeterRatings } from '../../components/base/GreeterRatings'

const Logement = () => {
	let { locationId } = useParams()
	// find correct appartment
	const logement = LogemontData.find(({ id }) => id === locationId)

	const starList = []
	for (let i = 0; i < 5; i++) {
		const ratingIndx = Number(logement.rating - 1)
		// check how many positive stars it has and then give it a red color
		starList.push(
			i < ratingIndx ? <Star key={i} /> : <Star fillColor="#cdcaca" key={i} />
		)
	}

	return (
		<section className={styles.logementContainer}>
			<Carrousel imgsArray={logement.pictures} />
			<article>
				<h2>{logement.title}</h2>
				<p> {logement.location} </p>
				<div className={styles.tagsContainer}>
					{logement.tags.map((tag, indx) => (
						<Tag key={indx} title={tag} />
					))}
				</div>
				<GreeterRatings
					starList={starList}
					greeterName={logement.host.name}
					avatarUrl={logement.host.picture}
				/>
			</article>
			<Accordion title="Description" body={logement.description} />
			<Accordion title="Équipements" body={logement.equipments} />
		</section>
	)
}

export default Logement
