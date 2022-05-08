import Job from 'components/Job/Job'
import { Wrapper } from 'assets/styles/wrappers/JobsContainer.styled'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { BubbleSpinLoader } from 'react-css-loaders'
import { useEffect } from 'react'
import { getAllJobs } from 'features/Dashboard/allJobsSlice'
const JobsContainer = () => {
	const { jobs, isLoading } = useAppSelector(state => state.allJobs)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getAllJobs(null))
	}, [dispatch])

	if (isLoading) {
		return (
			<Wrapper>
				<h2>loading</h2>
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
			<h5>jobs info</h5>
			<div className='jobs'>
				{jobs.map(job => {
					return <Job key={job._id} {...job} />
				})}
			</div>
		</Wrapper>
	)
}

export default JobsContainer
