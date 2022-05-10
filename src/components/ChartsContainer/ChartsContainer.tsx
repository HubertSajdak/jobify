import { Wrapper } from 'assets/styles/wrappers/ChartsContainer.styled'
import AreaResponsiveChart from 'components/AreaChart/AreaResponsiveChart'
import { useAppSelector } from 'store/hooks'
import { useTranslation } from 'react-i18next'
const ChartsContainer = () => {
	const { monthlyApplications } = useAppSelector(state => state.allJobs)
	const { t } = useTranslation('common')
	return (
		<Wrapper>
			<h4>{t('statsPage.statsHeader')}</h4>
			<AreaResponsiveChart monthlyApplications={monthlyApplications} />
		</Wrapper>
	)
}

export default ChartsContainer
