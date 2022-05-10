import { Navigate } from 'react-router-dom'
import { useAppSelector } from 'store/hooks'
import { RouteProps } from 'react-router-dom'

const PrivateRoute = ({ children }: RouteProps) => {
	const { user } = useAppSelector(state => state.user)
	if (!user) {
		return <Navigate to='/landing' />
	}
	return <>{children}</>
}

export default PrivateRoute
