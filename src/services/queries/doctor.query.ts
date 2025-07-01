import axiosInstance from '@/utils/axios';
import { QueryClient } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

// const fetchDoctors = async () => {
//   const response = await axiosInstance.get('/users/all-doctors');
//   return response.data;
// };

// const queryClient = new QueryClient();
// const {
//   data: doctors = [],
//   error,
//   isPending,
// } = useQuery({
//   queryKey: ['doctors'],
//   queryFn: fetchDoctors,
// });

// if (isPending) return <Spinne />;
// if (error) return <ErrorPage />;
