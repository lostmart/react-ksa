import LogemontData from '../../data/mock-data.json'
import { useParams } from 'react-router-dom'
import styles from './index.module.scss'
import Tag from '../../components/Tag.jsx'
import Star from '../../components/Star'
import Greater from '../../components/Greeter'
import Accordion from '../../components/Accordion'
import Carrousel from '../../components/Carrousel'

const Logement = () => {
	let { locationId } = useParams()
	// find correct app
	const logement = LogemontData.find(({ id }) => id === locationId)

	const starList = []
	for (let i = 0; i < 5; i++) {
		const ratingIndx = Number(logement.rating - 1)
		// check how many positive stars it has and then give it a red color
		starList.push(
			i < ratingIndx ? <Star key={i} /> : <Star fillColor="#cdcaca" key={i} />
		)
	}

	//console.log(logement.rating)
	return (
		<section className={styles.logementContainer}>
			<Carrousel imgsArray={logement.pictures} />
			<article className={styles.articleContainer}>
				<h2>{logement.title}</h2>
				<p> {logement.location} </p>
				<div className={styles.tagsContainer}>
					{logement.tags.map((tag, indx) => (
						<Tag key={indx} title={tag} />
					))}
				</div>
				<div className={styles.starCont}>{starList}</div>
				<dir className={styles.greater}>
					<Greater
						greeterName={logement.host.name}
						avatarUrl={logement.host.picture}
					/>
				</dir>
			</article>
			<div className={styles.acrodionContainers}>
				<Accordion title="Description" body={logement.description} />
				<Accordion title="Équipements" body={logement.equipments} />
			</div>
		</section>
	)
}

export default Logement
