'use client';

import { useState } from 'react';
import { Button } from '@/components/Button';

export default function AuthTabsForm() {
	const [mode, setMode] = useState<'login' | 'register'>('login');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirm, setConfirm] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError('');

		if (mode === 'register' && password !== confirm) {
			setError('Паролі не співпадають');
			setLoading(false);
			return;
		}

		try {
			const res = await fetch(`/api/auth/${mode}`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password }),
			});

			if (!res.ok) {
				const data = await res.json();
				throw new Error(data?.message || 'Помилка авторизації');
			}

			// Успішно — редирект або callback
			const result = await res.json();
			console.log('Auth success:', result);
		} catch (err: unknown) {
			if (err instanceof Error) {
				setError(err.message);
			}
		} finally {
			setLoading(false);
		}
	};

	const labelClassName = 'block text-sm font-medium mb-1';
	const inputClassName = 'w-full px-3 py-2 border border-gray-300 rounded';

	return (
		<div
			className="max-w-sm mx-auto mt-20 p-6 border border-gray-200 rounded-lg shadow-md bg-white"
			onClick={(e) => e.stopPropagation()}
		>
			<form onSubmit={handleSubmit} className="space-y-4">
				{error && (
					<div className="text-sm text-red-600 bg-red-100 px-3 py-2 rounded">{error}</div>
				)}

				{mode === 'register' && (
					<div>
						<label className={labelClassName}>Full Name</label>
						<input
							type="text"
							name="name"
							value={name}
							onKeyDown={(_) => setError('')}
							onChange={(e) => setName(e.target.value)}
							required
							className={inputClassName}
						/>
					</div>
				)}

				<div>
					<label className={labelClassName}>Email</label>
					<input
						type="email"
						name="email"
						value={email}
						onKeyDown={(_) => setError('')}
						onChange={(e) => setEmail(e.target.value)}
						required
						className={inputClassName}
					/>
				</div>

				<div>
					<label className={labelClassName}>Password</label>
					<input
						type="password"
						name="password"
						value={password}
						onKeyDown={(_) => setError('')}
						onChange={(e) => setPassword(e.target.value)}
						required
						className={inputClassName}
					/>
				</div>

				{mode === 'register' && (
					<div>
						<label className={labelClassName}>Confirm Password</label>
						<input
							type="password"
							name="confirm"
							value={confirm}
							onKeyDown={(_) => setError('')}
							onChange={(e) => setConfirm(e.target.value)}
							required
							className={inputClassName}
						/>
					</div>
				)}

				<Button type="submit" disabled={loading} className="w-full">
					{loading ? 'Обробка...' : mode === 'login' ? 'Sign In' : 'Sign up'}
				</Button>

				<div className="flex justify-center mb-6 space-x-4">
					<p className="p-0 m-0 text-sm text-gray-500">
						{mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
					</p>
					<Button
						onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
						className="p-0 m-0 h-auto text-sm text-primary hover:underline"
						variant={'link'}
					>
						{mode === 'login' ? 'Sign Up' : 'Sign In'}
					</Button>
				</div>
			</form>
		</div>
	);
}
