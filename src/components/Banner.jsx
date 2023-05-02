import PropTypes from 'prop-types'
import styles from './Banner.module.scss'

const Banner = ({ bannerImg, title, maxHeight }) => {
	return (
		<section className={styles.home__banner} style={{ maxHeight }}>
			<img src={bannerImg} alt="kasa banner" />
			{title ? <h2>{title}</h2> : ''}
		</section>
	)
}

Banner.propTypes = {
	title: PropTypes.string,
	bannerImg: PropTypes.string,
	maxHeight: PropTypes.string,
}

export default Banner
