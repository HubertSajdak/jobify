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

const initialState: Omit<AllJobsProps, 'defaultStats'> = {
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

export const getAllJobs = createAsyncThunk('allJobs/getAllJobs', async (_: null, thunkAPI: any) => {
	const { page, search, searchStatus, searchType, sort } = thunkAPI.getState().allJobs
	let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`
	if (search) {
		url = url + `&search=${search}`
	}
	try {
		const res = await customFetch.get(url)
		return res.data
	} catch (error: any) {
		return thunkAPI.rejectWithValue(error.response?.data.msg)
	}
})

export const showStats = createAsyncThunk('allJobs/showStats', async (_, thunkAPI) => {
	try {
		const res = await customFetch.get('/jobs/stats')
		console.log(res.data)
		return res.data
	} catch (error: any) {
		return thunkAPI.rejectWithValue(error.response?.data.msg)
	}
})

const allJobsSlice = createSlice({
	name: 'allJobs',
	initialState,
	reducers: {
		handleChange: (state, { payload }) => {
			const { name, value }: { name: string; value: string } = payload
			state.page = 1
			state[name as keyof Omit<InitialFilterStateProps, 'sortOptions'>] = value
		},
		clearFilters: state => {
			return { ...state, ...initialFilterState }
		},
		changePage: (state, action) => {
			const payload = action.payload as number
			state.page = payload
		},
	},
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
				state.numOfPages = payload.numOfPages
				state.totalJobs = payload.totalJobs
			}
		)
		builder.addCase(getAllJobs.rejected, (state, action) => {
			const payload = action.payload as string
			state.isLoading = false
			toast.error(payload)
		})
		builder.addCase(showStats.pending, state => {
			state.isLoading = true
		})
		builder.addCase(showStats.fulfilled, (state, { payload }: PayloadAction<AllJobsProps>) => {
			state.isLoading = false
			state.stats = payload.defaultStats
			state.monthlyApplications = payload.monthlyApplications
		})
		builder.addCase(showStats.rejected, (state, action) => {
			const payload = action.payload as string
			state.isLoading = false
			toast.error(payload)
		})
	},
})
export const { handleChange, clearFilters, changePage } = allJobsSlice.actions
export default allJobsSlice.reducer
