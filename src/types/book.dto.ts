export interface BookDTO {
	id: number;
	title: string;
	author: string | null;
	link: string | null;
	content: string | null;
	category: string | null;
	format: string | null;
	filePath: string | null;
	slug: string;
}

export interface BookSearchParams {
	query: BookDTO['title'] | BookDTO['author'];
	category: BookDTO['category'];
}
