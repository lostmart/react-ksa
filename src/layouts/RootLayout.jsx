import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const RootLayout = () => {
	const location = window.location.pathname

	return (
		<div className="root_layout">
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer
				nameOfClass={location === '/' || location === '/about' ? '' : 'd-none'}
			/>
		</div>
	)
}

export default RootLayout
