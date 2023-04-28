import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

//layouts
import RootLayout from './layouts/RootLayout.jsx'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	)
)

export default router
