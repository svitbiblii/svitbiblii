import { currentUser } from '@clerk/nextjs/server';
import UserService from '@/services/user.service';
import { NotFoundError } from '@/services/service';
import { NextResponse } from 'next/server';

export async function POST() {
	const user = await currentUser();

	if (!user) {
		return new Response('Unauthorized', { status: 401 });
	}

	try {
		await UserService.getByClerkId(user.id);

		const dto = UserService.toDTO(await UserService.update(user));

		return NextResponse.json(dto);
	} catch (e) {
		if (e instanceof NotFoundError) {
			const dto = UserService.toDTO(await UserService.create(user));

			return NextResponse.json(dto);
		}
	}
}
