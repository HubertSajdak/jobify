import LangSwitcher from 'i18n/LangSwitcher/LangSwitcher'
import Logo from 'components/Logo/Logo'
import landingImg from 'assets/images/landing-img.svg'
import Wrapper from 'assets/styles/wrappers/LandingPage.styled'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
const Landing = () => {
	const { t } = useTranslation('common')
	return (
		<Wrapper>
			<nav>
				<Logo />
				<LangSwitcher />
			</nav>
			<div className='container page'>
				<div className='info'>
					<h1>{t('landingPage.header')}</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, quaerat quidem autem consequuntur fuga iusto
						ad architecto consequatur, harum aspernatur distinctio possimus non totam at.
					</p>
					<Link to='/register' className='btn'>
						{t('landingPage.register')}
					</Link>
				</div>
				<img className='landing-img' src={landingImg} alt='a person with laptop' />
			</div>
		</Wrapper>
	)
}

export default Landing
