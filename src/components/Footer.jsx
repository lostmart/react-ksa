import styles from './Footer.module.scss'
import logo from '../assets/kasa-logo-footer.svg'
import { NavLink } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<NavLink to="/">
				<img src={logo} alt="kasa logo" />
			</NavLink>
			<p>&#169; 2020. All rights reserved.</p>
		</footer>
	)
}

export default Footer
