import styled from 'styled-components'

export const Wrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.palette.white};
	box-shadow: ${({ theme }) => theme.shadow.shadow3};
	border-radius: ${({ theme }) => theme.border.borderRadius};
	padding: 2rem;
	.form {
		width: 100%;
	}
	.add-job-img {
		display: flex;
		justify-content: center;
	}
	img {
		width: 100%;
		max-width: 150px;
	}
	.form-center {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		column-gap: 1.5rem;
		margin-top: 1rem;
		align-items: center;
	}

	.btn-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 1rem;
		margin-top: 0.5rem;
		height: 35px;
	}
	.clear-btn {
		background-color: ${({ theme }) => theme.palette.grey4};
	}
	.clear-btn:hover {
		background-color: ${({ theme }) => theme.palette.grey6};
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.breakpointLg}) {
		.form-center {
			grid-template-columns: 1fr;
		}
	} ;
`
