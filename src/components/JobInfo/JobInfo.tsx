import { IconType } from 'react-icons/lib'
import { Wrapper } from 'assets/styles/wrappers/JobInfo.styled'
interface JobInfoProps {
	icon: IconType | any
	text: string
}
const JobInfo = ({ icon, text }: JobInfoProps) => {
	console.log(text)
	return (
		<Wrapper>
			<span className='icon'>{icon}</span>
			<span className='text'>{text}</span>
		</Wrapper>
	)
}

export default JobInfo
