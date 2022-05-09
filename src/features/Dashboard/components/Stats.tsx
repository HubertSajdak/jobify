import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { showStats } from '../allJobsSlice'
//@ts-ignore
import { Spinner } from 'react-loading-io'
import StatsContainer from 'components/StatsContainer/StatsContainer'
import ChartsContainer from 'components/ChartsContainer/ChartsContainer'

const Stats = () => {
	const dispatch = useAppDispatch()
	const { isLoading, monthlyApplications } = useAppSelector(state => state.allJobs)

	useEffect(() => {
		dispatch(showStats())
	}, [dispatch])

	if (isLoading) {
		return <Spinner color='royalblue' />
	}
	return (
		<>
			<StatsContainer />
			{monthlyApplications.length > 0 && <ChartsContainer />}
		</>
	)
}

export default Stats
