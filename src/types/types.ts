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
