import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { toast } from 'react-toastify'
import { getUserFromLocalStorage } from 'utils/localStorage'
import { AddJobFormProps } from 'types/types'
import { createJobThunk } from './jobThunk'
const initialState = {
	isLoading: false,
	position: '',
	company: '',
	jobLocation: '',
	jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
	jobType: 'full-time',
	statusOptions: ['interview', 'declined', 'pending'],
	status: 'pending',
	isEditing: false,
	editJobId: '',
}

export const createJob = createAsyncThunk('job/createJob', createJobThunk)

const jobSlice = createSlice({
	name: 'job',
	initialState,
	reducers: {
		handleChange: (state, { payload }) => {
			const { name, value }: { name: string; value: string } = payload
			state[name as keyof AddJobFormProps] = value
		},
		clearValues: () => {
			return { ...initialState }
		},
	},
	extraReducers: builder => {
		builder.addCase(createJob.pending, state => {
			state.isLoading = true
		})
		builder.addCase(createJob.fulfilled, (state, action) => {
			state.isLoading = false
			toast.success('Job created')
		})
		builder.addCase(createJob.rejected, (state, action) => {
			const payload = action.payload as string
			state.isLoading = false
			toast.error(payload)
		})
	},
})
export const jobActions = jobSlice.actions
export default jobSlice.reducer
