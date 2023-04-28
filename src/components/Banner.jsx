import PropTypes from 'prop-types'
import styles from './Banner.module.scss'

const Banner = ({ bannerImg, title }) => {
	return (
		<section className={styles.home__banner}>
			<img src={bannerImg} alt="kasa banner" />
			<h2>{title}</h2>
		</section>
	)
}

Banner.propTypes = {
	title: PropTypes.string,
	bannerImg: PropTypes.string,
}

export default Banner
