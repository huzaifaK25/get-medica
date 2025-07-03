import { ROUTES } from '@/constants/route';
import axios from 'axios';
import { deleteCookie, getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

// axios instance created
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    Authorization: `Bearer ${getCookie('accessToken') || ''}`,
  },
});

// interceptor request adds JWT to header
axiosInstance.interceptors.request.use((config) => {
  const token = getCookie('accessToken');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// interceptor defined on axios instance
axiosInstance.interceptors.response.use(
  (response) => response,
  // error handlin function
  async (error) => {
    const router = useRouter();
    // gets http status code
    const status = error.response ? error.response.status : null;
    if (status === 401) {
      // Handle unauthorized access
      await deleteCookie('accessToken', { path: '/' });
      // redirects to login
      router.push(ROUTES.AUTH.LOGIN);
    } else if (status === 404) {
      // Handle not found errors
      console.log('ROUTE NOT FOUND');
    } else {
      // Handle other errors
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
