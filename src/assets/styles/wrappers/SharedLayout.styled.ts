import styled from 'styled-components'

export const Wrapper = styled.section`
	.dashboard {
		display: grid;
		grid-template-columns: 1fr;
	}
	.dashboard-page {
		width: 90vw;
		margin: 0 auto;
		padding: 2rem 0;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.breakpointLg}) {
		.dashboard {
			grid-template-columns: auto 1fr;
		}
		.dashboard-page {
			width: 90%;
		}
	} ;
`