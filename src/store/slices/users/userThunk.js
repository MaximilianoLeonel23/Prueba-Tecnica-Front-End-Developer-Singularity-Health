import { cleanError, setLoading, setUsers } from './userSlice';
import { axiosApi } from '../../../config/axios/axiosApi';

export const getUsers = () => {
	return async dispatch => {
		dispatch(setLoading(true));
		dispatch(cleanError());
		try {
			const response = await axiosApi.get('/users');

			const { data } = response;

			dispatch(setUsers({ users: data.data }));
		} catch (error) {
			console.log(error);
		} finally {
			dispatch(setLoading(false));
		}
	};
};
