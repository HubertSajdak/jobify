import { Wrapper } from 'assets/styles/wrappers/Navbar.styled'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import Logo from 'components/Logo/Logo'
import { sidebarActions } from 'features/Dashboard/sidebarSlice'
import { userActions } from 'features/Register/userSlice'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
const Navbar = () => {
	const { t } = useTranslation('common')
	const { user } = useAppSelector(state => state.user)
	const dispatch = useAppDispatch()
	const [showLogout, setShowLogout] = useState(false)
	const toggleSidebar = () => {
		dispatch(sidebarActions.toggleSidebar())
	}
	const logoutUser = () => {
		dispatch(userActions.logoutUser('Loggin out'))
	}

	return (
		<Wrapper>
			<div className='nav-center'>
				<div className='burger-icon' onClick={toggleSidebar}>
					<FaAlignLeft />
				</div>
				<div className='logo'>
					<Logo />
				</div>
				<h3>
					{t('navbar.greetings')} {user?.name}
				</h3>
				<div className='btn-container'>
					<button className='btn btn-container' onClick={() => setShowLogout(!showLogout)}>
						<FaUserCircle className='user-icon' />
						{user?.name}
						<FaCaretDown />
					</button>
					<button className={showLogout ? 'btn dropdown show-dropdown' : 'btn dropdown'} onClick={logoutUser}>
						{t('navbar.logoutBtn')}
					</button>
				</div>
			</div>
		</Wrapper>
	)
}

export default Navbar
