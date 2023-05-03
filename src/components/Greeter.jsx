import PropTypes from 'prop-types'
import styles from './Greeter.module.scss'

const Greeter = ({ avatarUrl, greeterName }) => {
	return (
		<div className={styles.greeterConatiner}>
			<span> {greeterName} </span>
			<img src={avatarUrl} alt={greeterName} />
		</div>
	)
}

Greeter.propTypes = {
	avatarUrl: PropTypes.string,
	greeterName: PropTypes.string,
}

export default Greeter
