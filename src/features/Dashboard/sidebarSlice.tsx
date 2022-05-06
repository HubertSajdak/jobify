import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	isSidebarOpen: false,
}
const toggleSidebar = createSlice({
	name: 'sidebar',
	initialState: initialState,
	reducers: {
		toggleSidebar: state => {
			state.isSidebarOpen = !state.isSidebarOpen
		},
	},
})
export const sidebarActions = toggleSidebar.actions
export default toggleSidebar.reducer
