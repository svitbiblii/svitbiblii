'use client';

import { useState } from 'react';
import { Link } from '@/i18n/routing';
import { ExpandableText } from './expandable-text';
import Image from 'next/image';

interface BookCardProps {
	title: string;
	author?: string | null;
	link: string;
	anotation?: string | null;
	isHighlightingModeAvailable?: boolean;
}

export function BookCard({
	title,
	author,
	link,
	anotation,
	isHighlightingModeAvailable = false,
}: BookCardProps) {
	const [isExpanded, setIsExpanded] = useState(false);
	const [highlightIsPlaying, setHighlightIsPlaying] = useState(false);

	const highlightBgColor = 'bg-primary';
	const highlightTextColor = 'text-primary-foreground';

	if (!anotation) {
		return null;
	}

	const handleStartHighlight = () => {
		setHighlightIsPlaying(true);
	};

	const handleHighlightAnimationStop = () => {
		setHighlightIsPlaying(false);
	};

	const toggleExpand = () => {
		if (isExpanded) {
			setHighlightIsPlaying(false); // Зупиняємо виділення при згортанні
		}
		setIsExpanded((prev) => !prev);
	};

	const isAnotationHighlightable =
		isHighlightingModeAvailable && anotation.startsWith('Злата заприсяглась');

	const isAnotationStartWith = anotation.startsWith('Злата заприсяглась');

	return (
		<div className="bg-white dark:bg-gray-800 rounded-lg shadow-card-soft overflow-hidden flex h-auto">
			<div className="p-4 flex flex-col justify-between flex-grow w-2/3">
				{isAnotationStartWith ? (
					<div className="mb-4">
						<p className="text-left font-semibold text-gray-900 border-b border-gray-300 dark:text-white line-clamp-2">
							{title}
						</p>
						{author && (
							<p className="text-gray-600 dark:text-gray-400 line-clamp-1">
								{author}
							</p>
						)}
						<p className="text-left text-gray-500">
							Видавництво &rdquo;Книги ХХІ&rdquo;/&rdquo;Чорні вівці&rdquo; (З дозволу
							директора Василя Дроняка)
						</p>
					</div>
				) : (
					<div className="mb-4">
						<h3 className="text-left font-semibold text-gray-900 border-b border-gray-300 dark:text-white line-clamp-2">
							{title}
						</h3>
						{author && (
							<p className="text-gray-600 dark:text-gray-400 line-clamp-1">
								{author}
							</p>
						)}
					</div>
				)}

				<div>
					<ExpandableText
						text={anotation}
						initialLineClamp={3}
						isExpanded={isExpanded}
						onToggle={toggleExpand}
						isHighlightable={isAnotationHighlightable}
						highlightIsPlaying={highlightIsPlaying}
						onHighlightStop={handleHighlightAnimationStop}
						highlightColor={highlightBgColor}
						textColor={highlightTextColor}
					/>
				</div>

				<div className="mt-4 flex cursor-none">
					<Link
						href={link}
						className="inline-flex cursor-none hover:cursor-none items-center px-4 py-2 mr-10 border-2 border-primary font-medium text-primary rounded-full shadow-sm hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
					>
						Читати
					</Link>
					<Link
						href={link}
						className="inline-flex items-center px-4 py-2 border-2 border-primary font-medium text-primary rounded-full shadow-sm hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
					>
						Слухати
					</Link>

					{isExpanded && isAnotationHighlightable && (
						<div className="flex">
							<button
								onClick={handleStartHighlight}
								disabled={highlightIsPlaying}
								className="rounded text-white"
							>
								Почати
							</button>
						</div>
					)}
				</div>
			</div>

			<div className="relative w-1/4 flex-shrink-0 p-2">
				{isAnotationStartWith ? (
					<div className="relative w-full h-full">
						<Image
							src="/images/dankova.jpg"
							alt={`Обкладинка книги ${title}`}
							fill
							className="object-cover rounded-lg"
							sizes="(max-width: 768px) 100vw, 33vw"
							priority
						/>
					</div>
				) : (
					<div className="flex items-center justify-center w-full h-full">
						<div className="absolute inset-y-4 right-4 w-[calc(100%-1rem)] h-[calc(100%-2rem)] bg-primary rounded-lg shadow-lg flex flex-col items-center justify-center text-primary-foreground p-2 text-center">
							<p className="font-bold leading-tight mb-10 line-clamp-3">{author}</p>
							<p className="font-bold leading-tight line-clamp-3">{title}</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
