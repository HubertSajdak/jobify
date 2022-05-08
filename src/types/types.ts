// register types

export interface RegisterProps {
	name: string
	email: string
	password: string
	isMember: boolean
}
export interface FormInputProps {
	type: string
	name: string
	value: string
	handleChange: React.ChangeEventHandler<HTMLInputElement>
	labelText: string
}
export interface UserStateProps {
	isLoading: boolean
	user: {
		email: string
		lastName: string
		location: string
		name: string
		token: string
	} | null
}
export interface AddJobFormProps {
	position: string
	company: string
	jobLocation: string
	status: string
	jobType: string
}
//job component
export interface JobProps {
	_id: string
	position: string
	company: string
	jobLocation: string
	jobType: string
	createdAt: string
	status: string
}

export interface JobsProps {
	company: string
	createdAt: string
	createdBy: string
	jobLocation: string
	jobType: string
	position: string
	status: string
	updatedAt: string
	__v: number
	_id: string
}
export interface InitialFilterStateProps {
	search: string
	searchStatus: string
	searchType: string
	sort: string
	sortOptions: string[]
}

export interface AllJobsProps extends InitialFilterStateProps {
	isLoading: boolean
	jobs: JobsProps[]
	totalJobs: number
	numOfPages: number
	page: number
	stats: {
		declined: number
		interview: number
		pending: number
	}
	monthlyApplications: {
		count: number
		date: string
	}[]
}
