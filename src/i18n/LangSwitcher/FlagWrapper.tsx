import styled from 'styled-components'
export interface FlagWrapperProps {
	src: string
	alt: string
	onClick: React.MouseEventHandler<HTMLDivElement>
	lang: string
}

const FlagWrapper = ({ src, alt, onClick, lang }: FlagWrapperProps) => {
	return (
		<Wrapper className='flag-wrapper' onClick={onClick}>
			<img src={src} alt={alt} />
		</Wrapper>
	)
}

export default FlagWrapper

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	cursor: pointer;
	img {
		width: 25px;
		transition: all 0.2s;
	}
	img:hover {
		transform: scale(1.1);
	}
`
