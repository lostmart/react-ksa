import PropTypes from 'prop-types'
import styles from './Card.module.scss'
const Card = ({ title }) => {
	return (
		<article className={styles.card}>
			<h3>{title}</h3>
		</article>
	)
}

Card.propTypes = {
	title: PropTypes.string,
}

export default Card
