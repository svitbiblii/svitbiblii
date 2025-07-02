import bcrypt from 'bcrypt';

import UserService from '@/services/user.service';
import { NotFoundError } from '@/services/service';
import { User } from '@prisma/client';
import { UserRole } from '@/types/user.dto';
import prismadb from '@/lib/prismadb';
import { AuthResponse, LoginRequest, RegisterRequest } from '@/types/auth.dto';

export default class AuthService extends UserService {
	static SALT_ROUNDS = 10;

	static async register(
		name: RegisterRequest['name'],
		email: RegisterRequest['email'],
		password: RegisterRequest['password']
	): Promise<User> {
		try {
			await this.getByEmail(email);
		} catch (e: unknown) {
			if (e instanceof NotFoundError) {
				const salt = await bcrypt.genSalt(this.SALT_ROUNDS);
				const pw_hash = await bcrypt.hash(password, salt);

				const userData = {
					name,
					email,
					role: UserRole.USER,
					pw_hash,
					salt,
				};

				const user = await prismadb.user.create({ data: userData });

				if (!user) throw new Error('Failed to register new user.');

				return user;
			}
		}

		throw new Error('User with this email already exists');
	}

	static async login(
		email: LoginRequest['email'],
		password: LoginRequest['password']
	): Promise<User> {
		try {
			const user = await this.getByEmail(email);

			if (await bcrypt.compare(password, user.pw_hash)) {
				return user;
			}
		} catch {
			/* empty */
		}

		throw new Error('Invalid email or password');
	}

	static generateAuthToken(_user: User): AuthResponse['token'] {
		return '';
	}
}
