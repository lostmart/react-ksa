import React from 'react'
import Banner from '../../components/Banner.jsx'
import bannerImg from '../../assets/kasa-about.jpg'
import Accordion from '../../components/Accordion.jsx'
import txtData from '../../data/aboutData.json'

const About = () => {
	return (
		<section>
			<Banner bannerImg={bannerImg} maxHeight="223px" />
			{txtData.map((location, i) => (
				<Accordion key={i} title={location.title} body={location.text} />
			))}
		</section>
	)

	/*
	return (
		<>
			{txtData.map((panel, index) => (
				<div key={index} className={style.accordion_item}>
					<h2>
						<button onClick={() => handleClick(index)}>
							{panel.title}
							<img src={arrow} alt="arrow" />
						</button>
					</h2>
					<div className={style.accordion_body}>{panel.text}</div>
				</div>
			))}
		</>
	)
	*/
}

export default About
