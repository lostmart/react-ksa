import styles from './GreeterRatings.module.css'
import Greeter from '../Greeter'
import PropTypes from 'prop-types'

export const GreeterRatings = ({ greeterName, avatarUrl, starList }) => {
	return (
		<div className={styles.container}>
			<div className={styles.starCont}>{starList}</div>
			<Greeter greeterName={greeterName} avatarUrl={avatarUrl} />
		</div>
	)
}

GreeterRatings.propTypes = {
	greeterName: PropTypes.string,
	avatarUrl: PropTypes.string,
	starList: PropTypes.array,
}
