import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: {
		username: null,
		email: null,
	},
	isLogged: false,
	token: null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {
		login: (state, action) => {
			state.user = action.payload.user;
			(state.isLogged = true), (state.token = action.payload.token);
		},
		logout: state => {
			(state.user = null), (state.isLogged = false), (state.token = null);
		},
	},
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
