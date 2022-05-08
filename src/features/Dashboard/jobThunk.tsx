import { AxiosError } from 'axios'
import { userActions } from 'features/Register/userSlice'
import { AddJobFormProps } from 'types/types'
import customFetch from 'utils/axios'
import { getAllJobs } from './allJobsSlice'
import { clearValues } from './jobSlice'

export const createJobThunk = async (job: AddJobFormProps, thunkAPI: any) => {
	try {
		const res = await customFetch.post('/jobs', job)
		thunkAPI.dispatch(clearValues())
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

export const deleteJobThunk = async (jobId: string, thunkAPI: any) => {
	try {
		const res = await customFetch.delete(`/jobs/${jobId}`)
		thunkAPI.dispatch(getAllJobs(null))
		return res.data.msg
	} catch (error: any) {
		return thunkAPI.rejectWithValue(error.response?.data.msg)
	}
}

export const editJobThunk = async ({ jobId, job }: { jobId: string; job: AddJobFormProps }, thunkAPI: any) => {
	try {
		const res = await customFetch.patch(`/jobs/${jobId}`, job)
		thunkAPI.dispatch(clearValues())
		return res.data
	} catch (error: any) {
		thunkAPI.rejectWithValue(error.response?.data.msg)
	}
}
