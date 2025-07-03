import axiosInstance from '@/utils/axios';

import { useQuery } from '@tanstack/react-query';
import User from '@/constants/user';
import Doctor from '@/constants/doctor';

interface ResponseProfile {
  user?: User;
  doctor?: Doctor;
  message: string;
}

export const getUser = async (): Promise<ResponseProfile> => {
  const response = await axiosInstance.get('/users/me');
  return response.data;
};

export const getDoctorProfile = async (
  id: number
): Promise<ResponseProfile> => {
  const response = await axiosInstance.get(`/users/${id}`);
  return response.data;
};

export const useGetUser = () => {
  return useQuery({
    queryKey: ['doctor-profile'],
    queryFn: getUser,
  });
};

export const useGetDoctorProfile = (id: number) => {
  return useQuery({
    queryKey: ['doctor', id],
    queryFn: () => getDoctorProfile(id),
  });
};
