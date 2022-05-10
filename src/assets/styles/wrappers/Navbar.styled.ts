import styled from 'styled-components'

export const Wrapper = styled.nav`
	height: ${({ theme }) => theme.nav.navHeight};
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: ${({ theme }) => theme.shadow.shadow3};
	background-color: ${({ theme }) => theme.palette.white};
	.nav-center {
		display: flex;
		width: 90%;
		justify-content: space-between;
		align-items: center;
	}
	h3 {
		margin: 0;
	}
	.btn-container {
		position: relative;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		white-space: nowrap;
	}
	.burger-icon {
		display: grid;
		place-items: center;
		font-size: 1.8rem;
		color: ${({ theme }) => theme.palette.primary3};
		cursor: pointer;
	}
	.logo {
		display: none;
		place-items: center;
	}
	.logo-img {
		width: 40%;
		min-width: 80px;
	}
	.user-icon {
		min-width: 16px;
	}
	.times-icon {
		animation: 0.5s forwards iconRotate;
	}
	.dropdown {
		position: absolute;
		top: 40px;
		left: 0;
		width: 100%;
		padding: 0.5rem;
		text-align: center;
		visibility: hidden;
		color: ${({ theme }) => theme.palette.primary3};
		background-color: ${({ theme }) => theme.palette.primary1};
		box-shadow: ${({ theme }) => theme.shadow.shadow3};
	}
	.dropdown:hover {
		color: ${({ theme }) => theme.palette.white};
		background-color: ${({ theme }) => theme.palette.primary3};
	}
	.show-dropdown {
		visibility: visible;
		transition: 0.3s;
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.breakpointLg}) {
		.logo {
			display: grid;
		}
		h3 {
			display: none;
		}
	}

	@keyframes iconRotate {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}
`
