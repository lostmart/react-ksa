import React from 'react'
import styles from './index.module.scss'
import Banner from '../../components/Banner.jsx'
import Card from '../../components/Card.jsx'
import bannerImg from '../../assets/kasa-banner.jpg'
import { NavLink } from 'react-router-dom'
import LogemontData from '../../data/mock-data.json'

const Home = () => {
	const listItems = LogemontData.map((card, indx) => {
		return (
			<NavLink key={card.id} to={`/logement/log?id=${card.id}`}>
				<Card title={card.title} cardData={card} />
			</NavLink>
		)
	})
	return (
		<section className={styles.home}>
			<Banner bannerImg={bannerImg} title="Chez vous, partout et ailleurs" />
			<div className={styles.home__cardContainer}>{listItems}</div>
		</section>
	)
}

export default Home
