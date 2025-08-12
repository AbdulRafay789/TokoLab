
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: 'Bearer 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'
  },
});

export default api;
