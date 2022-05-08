import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { toast } from 'react-toastify'
import { getUserFromLocalStorage } from 'utils/localStorage'
import { AddJobFormProps } from 'types/types'
import { createJobThunk, deleteJobThunk, editJobThunk } from './jobThunk'
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
export const deleteJob = createAsyncThunk('job/deleteJob', deleteJobThunk)
export const editJob = createAsyncThunk('job/editJob', editJobThunk)

const jobSlice = createSlice({
	name: 'job',
	initialState: initialState,
	reducers: {
		handleChange: (state, { payload }) => {
			const { name, value }: { name: string; value: string } = payload
			state[name as keyof AddJobFormProps] = value
		},
		clearValues: () => {
			return { ...initialState, jobLocation: getUserFromLocalStorage()?.location || '' }
		},
		setEditJob: (state, { payload }) => {
			return { ...state, isEditing: true, ...payload }
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
		builder.addCase(deleteJob.pending, state => {
			state.isLoading = true
		})
		builder.addCase(deleteJob.fulfilled, (state, action) => {
			const payload = action.payload as string
			state.isLoading = false
			toast.success(payload)
		})
		builder.addCase(deleteJob.rejected, (state, action) => {
			const payload = action.payload as string
			state.isLoading = false
			toast.error(payload)
		})
		builder.addCase(editJob.pending, state => {
			state.isLoading = true
		})
		builder.addCase(editJob.fulfilled, state => {
			state.isEditing = false
			toast.success('Job modified...')
		})
		builder.addCase(editJob.rejected, (state, action) => {
			const payload = action.payload as string
			state.isEditing = false
			toast.error(payload)
		})
	},
})
export const { handleChange, clearValues, setEditJob } = jobSlice.actions
export default jobSlice.reducer
