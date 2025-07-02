import axiosInstance from '@/utils/axios';

import { useQuery } from '@tanstack/react-query';
import User from '@/constants/user';
import Doctor from '@/constants/doctor';

interface ResponseProfile {
  user?: User;
  doctor?: Doctor;
  message: string;
}

export const getDoctor = async (): Promise<ResponseProfile> => {
  const response = await axiosInstance.get('/users/me');
  return response.data;
};

export const useGetDoctor = () => {
  return useQuery({
    queryKey: ['doctor-profile'],
    queryFn: getDoctor,
  });
};
