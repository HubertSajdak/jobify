import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'

import { Wrapper } from 'assets/styles/wrappers/PageBtnContainer'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { changePage } from 'features/Dashboard/allJobsSlice'
const PageBtnContainer = () => {
	const dispatch = useAppDispatch()
	const { numOfPages, page } = useAppSelector(state => state.allJobs)

	const pages = Array.from({ length: numOfPages }, (_, index) => {
		return index + 1
	})
	const nextPage = () => {
		let newPage = page + 1
		if (newPage > numOfPages) {
			newPage = 1
		}
		dispatch(changePage(newPage))
	}
	const prevPage = () => {
		let newPage = page - 1
		if (newPage < 1) {
			newPage = numOfPages
		}
		dispatch(changePage(newPage))
	}

	return (
		<Wrapper>
			<button className='prev-btn' onClick={prevPage}>
				<HiChevronDoubleLeft />
				prev
			</button>
			<div className='btn-container'>
				{pages.map(pageNumber => {
					return (
						<button type='button'
							key={pageNumber}
							className={pageNumber === page ? 'pageBtn active' : 'pageBtn'}
							onClick={() => dispatch(changePage(pageNumber))}>
							{pageNumber}
						</button>
					)
				})}
			</div>
			<button className='next-btn' onClick={nextPage}>
				next
				<HiChevronDoubleRight />
			</button>
		</Wrapper>
	)
}

export default PageBtnContainer
