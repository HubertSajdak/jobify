import styled from 'styled-components'
const Wrapper = styled.main`
	.container {
		margin: 6rem 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	nav {
		display: flex;
		max-width: var(--max-width);
		margin: 2rem auto;
		align-items: center;
	}
	h1 {
		font-weight: 600;
	}
	span {
		color: var(--primary-200);
	}
	.landing-img {
		width: 500px;
	}
	.logo-img {
		width: 200px;
	}
	.lang-switcher {
		position: fixed;
		border: none;
		top: 1rem;
		right: 1rem;
		width: auto;
		gap: 1rem;
	}

	@media (max-width: 992px) {
		.landing-img {
			display: none;
		}
		.container {
			justify-content: flex-start;
			align-items: center;
		}
		nav {
			display: flex;
			max-width: var(--max-width);
			margin: 2rem 2rem;
		}
	}
`
export default Wrapper
