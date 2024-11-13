import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: {
		username: null,
		email: null,
	},
	isLoading: true,
	isLogged: false,
	token: null,
	error: null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {
		login: (state, action) => {
			state.user = action.payload.user;
			state.isLogged = true;
			state.token = action.payload.token;
			state.isLoading = false;
			state.error = null;
		},
		logout: state => {
			state.user = null;
			state.isLogged = false;
			state.token = null;
			state.isLoading = false;
			state.error = null;
		},
		setError: (state, action) => {
			state.error = action.payload;
		},
		cleanError: state => {
			state.error = null;
		},
		setLoading: (state, action) => {
			state.isLoading = action.payload;
		},
	},
});

export const { login, logout, setError, cleanError, setLoading } = authSlice.actions;
export default authSlice.reducer;
