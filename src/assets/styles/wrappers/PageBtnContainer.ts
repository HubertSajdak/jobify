import styled from 'styled-components'

export const Wrapper = styled.section`
	height: 6rem;
	margin-top: 2rem;
	display: flex;
	align-items: center;
	justify-content: end;
	flex-wrap: wrap;
	gap: 1rem;
	.btn-container {
		background: ${({ theme }) => theme.palette.primary2};
		border-radius: ${({ theme }) => theme.border.borderRadius};
	}
	.pageBtn {
		background: transparent;
		border-color: transparent;
		width: 50px;
		height: 40px;
		font-weight: 700;
		font-size: 1.25rem;
		color: ${({ theme }) => theme.palette.primary4};
		transition: 0.3s;
		border-radius: ${({ theme }) => theme.border.borderRadius};
		cursor: pointer;
	}
	.active {
		background: ${({ theme }) => theme.palette.primary3};
		color: ${({ theme }) => theme.palette.white};
	}
	.prev-btn,
	.next-btn {
		width: 100px;
		height: 40px;
		background: ${({ theme }) => theme.palette.white};
		border-color: transparent;
		border-radius: ${({ theme }) => theme.border.borderRadius};
		color: ${({ theme }) => theme.palette.primary4};
		text-transform: capitalize;
		letter-spacing: ${({ theme }) => theme.font.letterSpacing};
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		cursor: pointer;
		transition: 0.3s;
	}
	.prev-btn:hover,
	.next-btn:hover {
		background: ${({ theme }) => theme.palette.primary3};
		color: ${({ theme }) => theme.palette.white};
	}
`
