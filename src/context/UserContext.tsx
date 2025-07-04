'use client';

import { createContext, useContext, useState, useEffect } from 'react';

import { UserDTO } from '@/src/types/user.dto';

interface UserContextType {
	user: UserDTO | null;
	setUser: (user: UserDTO | null) => void;
	isAuthorized: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<UserDTO | null>(null);

	useEffect(() => {
		// Load user from the localStorage or other storage
		const stored = localStorage.getItem('user');
		if (stored) {
			setUser(JSON.parse(stored));
		}
	}, []);

	useEffect(() => {
		if (user) {
			localStorage.setItem('user', JSON.stringify(user));
		} else {
			localStorage.removeItem('user');
		}
	}, [user]);

	return (
		<UserContext.Provider value={{ user, setUser, isAuthorized: !!user }}>
			{children}
		</UserContext.Provider>
	);
}

export function useUser() {
	const context = useContext(UserContext);
	if (!context) throw new Error('useUser must be used within UserProvider');
	return context;
}
