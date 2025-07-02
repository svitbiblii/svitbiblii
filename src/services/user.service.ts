import { UpdateUserDTO, UserDTO, UserRole } from '@/src/types/user.dto';
import prismadb from '@/lib/prismadb';
import { User } from '@prisma/client';
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

	static async update(_id: string, _data: UpdateUserDTO) {}

	static toDTO(user: User): UserDTO {
		return {
			id: user.id,
			name: user.name,
			email: user.email,
			role: user.role as UserRole,
			createdAt: user.createdAt.toISOString(),
			updatedAt: user.updatedAt ? user.updatedAt.toISOString() : undefined,
		};
	}
}
