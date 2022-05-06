import './App.css'
import { ThemeProvider } from 'styled-components'
import { theme } from './assets/styles/theme/theme'
//toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//components
import Landing from 'features/Landing/Landing'
import NotFound from 'components/NotFound/NotFound'
import Register from 'features/Register/Register'
import SharedLayout from 'features/Dashboard/views/SharedLayout'
import Stats from 'features/Dashboard/components/Stats'
import AllJobs from 'features/Dashboard/components/AllJobs'
import AddJob from 'features/Dashboard/components/AddJob'
import Profile from 'features/Dashboard/components/Profile'
import PrivateRoute from 'auth/PrivateRoute'
function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={
							<PrivateRoute>
								<SharedLayout />
							</PrivateRoute>
						}>
						<Route index element={<Stats />} />
						<Route path='all-jobs' element={<AllJobs />} />
						<Route path='add-job' element={<AddJob />} />
						<Route path='profile' element={<Profile />} />
					</Route>
					<Route path='/landing' element={<Landing />} />
					<Route path='/register' element={<Register />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
			<ToastContainer position='top-center' />
		</ThemeProvider>
	)
}

export default App
