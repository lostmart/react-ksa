import { NavLink } from 'react-router-dom'
import logo from '../assets/kasa-LOGO-big.svg'

const Header = () => {
	return (
		<header className="header">
			<nav className="header__navBar">
				<NavLink to="/">
					<img src={logo} alt="kasa logo" />
				</NavLink>

				<div className="header__navBar__links">
					<NavLink to="/">Accueil</NavLink>
					<NavLink to="/about">A Propos</NavLink>
				</div>
			</nav>
		</header>
	)
}

export default Header
