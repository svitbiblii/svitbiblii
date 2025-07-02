import api from '@/api/axios';
import { BookDTO, BookSearchParams } from '@/types/book.dto';

const bookAPI = {
	get: (book_id: BookDTO['id']) => api.get<BookDTO>(`/auth/book/${book_id}`),
	gatAll: (params: BookSearchParams) => api.get<BookDTO[]>('/auth/book/', { params }),
};

export default bookAPI;
