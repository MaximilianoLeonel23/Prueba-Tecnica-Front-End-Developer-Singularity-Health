import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	users: [],
	error: null,
	isLoading: true,
};

export const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		setUsers: (state, action) => {
			state.users = action.payload.users;
			state.isLoading = false;
		},
		setError: (state, action) => {
			state.error = action.payload.error;
			state.isLoading = false;
		},
		cleanError: state => {
			state.error = null;
		},
		setLoading: (state, action) => {
			state.isLoading = action.payload;
		},
	},
});

export const { setUsers, setError, cleanError, setLoading } = userSlice.actions;
export default userSlice.reducer;
