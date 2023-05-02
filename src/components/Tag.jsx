import styles from './Tag.module.scss'
import PropTypes from 'prop-types'

const Tag = ({ title }) => {
	return <div className={styles.tags}>{title}</div>
}

Tag.propTypes = {
	title: PropTypes.string,
}

export default Tag
