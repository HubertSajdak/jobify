import styled from 'styled-components'

export const Wrapper = styled.section`
	background-color: ${({ theme }) => theme.palette.white};
	padding: 2rem;
	border-radius: ${({ theme }) => theme.border.borderRadius};
	box-shadow: ${({ theme }) => theme.shadow.shadow3};
	.form {
		width: 100%;
		max-width: 100%;
	}
	.form-input,
	.form-select {
		height: 35px;
	}
	.form-row {
		margin-bottom: 0;
	}
	.form-center {
		display: grid;
		grid-template-columns: 1fr;
		column-gap: 2rem;
		row-gap: 0.5rem;
		align-items: flex-end;
	}
	h5 {
		font-weight: 700;
	}
	.btn {
		height: 35px;
		background-color: ${({ theme }) => theme.palette.grey4};
	}
	.btn:hover {
		background-color: ${({ theme }) => theme.palette.grey6};
	}

	@media (min-width: 768px) {
		.form-center {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media (min-width: 992px) {
		.form-center {
			grid-template-columns: 1fr 1fr 1fr;
		}
		.btn-block {
			margin-top: 0;
		}
	}
`
