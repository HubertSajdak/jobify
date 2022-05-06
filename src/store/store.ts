import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import userSlice from 'features/Register/userSlice'
import sidebarSlice from 'features/Dashboard/sidebarSlice'
import jobSlice from 'features/Dashboard/jobSlice'
export const store = configureStore({
	reducer: { user: userSlice, sidebar: sidebarSlice, job: jobSlice },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
