export interface FlagWrapperProps {
	src: string
	alt: string
	onClick: React.MouseEventHandler<HTMLDivElement>
}

const size = 25

const FlagWrapper = ({ src, alt, onClick }: FlagWrapperProps) => {
	return (
		<div
			onClick={onClick}
			style={{
				width: size,
				height: size,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<img src={src} alt={alt} width={size} />
		</div>
	)
}

export default FlagWrapper
