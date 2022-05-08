import styled, { css } from 'styled-components'

interface IProps {
	statusInfo?: string
}

export const Wrapper = styled.article<IProps>`
	background: ${({ theme }) => theme.palette.white};
	border-radius: ${({ theme }) => theme.border.borderRadius};
	display: grid;
	grid-template-rows: 1fr auto;
	box-shadow: ${({ theme }) => theme.shadow.shadow3};
	${({ statusInfo }) =>
		statusInfo === 'interview' &&
		css`
			border-bottom: 5px solid ${({ theme }) => theme.palette.primary1};
		`}
	${({ statusInfo }) =>
		statusInfo === 'pending' &&
		css`
			border-bottom: 5px solid ${({ theme }) => theme.palette.statusYellow};
		`}
	${({ statusInfo }) =>
		statusInfo === 'declined' &&
		css`
			border-bottom: 5px solid ${({ theme }) => theme.palette.statusRed};
		`}
	header {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		padding: 1rem 1.5rem;
		border-top-left-radius: ${({ theme }) => theme.border.borderRadius};
		border-top-right-radius: ${({ theme }) => theme.border.borderRadius};
		border-bottom: 1px solid ${({ theme }) => theme.palette.grey3};
		background-color: ${({ theme }) => theme.palette.primary1};
		${({ statusInfo }) =>
			statusInfo === 'interview' &&
			css`
				background-color: ${({ theme }) => theme.palette.primary1};
			`}
		${({ statusInfo }) =>
			statusInfo === 'pending' &&
			css`
				background-color: ${({ theme }) => theme.palette.statusYellow};
			`}
		${({ statusInfo }) =>
			statusInfo === 'declined' &&
			css`
				background-color: ${({ theme }) => theme.palette.statusRed};
			`}

		h5 {
			letter-spacing: 0;
		}
	}
	.main-icon {
		width: 60px;
		height: 60px;
		display: grid;
		place-items: center;
		background: ${({ theme }) => theme.palette.primary3};
		border-radius: ${({ theme }) => theme.border.borderRadius};
		font-size: 1.5rem;
		font-weight: 700;
		text-transform: uppercase;
		color: ${({ theme }) => theme.palette.white};
		margin-right: 2rem;
	}
	.info {
		h5 {
			margin-bottom: 0.25rem;
			letter-spacing: ${({ theme }) => theme.font.letterSpacing};
		}
		p {
			margin: 0;
			text-transform: capitalize;
			color: ${({ theme }) => theme.palette.grey7};
			letter-spacing: ${({ theme }) => theme.font.letterSpacing};
		}
	}
	.pending {
		background: #fcefc7;
		color: #e9b949;
	}
	.interview {
		background: #e0e8f9;
		color: #647acb;
	}
	.declined {
		color: #d66a6a;
		background: #ffeeee;
	}
	.content {
		padding: 1rem 1.5rem;
	}
	.content-center {
		display: grid;
		grid-template-columns: 1fr;
		row-gap: 0.5rem;
		@media (min-width: 576px) {
			grid-template-columns: 1fr 1fr;
		}
	}
	.status {
		border-radius: ${({ theme }) => theme.border.borderRadius};
		text-transform: capitalize;
		letter-spacing: ${({ theme }) => theme.font.letterSpacing};
		text-align: center;
		/* width: 100px; */
		height: 30px;
		margin-top: 0.5rem;
		white-space: nowrap;
		overflow: hidden;
	}
	footer {
		margin-top: 1rem;
	}
	.edit-btn,
	.delete-btn {
		letter-spacing: ${({ theme }) => theme.font.letterSpacing};
		cursor: pointer;
		height: 30px;
	}
	.edit-btn {
		display: flex;
		align-items: center;
		color: ${({ theme }) => theme.palette.greenDark};
		background: ${({ theme }) => theme.palette.greenLight};
		margin-right: 0.5rem;
		padding: 0 0.75rem;
	}
	.delete-btn {
		color: ${({ theme }) => theme.palette.redDark};
		background: ${({ theme }) => theme.palette.redLight};
	}
	.edit-btn:hover {
		color: white;
		background: ${({ theme }) => theme.palette.greenDark};
	}
	.delete-btn:hover {
		color: white;
		background: tomato;
	}
	.actions {
		display: flex;
		align-items: center;
	}
	&:hover .actions {
		visibility: visible;
	}
`
