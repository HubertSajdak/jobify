import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import userSlice from 'features/Register/userSlice'
import sidebarSlice from 'features/Dashboard/sidebarSlice'
import jobSlice from 'features/Dashboard/jobSlice'
import allJobsSlice from 'features/Dashboard/allJobsSlice'
export const store = configureStore({
	reducer: { user: userSlice, sidebar: sidebarSlice, job: jobSlice, allJobs: allJobsSlice },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
