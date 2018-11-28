import api from '../config/api';

const BookService = {
  getBooks: () => api.get('/books/')
};

export { BookService };
