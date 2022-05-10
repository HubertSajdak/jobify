import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import FlagWrapper from './FlagWrapper'

export const extendedAvaliableLangs = [
	{
		lang: 'pl',
		iconUrl: 'https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg',
	},
	{
		lang: 'en',
		iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg',
	},
	{
		lang: 'de',
		iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg',
	},
]

const LangSwitcher = () => {
	const { i18n } = useTranslation()

	return (
		<Wrapper className='lang-switcher'>
			{extendedAvaliableLangs.map(lang => (
				<FlagWrapper
					key={lang.lang}
					alt={lang.lang}
					src={lang.iconUrl}
					lang={lang.lang}
					onClick={() => i18n.changeLanguage(lang.lang)}
				/>
			))}
		</Wrapper>
	)
}

export default LangSwitcher

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	padding: 1rem 0;
	border-top: 1px solid ${({ theme }) => theme.palette.grey2};
`
