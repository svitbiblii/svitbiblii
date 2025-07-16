import { UserDTO } from '@/types/user.dto';

export interface RegisterRequest {
	name: UserDTO['name'];
	email: UserDTO['email'];
	password: string;
}

export interface LoginRequest {
	email: UserDTO['email'];
	password: string;
}

export interface AuthResponse {
	token: string;
	user: UserDTO;
}
