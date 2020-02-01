import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 7d16d1bc9c2eab02beec486e78df994e2f9d8dea3fda0b0b580df0b8b9594329'
  }
});
