import bannerImg from '../assets/kasa-banner.jpg'
import PropTypes from 'prop-types'

const Banner = ({ title }) => {
	return (
		<div className="home__banner">
			<img src={bannerImg} alt="kasa banner" />
			<h2>{title}</h2>
		</div>
	)
}

Banner.propTypes = {
	title: PropTypes.string,
}

export default Banner
