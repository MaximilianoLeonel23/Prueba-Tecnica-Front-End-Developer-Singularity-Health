import { axiosApi } from '../../../config/axios/axiosApi';
import { cleanError, login, logout, setError, setLoading } from './authSlice';

export const getLogin = formData => {
	return async dispatch => {
		dispatch(setLoading(true));
		dispatch(cleanError());
		try {
			const { email, password } = formData;

			const { data } = await axiosApi.post('/login', {
				email,
				password,
			});

			const session = {
				user: {
					username: email,
					email,
				},
				token: data.token,
				isLogged: true,
				isLoading: false,
			};

			dispatch(login(session));
			localStorage.setItem('session', JSON.stringify(session));
		} catch (error) {
			const errorMessage = error.response?.data?.error || 'Error de autenticación';

			let errorObj = { message: '', type: '' };
			switch (true) {
				case errorMessage.includes('Missing email or username'):
					errorObj = { message: 'Falta el email', type: 'email' };
					break;
				case errorMessage.includes('Missing password'):
					errorObj = { message: 'Falta la contraseña', type: 'password' };
					break;
				case errorMessage.includes('user not found'):
					errorObj = { message: 'Usuario no encontrado', type: 'general' };
					break;
				default:
					errorObj = { message: 'Error en la autenticación', type: 'email' };
			}
			dispatch(setError(errorObj));
			setTimeout(() => {
				dispatch(setError({ message: '', type: '' }));
			}, 3000);
		} finally {
			dispatch(setLoading(false));
		}
	};
};

export const checkToken = () => {
	return dispatch => {
		const sessionStoraged = localStorage.getItem('session');
		const session = JSON.parse(sessionStoraged);

		if (!session || session.token == null) {
			localStorage.removeItem('session');
			return dispatch(logout());
		}

		return dispatch(
			login({
				user: session.user,
				token: session.token,
			}),
		);
	};
};
