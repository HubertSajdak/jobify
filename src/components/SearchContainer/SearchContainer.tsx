import { Wrapper } from 'assets/styles/wrappers/SearchContainer.styled'
import FormInput from 'components/FormInput/FormInput'
import FormSelect from 'components/FormSelect/FormSelect'
import { clearFilters, handleChange } from 'features/Dashboard/allJobsSlice'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from 'store/hooks'
const SearchContainer = () => {
	const dispatch = useAppDispatch()
	const { t } = useTranslation('common')
	const { isLoading, search, searchStatus, searchType, sort, sortOptions } = useAppSelector(state => state.allJobs)
	const { jobTypeOptions, statusOptions } = useAppSelector(state => state.job)

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		if (isLoading) return
		dispatch(handleChange({ name: e.target.name, value: e.target.value }))
	}
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(clearFilters())
	}

	return (
		<Wrapper>
			<form className='form' onSubmit={handleSubmit}>
				<h4>{t('statusAndJobTypeOptions.searchHeader')}</h4>
				<div className='form-center'>
					<FormInput
						type='text'
						labelText={t('statusAndJobTypeOptions.searchInput')}
						name='search'
						value={search}
						handleChange={handleSearch}
					/>
					<FormSelect
						labelText={t('statusAndJobTypeOptions.statusSelect')}
						name='searchStatus'
						value={searchStatus}
						list={['all', ...statusOptions]}
						handleChange={handleSearch}
					/>
					<FormSelect
						labelText={t('statusAndJobTypeOptions.typeSelect')}
						name='searchType'
						value={searchType}
						list={['all', ...jobTypeOptions]}
						handleChange={handleSearch}
					/>
					<FormSelect
						labelText={t('statusAndJobTypeOptions.sortSelect')}
						name='sort'
						value={sort}
						list={sortOptions}
						handleChange={handleSearch}
					/>
					<button className='btn' disabled={isLoading}>
						{t('statusAndJobTypeOptions.clearFilters')}
					</button>
				</div>
			</form>
		</Wrapper>
	)
}

export default SearchContainer
