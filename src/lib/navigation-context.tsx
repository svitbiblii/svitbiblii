'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { BOOKS_DATA } from '@/books-data_for-del'; // Переконайтеся, що шлях правильний

// Визначення типу для елементів історії
interface BookItem {
	id: string;
	author: string;
	title: string;
	link: string;
}

interface NavigationContextType {
	historyItems: BookItem[]; // Масив повних об'єктів книг для відображення
	addBookToHistory: (bookId: string) => void;
	clearHistory: () => void;
	BOOKS_DATA: BookItem[]; // Глобальні дані книг також надаємо через контекст
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
	const [historyBookIds, setHistoryBookIds] = useState<string[]>([]);

	// Завантаження історії з sessionStorage
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const savedIds = sessionStorage.getItem('bookHistoryIds');
			if (savedIds) {
				setHistoryBookIds(JSON.parse(savedIds));
			}
		}
	}, []);

	// Збереження історії у sessionStorage
	useEffect(() => {
		if (typeof window !== 'undefined') {
			sessionStorage.setItem('bookHistoryIds', JSON.stringify(historyBookIds));
		}
	}, [historyBookIds]);

	const addBookToHistory = (bookId: string) => {
		setHistoryBookIds((prevIds) => {
			if (prevIds.includes(bookId)) {
				return prevIds;
			}
			return [...prevIds, bookId];
		});
	};

	const clearHistory = () => {
		setHistoryBookIds([]);
	};

	const historyItems: BookItem[] = historyBookIds
		.map((id) => BOOKS_DATA.find((book) => book.id === id))
		.filter(Boolean) as BookItem[];

	return (
		<NavigationContext.Provider
			value={{ historyItems, addBookToHistory, clearHistory, BOOKS_DATA }}
		>
			{children}
		</NavigationContext.Provider>
	);
}

export function useNavigation() {
	const context = useContext(NavigationContext);
	if (context === undefined) {
		throw new Error('useNavigation must be used within a NavigationProvider');
	}
	return context;
}
