import PropTypes from 'prop-types'
import styles from './Banner.module.scss'

const height = '223px'

const Banner = ({ bannerImg, title }) => {
	return (
		<section className={styles.home__banner} style={{ maxHeight: height }}>
			<img src={bannerImg} alt="kasa banner" />
			{title ? <h2>{title}</h2> : ''}
		</section>
	)
}

Banner.propTypes = {
	title: PropTypes.string,
	bannerImg: PropTypes.string,
}

export default Banner
