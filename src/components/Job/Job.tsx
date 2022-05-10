import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import JobInfo from 'components/JobInfo/JobInfo'
import { Wrapper } from 'assets/styles/wrappers/Job.styled'
import { useAppDispatch } from 'store/hooks'
import { JobProps } from 'types/types'
import moment from 'moment'
import 'moment/locale/de'
import 'moment/locale/pl'
import 'moment/locale/en-gb'
import { Link } from 'react-router-dom'
import { deleteJob, setEditJob } from 'features/Dashboard/jobSlice'
import { useTranslation } from 'react-i18next'
const Job = ({ _id, position, company, jobLocation, jobType, createdAt, status }: JobProps) => {
	const { t } = useTranslation('common')
	const dispatch = useAppDispatch()
	const date = moment(createdAt).locale(t('momentTrans.momentLang')).format('Do MMM YYYY')

	return (
		<Wrapper statusInfo={status}>
			<header>
				<div className='main-icon'>{company.charAt(0)}</div>

				<div className='info'>
					<h5>{position}</h5>
					<p>{company}</p>
				</div>
			</header>
			<div className='content'>
				<div className='content-center'>
					<JobInfo icon={<FaLocationArrow />} text={jobLocation} />
					<JobInfo icon={<FaCalendarAlt />} text={date} />
					<JobInfo icon={<FaBriefcase />} text={t(`statusAndJobTypeOptions.${jobType}`)} />
					<div className={`status ${status}`}>{t(`statusAndJobTypeOptions.${status}`)}</div>
				</div>
				<footer>
					<div className='actions'>
						<Link
							to='/add-job'
							className='btn edit-btn'
							onClick={() => dispatch(setEditJob({ editJobId: _id, position, company, jobLocation, jobType, status }))}>
							{t('allJobsPage.editButton')}
						</Link>
						<button
							type='button'
							className='btn delete-btn'
							onClick={() => {
								dispatch(deleteJob(_id))
							}}>
							{t('allJobsPage.clearButton')}
						</button>
					</div>
				</footer>
			</div>
		</Wrapper>
	)
}

export default Job
