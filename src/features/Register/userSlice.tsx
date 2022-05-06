import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import customFetch from 'utils/axios'
import { UserStateProps, RegisterProps } from 'types/types'
import { toast } from 'react-toastify'
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from 'utils/localStorage'

const initialState: UserStateProps = {
	isLoading: false,
	user: getUserFromLocalStorage(),
}

export const registerUser = createAsyncThunk(
	'user/registerUser',
	async (user: Omit<RegisterProps, 'isMember'>, thunkAPI) => {
		try {
			const res = await customFetch.post('/auth/register', user)
			console.log(res.data)
			return res.data
		} catch (error) {
			const err = error as AxiosError
			//@ts-ignore
			return thunkAPI.rejectWithValue(err.response?.data.msg)
		}
	}
)

export const loginUser = createAsyncThunk(
	'user/loginUser',
	async (user: Omit<RegisterProps, 'isMember' | 'name'>, thunkAPI) => {
		try {
			const res = await customFetch.post('/auth/login', user)
			console.log(res.data)
			return res.data
		} catch (error) {
			const err = error as AxiosError
			//@ts-ignore

			return thunkAPI.rejectWithValue(err.response?.data.msg)
		}
	}
)
export const updateUser = createAsyncThunk(
	'user/updateUser',
	async (user: Omit<UserStateProps['user'], 'token'>, thunkAPI) => {
		try {
			const res = await customFetch.patch('/auth/updateUser', user)
			console.log(res.data)
			return res.data
		} catch (error) {
			const err = error as AxiosError
			if (err.response?.status === 401) {
				thunkAPI.dispatch(userActions.logoutUser(null))
				return thunkAPI.rejectWithValue('Unauthorized! Logging out')
			}
			//@ts-ignore
			return thunkAPI.rejectWithValue(err.response?.data.msg)
		}
	}
)

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logoutUser: (state, { payload }: PayloadAction<string | null>) => {
			state.user = null
			removeUserFromLocalStorage()
			if (payload) {
				toast.success(payload)
			}
		},
	},
	extraReducers: builder => {
		builder.addCase(registerUser.pending, state => {
			state.isLoading = true
		})
		builder.addCase(registerUser.fulfilled, (state, { payload }: PayloadAction<UserStateProps>) => {
			const { user } = payload
			state.isLoading = false
			state.user = user
			addUserToLocalStorage(user)
			toast.success(`Hello ${user!.name}`)
		})
		builder.addCase(registerUser.rejected, (state, action) => {
			const payload = action.payload as string
			state.isLoading = false
			toast.error(payload)
		})
		builder.addCase(loginUser.pending, state => {
			state.isLoading = true
		})
		builder.addCase(loginUser.fulfilled, (state, { payload }: PayloadAction<UserStateProps>) => {
			const { user } = payload
			state.isLoading = false
			state.user = user
			addUserToLocalStorage(user)
			toast.success(`Welcome back ${user!.name}`)
		})
		builder.addCase(loginUser.rejected, (state, action) => {
			const payload = action.payload as string
			state.isLoading = false
			toast.error(payload)
		})
		builder.addCase(updateUser.pending, state => {
			state.isLoading = true
		})
		builder.addCase(updateUser.fulfilled, (state, { payload }: PayloadAction<UserStateProps>) => {
			const { user } = payload
			state.isLoading = false
			state.user = user
			addUserToLocalStorage(user)
			toast.success('User updated successfully!')
		})
		builder.addCase(updateUser.rejected, (state, action) => {
			const payload = action.payload as string
			state.isLoading = false
			toast.error(payload)
		})
	},
})
export const userActions = userSlice.actions
export default userSlice.reducer
