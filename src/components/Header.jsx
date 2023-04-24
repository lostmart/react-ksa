import { NavLink } from 'react-router-dom'
import logo from '../assets/kasa-LOGO-big.svg'

const Header = (props) => {
	return (
		<header className="header">
			<nav className="header__navBar">
				{props.path}
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
