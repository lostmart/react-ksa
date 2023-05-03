import styles from './Carrousel.module.scss'
//import PropTypes from 'prop-types'

const Carrousel = ({ imgsArray }) => {
	return (
		<div className={styles.carouselContainer}>
			{imgsArray.map((img, indx) => (
				<div key={indx} className={styles.carouselItem}>
					<img src={img} alt={`carousel ${indx}`} style={{ width: '100%' }} />
					<div className="numbertext">1 / 3</div>
				</div>
			))}

			<button className="prev">&#10094;</button>
			<button className="next">&#10095;</button>
		</div>
	)
}

// Carrousel.propTypes = {
// 	imgsArray: PropTypes.array,
// }

export default Carrousel
