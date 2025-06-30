import { CreateUserDTO, UpdateUserDTO } from '@/types/user';
import prismadb from '@/lib/prismadb';

export default class UserService {
	static async create(data: CreateUserDTO) {
		await prismadb.User.create({ data });
	}

	static async get(id: string) {
		const user = prismadb.User.findUnique({
			where: { id },
		});

		return user;
	}

	static async update(id: string, data: UpdateUserDTO) {
		// Simulate an API call to update user
		return {
			id,
			...data,
			updatedAt: new Date().toISOString(),
		};
	}
}
