import { AxiosError } from 'axios'
import { userActions } from 'features/Register/userSlice'
import { AddJobFormProps } from 'types/types'
import customFetch from 'utils/axios'
import { jobActions } from './jobSlice'

export const createJobThunk = async (job: AddJobFormProps, thunkAPI: any) => {
	try {
		const res = await customFetch.post('/jobs', job)
		thunkAPI.dispatch(jobActions.clearValues())
		console.log(res.data)
		return res.data
	} catch (error) {
		const err = error as AxiosError
		if (err.response?.status === 401) {
			thunkAPI.dispatch(userActions.logoutUser(null))
			return thunkAPI.rejectWithValue('Unauthorized! Logging out...')
		}
		//@ts-ignore
		return thunkAPI.rejectWithValue(err.response?.data.msg)
	}
}
