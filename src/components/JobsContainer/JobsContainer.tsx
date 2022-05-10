import Job from 'components/Job/Job'
import { Wrapper } from 'assets/styles/wrappers/JobsContainer.styled'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { useEffect } from 'react'
import { getAllJobs } from 'features/Dashboard/allJobsSlice'
//@ts-ignore
import { Spinner } from 'react-loading-io'
import PageBtnContainer from 'components/PageBtnContainer/PageBtnContainer'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
const JobsContainer = () => {
	const { jobs, isLoading, page, totalJobs, numOfPages, search, searchStatus, searchType, sort } = useAppSelector(
		state => state.allJobs
	)
	const dispatch = useAppDispatch()
	const { t } = useTranslation('common')
	useEffect(() => {
		dispatch(getAllJobs(null))
	}, [dispatch, page, search, searchStatus, searchType, sort])

	if (isLoading) {
		return (
			<Wrapper>
				<Spinner color='royalblue' />
			</Wrapper>
		)
	}
	if (jobs.length === 0) {
		return (
			<Wrapper>
				<h2>No jobs to display</h2>
			</Wrapper>
		)
	}
	return (
		<Wrapper>
			<h5>{`${totalJobs} ${t('allJobsPage.offers')}`}</h5>
			<div className='jobs'>
				{jobs.map(job => {
					return <Job key={job._id} {...job} />
				})}
			</div>
			{numOfPages > 1 && <PageBtnContainer />}
		</Wrapper>
	)
}

export default JobsContainer
