import api from '@/api/axios';
import { BookDTO, BookSearchParams } from '@/types/book.dto';

const bookAPI = {
	get: (book_id: BookDTO['id']) => api.get<BookDTO>(`/book/${book_id}`),
	getAll: (params: BookSearchParams) => api.get<BookDTO[]>('/book/', { params }),
};

export default bookAPI;
