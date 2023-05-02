import PropTypes from 'prop-types'
import styles from './Card.module.scss'
const Card = ({ title, cardData }) => {
	const imageSrc = cardData.cover
	const cardImgaStyle = {
		backgroundImage: `url(${imageSrc})`,
	}
	return (
		<article className={styles.card} style={cardImgaStyle}>
			<h3>{title}</h3>
		</article>
	)
}

Card.propTypes = {
	title: PropTypes.string,
	cardData: PropTypes.object,
}

export default Card
