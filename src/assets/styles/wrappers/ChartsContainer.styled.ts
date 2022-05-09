import styled from 'styled-components'

export const Wrapper = styled.section`
	margin-top: 4rem;
	text-align: center;
	button {
		background: transparent;
		border-color: transparent;
		text-transform: capitalize;
		color: ${({ theme }) => theme.palette.primary4};
		font-size: 1.25rem;
		cursor: pointer;
	}
	h4 {
		text-align: center;
		margin-bottom: 0.75rem;
	}
`
