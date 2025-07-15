'use client';

import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { cn } from '@/src/lib/utils'; // если есть clsx/cn хелпер, или замени на className={...}
import { Button } from '@/components/Button';

import bookAPI from '../api/book.api';
import { BookDTO } from '../types/book.dto';

interface SearchBoxProps {
	placeholder?: string;
	className?: string;
	setSearchResult?: (books: BookDTO[]) => void;
}

type SearchType = 'all' | 'audio' | 'video' | 'scientific';

const searchTypeMap: Record<SearchType, string> = {
	all: 'All',
	audio: 'Audio',
	video: 'Video',
	scientific: 'Scientific texts',
};

const searchTypes: SearchType[] = ['all', 'audio', 'video', 'scientific'];

export default function SearchBox({
	placeholder = 'Search...',
	className,
	setSearchResult,
}: SearchBoxProps) {
	const onSearch = async (query: string) => {
		const resp = await bookAPI.getAll({ query, category: null });
		if (resp && setSearchResult) {
			setSearchResult(resp.data || []);
		}
	};

	const [searchType, setSearchType] = useState<SearchType>('all');
	const [value, setValue] = useState('');

	const handleSubmit = () => {
		const query = value.trim();
		if (query) {
			onSearch(query);
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSubmit();
		}
	};

	return (
		<>
			<div
				className={cn(
					'flex items-center border border-input rounded-lg px-3 py-2 bg-background',
					className
				)}
			>
				<input
					type="text"
					placeholder={placeholder}
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onKeyDown={handleKeyDown}
					className="flex-1 bg-transparent outline-none text-sm"
				/>
				<button
					type="button"
					onClick={handleSubmit}
					className="text-muted-foreground hover:text-primary transition-colors"
				>
					<IoSearchOutline className="w-5 h-5" />
				</button>
			</div>
			<div className="flex gap-2">
				{searchTypes.map((type: SearchType) => {
					return (
						<Button
							key={type}
							size="sm"
							variant={searchType === type ? 'default' : 'secondary'}
							onClick={() => {
								setSearchType(type);
								handleSubmit();
							}}
						>
							{searchTypeMap[type]}
						</Button>
					);
				})}
			</div>
		</>
	);
}
