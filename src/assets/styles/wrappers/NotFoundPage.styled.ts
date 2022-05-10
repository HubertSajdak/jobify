import styled from 'styled-components'

export const Wrapper = styled.main`
	margin-top: 6rem;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	h3 {
		margin-top: 2rem;
	}
	img {
		width: 90vw;
		max-width: 600px;
	}
	a {
		color: ${({ theme }) => theme.palette.primary3};
		text-decoration: underline;
	}
`
