import styled from 'styled-components'

export const Wrapper = styled.aside`
	display: none;
	.smallbar {
		margin: 0;
		transition: all 0.3s;
	}
	.hidden {
		margin-left: -250px;
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.breakpointLg}) {
		position: fixed;
		display: flex;
		top: 50%;
		background-color: ${({ theme }) => theme.palette.white};
		box-shadow: ${({ theme }) => theme.shadow.shadow3};
		transform: translateY(-50%);
		border-top-right-radius: 1.5rem;
		border-bottom-right-radius: 1.5rem;
		overflow: hidden;
		.content {
			width: 160px;
		white-space: nowrap;
		}
		.nav-links {
			display: flex;
			flex-direction: column;
			text-align: center;
		}
		.nav-link {
			display: flex;
			align-items: center;
			width: 100%;

			padding: 1rem 1rem 1rem 1rem;
			color: ${({ theme }) => theme.palette.grey5};
			text-transform: capitalize;
			transition: all 0.3s;
		}
		.nav-link:hover {
			color: ${({ theme }) => theme.palette.primary4};
			background-color: ${({ theme }) => theme.palette.grey1};
			padding-left: 1.2rem;
		}

		.icon {
			display: block;
			margin-right: 1rem;
		}
		.active {
			position: relative;
			color: ${({ theme }) => theme.palette.white};
			background-color: ${({ theme }) => theme.palette.primary4};
			border-top-right-radius: 1.5rem;
			border-bottom-right-radius: 1.5rem;
			transition: 0.3s;
		}
		.active:hover {
			color: ${({ theme }) => theme.palette.white};
			background-color: ${({ theme }) => theme.palette.primary4};
		}
	} ;
`
