import React from 'react'
import styles from './index.module.scss'
import Banner from '../../components/Banner.jsx'
import Card from '../../components/Card.jsx'

const Home = () => {
	const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	const listItems = cards.map((card, indx) => {
		return <Card key={indx} title={`Titre de la location ${card}`} />
	})
	return (
		<section className={styles.home}>
			<Banner title="Chez vous, partout et ailleurs" />
			<div className={styles.home__cardContainer}>{listItems}</div>
		</section>
	)
}

export default Home
