import React from 'react'
import StatItem from 'components/StatItem/StatItem'
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa'
import { Wrapper } from 'assets/styles/wrappers/StatsContainer.styled'
import { useAppSelector } from 'store/hooks'
import { DefaultStatsProps } from 'types/types'
import { theme } from 'assets/styles/theme/theme'
import { useTranslation } from 'react-i18next'
const StatsContainer = () => {
	const { stats } = useAppSelector(state => state.allJobs)
	const { t } = useTranslation('common')
	const defaultStats: DefaultStatsProps[] = [
		{
			title: `${t('statsPage.pendingStatItem')}`,
			count: stats.pending || 0,
			icon: <FaSuitcaseRolling />,
			color: '#e9b949',
			bgc: '#fcefc7',
		},
		{
			title: `${t('statsPage.interviewStatItem')}`,
			count: stats.interview || 0,
			icon: <FaCalendarCheck />,
			color: '#647acb',
			bgc: '#e0e8f9',
		},
		{
			title: `${t('statsPage.declinedStatItem')}`,
			count: stats.declined || 0,
			icon: <FaBug />,
			color: '#d66a6a',
			bgc: '#ffeeee',
		},
	]

	return (
		<Wrapper>
			{defaultStats.map((item, index) => {
				return <StatItem key={index} {...item} />
			})}
		</Wrapper>
	)
}

export default StatsContainer
