import api from '@/api/axios';
import { LoginRequest, RegisterRequest, AuthResponse } from '@/types/auth.dto';

const authAPI = {
	login: (data: LoginRequest) => api.post<AuthResponse>('/auth/login', data),
	register: (data: RegisterRequest) => api.post<AuthResponse>('/auth/register', data),
	logout: () => api.post('/auth/logout'),
	getProfile: () => api.get('/auth/profile'),
};

export default authAPI;
