import BigSidebar from 'components/BigSidebar/BigSidebar'
import Navbar from 'components/Navbar/Navbar'
import SmallSidebar from 'components/SmallSidebar/SmallSidebar'
import { Wrapper } from 'assets/styles/wrappers/SharedLayout.styled'
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
	return (
		<Wrapper>
			<main className='dashboard'>
				<SmallSidebar />
				<BigSidebar />
				<div>
					<Navbar />
					<div className='dashboard-page'>
						<Outlet />
					</div>
				</div>
			</main>
		</Wrapper>
	)
}

export default SharedLayout
