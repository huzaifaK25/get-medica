import User from '@/constants/user';
import axiosInstance from '@/utils/axios';
import { useMutation } from '@tanstack/react-query';

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  user?: User;
  message: string;
  access_token: string;
}

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const response = await axiosInstance.post('/users/log-in', payload);
  return response.data;
};

export const useLogin = () => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: login,
  });
};
