import styled from 'styled-components'

export const Wrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: ${({ theme }) => theme.border.borderRadius};
	width: 100%;
	.content {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		margin: 2rem;
		box-shadow: ${({ theme }) => theme.shadow.shadow3};
		border-radius: ${({ theme }) => theme.border.borderRadius};
		background-color: ${({ theme }) => theme.palette.white};
		border-top: 5px solid ${({ theme }) => theme.palette.primary4};
		overflow: hidden;
	}
	.logo-img {
		display: block;
		margin: 0 auto;
		width: 50%;
	}
	.register-img {
		width: 100%;
		max-width: 600px;
		display: block;
		object-fit: cover;
		background-color: ${({ theme }) => theme.palette.primary1};
	}
	.form {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 1rem;
	}
	h3 {
		text-align: center;
		margin-top: 1rem;
	}
	p {
		text-align: center;
		margin: 0;
	}
	.member-btn {
		background: transparent;
		border: transparent;
		color: ${({ theme }) => theme.palette.primary4};
		box-shadow: none;
	}
	.member-btn:hover {
		background: transparent;
		color: ${({ theme }) => theme.palette.primary2};
		border: none;
		box-shadow: none;
	}
	.btn {
		margin-bottom: 1rem;
	}
	.btn-demo {
		background-color: ${({ theme }) => theme.palette.primary2};
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.breakpointLg}) {
		.register-img {
			display: none;
		}
	} ;
`
