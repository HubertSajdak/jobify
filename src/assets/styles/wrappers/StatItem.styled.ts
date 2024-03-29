import styled from 'styled-components'

interface IProps {
	color: string
	bgc: string
}

export const Wrapper = styled.article<IProps>`
	padding: 2rem;
	background: ${({ theme }) => theme.palette.white};
	border-radius: ${({ theme }) => theme.border.borderRadius};
	border-bottom: 5px solid ${props => props.color};
	box-shadow: ${({ theme }) => theme.shadow.shadow3};

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.count {
		display: block;
		font-weight: 700;
		font-size: 50px;
		color: ${props => props.color};
	}
	.title {
		margin: 0;
		text-transform: capitalize;
		letter-spacing: ${({ theme }) => theme.font.letterSpacing};
		text-align: left;
		margin-top: 0.5rem;
	}
	.icon {
		width: 70px;
		height: 60px;
		background: ${props => props.bgc};
		border-radius: ${({ theme }) => theme.border.borderRadius};
		display: flex;
		align-items: center;
		justify-content: center;
		svg {
			font-size: 2rem;
			color: ${props => props.color};
		}
	}
`
