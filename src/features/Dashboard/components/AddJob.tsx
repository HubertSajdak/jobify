import FormInput from 'components/FormInput/FormInput'
import FormSelect from 'components/FormSelect/FormSelect'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { toast } from 'react-toastify'
import { Wrapper } from 'assets/styles/wrappers/AddJob.styled'
import addImg from 'assets/images/add-job-img.svg'
import React, { useEffect } from 'react'
import { clearValues, createJob, editJob, handleChange } from '../jobSlice'
import { useTranslation } from 'react-i18next'
const AddJob = () => {
	const { t } = useTranslation('common')
	const { user } = useAppSelector(state => state.user)
	const dispatch = useAppDispatch()
	const {
		isLoading,
		position,
		company,
		jobLocation,
		jobTypeOptions,
		jobType,
		statusOptions,
		status,
		isEditing,
		editJobId,
	} = useAppSelector(state => state.job)

	useEffect(() => {
		if (!isEditing) {
			dispatch(handleChange({ name: 'jobLocation', value: user!.location }))
		}
	}, [dispatch, isEditing, user])

	const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault()
		if (!position || !company || !jobLocation) {
			toast.error('Please fill out all fields')
			return
		}
		if (isEditing) {
			dispatch(editJob({ jobId: editJobId, job: { position, company, jobLocation, jobType, status } }))
			return
		}
		dispatch(createJob({ position, company, jobLocation, jobType, status }))
	}
	const handleJobInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const name = e.target.name
		const value = e.target.value
		dispatch(handleChange({ name, value }))
	}

	return (
		<Wrapper>
			<form className='form'>
				<h3>{isEditing ? t('addJobPage.headerEdit') : t('addJobPage.headerAdd')}</h3>
				<div className='add-job-img'>
					<img src={addImg} alt='new files' />
				</div>
				<div className='form-center'>
					<FormInput
						name='position'
						labelText={t('addJobPage.positionInput')}
						type='text'
						value={position}
						handleChange={handleJobInput}
					/>
					<FormInput
						name='company'
						labelText={t('addJobPage.companyInput')}
						type='text'
						value={company}
						handleChange={handleJobInput}
					/>
					<FormInput
						name='jobLocation'
						labelText={t('addJobPage.jobLocationInput')}
						type='text'
						value={jobLocation}
						handleChange={handleJobInput}
					/>
					<FormSelect
						name='status'
						labelText={t('addJobPage.statusSelectLabel')}
						value={status}
						handleChange={handleJobInput}
						list={statusOptions}
					/>
					<FormSelect
						name='jobType'
						labelText={t('addJobPage.jobTypeSelectLabel')}
						value={jobType}
						handleChange={handleJobInput}
						list={jobTypeOptions}
					/>
					<div className='btn-container'>
						<button type='button' className='btn clear-btn' onClick={() => dispatch(clearValues())}>
							{t('addJobPage.clearBtn')}
						</button>
						<button type='submit' className='btn' disabled={isLoading} onClick={handleSubmit}>
							{t('addJobPage.submitBtn')}
						</button>
					</div>
				</div>
			</form>
		</Wrapper>
	)
}

export default AddJob
