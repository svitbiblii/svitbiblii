import { NextRequest, NextResponse } from 'next/server';
import UserService from '@/services/user.service';

interface ParamsType {
	user_id: string;
}

export async function GET(_req: NextRequest, { params }: { params: ParamsType }) {
	const user = await UserService.get(+params.user_id);

	const dto = UserService.toDTO(user);

	return NextResponse.json(dto);
}

// export async function POST(req: NextRequest, { params }: { params: ParamsType }) {
// 	return NextResponse.json({ success: true });
// }

// export async function DELETE(req: NextRequest, { params }: { params: ParamsType }) {
// 	const db = await getDb();
// 	const { id } = params;

// 	await db.deleteStorageValue(id, key);

// 	return NextResponse.json({ success: true });
// }
