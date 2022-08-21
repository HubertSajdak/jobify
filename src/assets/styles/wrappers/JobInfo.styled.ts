import styled from 'styled-components'
export const Wrapper = styled.div`
	margin-top: 0.5rem;
	display: flex;
	align-items: center;
	.icon {
		font-size: 0.9rem;
		margin-right: 1rem;
		display: flex;
		align-items: center;
		svg {
			color: ${({ theme }) => theme.palette.grey6};
		}
	}
	.text {
		text-transform: capitalize;
		letter-spacing: ${({ theme }) => theme.font.letterSpacing};
	}
`
