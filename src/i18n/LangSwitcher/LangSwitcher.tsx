import { useTranslation } from 'react-i18next'
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
	// i18n - instancja i18n - tego obiektu który ma w sobie wszystkie ustawienia który ty podałeś w pliku i18n
	const { i18n } = useTranslation()

	return (
		<div
			style={{
				position: 'fixed',
				top: 10,
				right: 10,
				display: 'flex',
				flexDirection: 'row',
				gap: '1rem',
			}}>
			{extendedAvaliableLangs.map(lang => (
				<FlagWrapper
					key={lang.lang}
					alt={lang.lang}
					src={lang.iconUrl}
					onClick={() => i18n.changeLanguage(lang.lang)}
				/>
			))}
		</div>
	)
}

export default LangSwitcher
