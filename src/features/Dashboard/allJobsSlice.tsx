import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { AllJobsProps, InitialFilterStateProps } from 'types/types'
import customFetch from 'utils/axios'

const initialFilterState: InitialFilterStateProps = {
	search: '',
	searchStatus: 'all',
	searchType: 'all',
	sort: 'latest',
	sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
}

const initialState: AllJobsProps = {
	isLoading: false,
	jobs: [],
	totalJobs: 0,
	numOfPages: 1,
	page: 1,
	stats: {
		declined: 0,
		interview: 0,
		pending: 0,
	},
	monthlyApplications: [],
	...initialFilterState,
}

export const getAllJobs = createAsyncThunk('allJobs/getAllJobs', async (_: null, thunkAPI) => {
	let url = `/jobs`
	try {
		const res = await customFetch.get(url)
		return res.data
	} catch (error: any) {
		return thunkAPI.rejectWithValue(error.response?.data.msg)
	}
})

const allJobsSlice = createSlice({
	name: 'allJobs',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getAllJobs.pending, state => {
			state.isLoading = true
		})
		builder.addCase(
			getAllJobs.fulfilled,
			(
				state,
				{ payload }: PayloadAction<Omit<AllJobsProps, 'isLoading' | 'page' | 'stats' | 'monthlyApplication'>>
			) => {
				state.isLoading = false
				state.jobs = payload.jobs
			}
		)
		builder.addCase(getAllJobs.rejected, (state, action) => {
			const payload = action.payload as string
			state.isLoading = false
			toast.error(payload)
		})
	},
})
export default allJobsSlice.reducer
