import { Wrapper } from 'assets/styles/wrappers/StatItem.styled'
import { StatItemProps } from 'types/types'
const StatItem = ({ count, title, icon, color, bgc }: StatItemProps) => {
	return (
		<Wrapper color={color} bgc={bgc}>
			<header>
				<span className='count'>{count}</span>
				<span className='icon'>{icon}</span>
			</header>
			<h5 className='title'>{title}</h5>
		</Wrapper>
	)
}

export default StatItem
