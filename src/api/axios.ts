// lib/axios.ts
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

const api = axios.create({
	baseURL: '/api',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		if (typeof window !== 'undefined') {
			const token = localStorage.getItem('token');
			if (token && config.headers) {
				config.headers.Authorization = `Bearer ${token}`;
			}
		}
		return config;
	},
	(error: AxiosError) => Promise.reject(error)
);

api.interceptors.response.use(
	(response) => response,
	(error: AxiosError) => {
		// we dont have a login page
		// if (error.response?.status === 401) {
		// 	if (typeof window !== 'undefined') {
		// 		localStorage.removeItem('token');
		// 		window.location.href = '/login';
		// 	}
		// }
		return Promise.reject(error);
	}
);

export default api;
