import { Wrapper } from 'assets/styles/wrappers/SmallSidebar.styled'
import NavLinks from 'components/NavLinks/NavLinks'
import { useAppSelector } from 'store/hooks'
const SmallSidebar = () => {
	const { isSidebarOpen } = useAppSelector(state => state.sidebar)

	return (
		<Wrapper>
			<div className={isSidebarOpen ? 'smallbar' : 'smallbar hidden'}>
				<div className='content'>
					<NavLinks />
				</div>
			</div>
		</Wrapper>
	)
}

export default SmallSidebar
