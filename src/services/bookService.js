import api from '../config/api';

const BookService = {
  getBooks: async () => {
    const response = await api.get('/books');
    alert(JSON.stringify(response, null, 2));
    return response;
  }
};

export default BookService;
