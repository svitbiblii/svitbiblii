export interface UserDTO {
	id: string;
	name: string;
	email: string;
	role: UserRole;
	token: string;
}

export enum UserRole {
	ADMIN = 'admin',
	USER = 'user',
	GUEST = 'guest',
}

export interface UpdateUserDTO {
	name: string;
	role: UserRole;
}

export interface CreateUserDTO {
	name: string;
	email: string;
	password: string;
}

export interface LoginRequest {
	email: string;
	password: string;
}

export interface UserResponse {
	id: string;
	name: string;
	email: string;
	role: UserRole;
	createdAt: string;
	updatedAt: string;
}
