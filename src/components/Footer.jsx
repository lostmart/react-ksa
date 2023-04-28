import styles from './Footer.module.scss'
import logo from '../assets/kasa-logo-footer.svg'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Footer = ({ nameOfClass }) => {
	return (
		<footer className={nameOfClass + styles.footer}>
			<NavLink to="/">
				<img src={logo} alt="kasa logo" />
			</NavLink>
			<p>&#169; 2020. All rights reserved.</p>
		</footer>
	)
}

Footer.propTypes = {
	nameOfClass: PropTypes.string,
}

export default Footer
