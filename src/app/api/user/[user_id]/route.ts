import { NextRequest, NextResponse } from 'next/server';
import UserService from '@/services/user.service';

interface ParamsType {
	id: string;
}

export async function GET(req: NextRequest, { params }: { params: ParamsType }) {
	console.log(params);
	console.log('Fetching user with ID:', params.id);
	const user = await UserService.get(params.id);

	return NextResponse.json(user);
}

export async function POST(req: NextRequest, { params }: { params: ParamsType }) {
	const { id } = params;
	const body = await req.json();

	if (!body.value) {
		return NextResponse.json({ error: 'Missing value' }, { status: 400 });
	}

	const db = await getDb();
	await db.setStorageValue(id, key, body.value);

	return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest, { params }: { params: ParamsType }) {
	const db = await getDb();
	const { id } = params;

	await db.deleteStorageValue(id, key);

	return NextResponse.json({ success: true });
}
