import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'

const NotFound = () => {
	return (
		<div className={styles.container}>
			<span>404</span>
			<h4>Oups! La page que vous demandez n'existe pas.</h4>
			<p>
				<NavLink to="/">Retourner sur la page d’accueil.</NavLink>
			</p>
		</div>
	)
}

export default NotFound
