import React from 'react'
import styles from './index.module.scss'
import Banner from '../../components/Banner.jsx'
import Card from '../../components/Card.jsx'

const Home = () => {
	return (
		<div className="home">
			<Banner title="Chez vous, partout et ailleurs" />
			<Card title="Titre de la location" />
		</div>
	)
}

export default Home
