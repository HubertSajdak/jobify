import { Wrapper } from 'assets/styles/wrappers/BigSidebar.styled'
import Logo from 'components/Logo/Logo'
import NavLinks from 'components/NavLinks/NavLinks'
import { useAppSelector } from 'store/hooks'
import LangSwitcher from 'i18n/LangSwitcher/LangSwitcher'
const BigSidebar = () => {
	const { isSidebarOpen } = useAppSelector(state => state.sidebar)
	return (
		<Wrapper>
			<div className={isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
				<div className='content'>
					<header>
						<Logo />
					</header>
					<NavLinks />
				</div>
				<LangSwitcher />
			</div>
		</Wrapper>
	)
}

export default BigSidebar
