import React from 'react'
import Banner from '../../components/Banner.jsx'
import bannerImg from '../../assets/kasa-about.jpg'
import Accordion from '../../components/Accordion.jsx'

const About = () => {
	return (
		<section>
			<Banner bannerImg={bannerImg} maxHeight="223px" />
			<Accordion />
		</section>
	)
}

export default About
