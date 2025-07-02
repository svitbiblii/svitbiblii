export interface UserDTO {
	id: number;
	name: string;
	email: string;
	role: UserRole;
	createdAt: string;
	updatedAt?: string;
}

export enum UserRole {
	ADMIN = 'admin',
	USER = 'user',
	GUEST = 'guest',
}

export interface UpdateUserDTO {
	name: string;
	role: UserDTO['role'];
}
