import LogemontData from '../../data/mock-data.json'
import { useParams } from 'react-router-dom'
import styles from './index.module.scss'
import Tag from '../../components/Tag.jsx'
import Star from '../../components/Star'
import Greeter from '../../components/Greeter'
import Accordion from '../../components/Accordion'
import Carrousel from '../../components/Carrousel'

const Logement = () => {
	let { locationId } = useParams()
	// find correct app
	const logement = LogemontData.find(({ id }) => id === locationId)

	const starList = []
	for (let i = 0; i < 5; i++) {
		const ratingIndx = Number(logement.rating - 1)
		// check hgow many positive stars it has and then give it a red color
		// i < ratingIndx
		// 	? starList.push(<Star key={i} />)
		// 	: starList.push(<Star fillColor="#cdcaca" key={i} />)

		starList.push(
			i < ratingIndx ? <Star key={i} /> : <Star fillColor="#cdcaca" key={i} />
		)
	}

	//console.log(logement.rating)
	return (
		<section className={styles.logementContainer}>
			<Carrousel imgsArray={logement.pictures} />
			<h2>{logement.title}</h2>
			<p> {logement.location} </p>
			<div className={styles.tagsContainer}>
				{logement.tags.map((tag, indx) => (
					<Tag key={indx} title={tag} />
				))}
			</div>
			<div className={styles.ratingAndHost}>
				<div>{starList}</div>
				<Greeter
					greeterName={logement.host.name}
					avatarUrl={logement.host.picture}
				/>
			</div>
			<Accordion />

			<div className={styles.equipments}>
				<ul>
					{logement.equipments.map((item, indx) => (
						<li key={indx}>{item}</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default Logement
