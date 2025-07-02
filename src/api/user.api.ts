import api from '@/api/axios';
import { UserDTO } from '@/types/user.dto';

const userAPI = {
	get: (user_id: UserDTO['id']) => api.get<UserDTO>(`/auth/user/${user_id}`),
};

export default userAPI;
