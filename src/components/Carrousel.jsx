import styles from './Carrousel.module.scss'
import { useState } from 'react'
import PropTypes from 'prop-types'

const Carrousel = ({ imgsArray }) => {
	const [active, setActive] = useState(0)

	const handleClick = (direction) => {
		if (direction === 'right' && imgsArray.length - 1 > active) {
			setActive(active + 1)
		} else if (direction === 'right' && imgsArray.length - 1 === active) {
			setActive(0)
		}
		if (direction === 'left' && active === 0) {
			setActive(imgsArray.length - 1)
		} else if (direction === 'left') {
			setActive(active - 1)
		}
	}

	return (
		<div className={styles.carouselContainer}>
			{imgsArray.map((img, indx) => (
				<div
					key={indx}
					className={
						indx === active ? styles.carouselItem + ' fade' : ' d-none fade'
					}>
					<img src={img} alt={`carousel ${indx}`} />
					<div className="numbertext">1 / 3</div>
				</div>
			))}

			<button className={styles.prev} onClick={() => handleClick('left')}>
				&#10094;
			</button>
			<button className={styles.next} onClick={() => handleClick('right')}>
				&#10095;
			</button>
		</div>
	)
}

Carrousel.propTypes = {
	imgsArray: PropTypes.array,
}

export default Carrousel
