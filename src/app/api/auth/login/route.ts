import { NextRequest, NextResponse } from 'next/server';
import AuthService from '@/services/auth.service';
import { AuthResponse } from '@/types/auth.dto';

export async function POST(req: NextRequest) {
	const { email, password } = await req.json();

	try {
		const user = await AuthService.login(email, password);

		const response: AuthResponse = {
			token: AuthService.generateAuthToken(user),
			user: AuthService.toDTO(user),
		};

		return NextResponse.json(response);
	} catch (e: unknown) {
		if (e instanceof Error) {
			return NextResponse.json({ error: e.message }, { status: 400 });
		}
	}
}
