import axios from 'axios';
import { getCookie } from 'cookies-next';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    Authorization: `Bearer ${getCookie('accessToken') || ''}`,
  },
});

export default axiosInstance;
