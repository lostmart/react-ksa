import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom'

// Pages
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

//layouts
import RootLayout from './layouts/RootLayout.jsx'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
		</Route>
	)
)

export default router
