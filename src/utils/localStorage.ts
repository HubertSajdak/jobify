import { UserStateProps } from 'types/types'

export const addUserToLocalStorage = (user: UserStateProps['user']) => {
	localStorage.setItem('user', JSON.stringify(user))
}

export const removeUserFromLocalStorage = () => {
	localStorage.removeItem('user')
}
export const getUserFromLocalStorage = () => {
	const result = localStorage.getItem('user')
	const user: UserStateProps['user'] = result ? JSON.parse(result) : null
	return user
}
