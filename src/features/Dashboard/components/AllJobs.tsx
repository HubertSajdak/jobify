import React from 'react'
import { Wrapper } from 'assets/styles/wrappers/AllJobs.styled'
import SearchContainer from 'components/SearchContainer/SearchContainer'
import JobsContainer from 'components/JobsContainer/JobsContainer'
const AllJobs = () => {
	return (
		<Wrapper>
			<>
				<SearchContainer />
				<JobsContainer />
			</>
		</Wrapper>
	)
}

export default AllJobs
