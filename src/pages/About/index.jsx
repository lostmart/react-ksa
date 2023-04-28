import React from 'react'
import Banner from '../../components/Banner.jsx'
import bannerImg from '../../assets/kasa-about.jpg'
import Accordion from '../../components/Accordion.jsx'

const About = () => {
	return (
		<section>
			<Banner bannerImg={bannerImg} />
			<Accordion />
		</section>
	)
}

export default About
