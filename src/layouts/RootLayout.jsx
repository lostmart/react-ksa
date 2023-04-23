import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
const RootLayout = () => {
	return (
        <div className="root_layout">
            <Header />
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default RootLayout
