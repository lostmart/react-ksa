import LogemontData from '../../data/mock-data.json'
import { useLocation } from 'react-router-dom'
import styles from './index.module.scss'
import Tag from '../../components/Tag.jsx'

const Logement = () => {
	const location = useLocation()
	const locationId = new URLSearchParams(location.search).get('id')

	const logement = LogemontData.find(({ id }) => id === locationId)

	console.log(logement)
	return (
		<div className={styles.logementContainer}>
			<h2>{logement.title}</h2>
			<p> {logement.location} </p>
			<div className={styles.tagsContainer}>
				{logement.tags.map((tag) => (
					<Tag title={tag} />
				))}
			</div>
		</div>
	)
}

export default Logement
