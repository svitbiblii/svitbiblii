import api from '@/api/axios';
import { UserDTO } from '../types/user.dto';

const authAPI = {
	sync: () => api.post<UserDTO>('/auth'),
};

export default authAPI;
