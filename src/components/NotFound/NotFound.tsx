import img from '../../assets/images/not-found-img.svg'
import { Wrapper } from 'assets/styles/wrappers/NotFoundPage.styled'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const NotFound = () => {
	const { t } = useTranslation('common')
	return (
		<Wrapper>
			<img src={img} alt='page not found' />
			<div className='text'>
				<h3>{t('notFoundPage.header')}</h3>
				<p>{t('notFoundPage.text')}</p>
			</div>
			<Link to='/'>{t('notFoundPage.link')}</Link>
		</Wrapper>
	)
}

export default NotFound
