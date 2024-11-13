import axios from 'axios';

export const axiosApi = axios.create({
	baseURL: ' https://reqres.in/api',
	timeout: 12000,
	headers: {
		'Content-Type': 'application/json',
	},
});
