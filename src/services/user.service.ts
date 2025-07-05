import { UserDTO, UserRole } from '@/src/types/user.dto';
import prismadb from '@/lib/prismadb';
import { User } from '@prisma/client';
import { User as ClerkUser } from '@clerk/nextjs/server';
import { NotFoundError } from '@/services/service';

export default class UserService {
	static async get(id: UserDTO['id']): Promise<User> {
		const user = await prismadb.user.findUnique({
			where: { id },
		});

		if (!user) throw new NotFoundError('Could not find a user.');

		return user;
	}

	static async getByEmail(email: UserDTO['email']): Promise<User> {
		const user = await prismadb.user.findUnique({ where: { email } });

		if (!user) throw new NotFoundError('Could not find a user.');

		return user;
	}

	static async getByClerkId(clerkId: string): Promise<User> {
		const user = await prismadb.user.findUnique({ where: { clerkId } });

		if (!user) throw new NotFoundError('Could not find a user.');

		return user;
	}

	static async update(user: ClerkUser): Promise<User> {
		const userData = {
			name: user.fullName ?? '',
			role: UserRole.USER,
		};

		const updatedUser = await prismadb.user.update({
			where: { clerkId: user.id },
			data: userData,
		});

		if (!updatedUser) throw new Error('Failed to update user.');

		return updatedUser;
	}

	static async create(user: ClerkUser): Promise<User> {
		const userData = {
			clerkId: user.id,
			name: user.fullName ?? '',
			email: user.emailAddresses[0].emailAddress,
			role: UserRole.USER,
		};

		const newUser = await prismadb.user.create({ data: userData });

		if (!newUser) throw new Error('Failed to create user.');

		return newUser;
	}

	static toDTO(user: User): UserDTO {
		return {
			id: user.id,
			clerkId: user.clerkId,
			name: user.name,
			email: user.email,
			role: user.role as UserRole,
			createdAt: user.createdAt.toISOString(),
			updatedAt: user.updatedAt ? user.updatedAt.toISOString() : undefined,
		};
	}
}
