import styled from 'styled-components'

export const Wrapper = styled.aside`
	display: none;
	grid-column: 1/2;
	.logo-img {
		width: 100%;
		max-width: 180px;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.breakpointLg}) {
		display: block;
		box-shadow: ${({ theme }) => theme.shadow.shadow3};
		.sidebar-container {
			background: ${({ theme }) => theme.palette.white};
			min-height: 100vh;
			width: 250px;
			margin-left: -250px;
			transition: all 0.3s;
			height: 100%;
		}
		.content {
			position: sticky;
			top: 0;
		}
		.show-sidebar {
			margin-left: 0;
		}
		header {
			height: 6rem;
			display: grid;
			place-items: center;
		}
		.nav-links {
			padding-top: 2rem;
			display: flex;
			align-items: flex-start;
			flex-direction: column;
		}
		.nav-link {
			display: flex;
			align-items: center;
			width: 100%;
			padding: 1rem 1rem 1rem 2.5rem;
			color: ${({ theme }) => theme.palette.grey5};
			text-transform: capitalize;
			transition: all 0.3s;
		}
		.nav-link:hover {
			color: ${({ theme }) => theme.palette.primary4};
			background-color: ${({ theme }) => theme.palette.grey1};
			padding-left: 3rem;
		}
		.icon {
			font-size: 1.5rem;
			margin-right: 1rem;
		}
		.active {
			position: relative;
			color: ${({ theme }) => theme.palette.white};
			background-color: ${({ theme }) => theme.palette.primary4};
			border-top-right-radius: 1.5rem;
			border-bottom-right-radius: 1.5rem;
			padding-left: 3rem;
			transition: 0.3s;
		}

		.active:hover {
			color: ${({ theme }) => theme.palette.white};
			background-color: ${({ theme }) => theme.palette.primary4};
		}
	} ;
`
