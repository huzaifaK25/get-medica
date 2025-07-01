import axiosInstance from '@/utils/axios';
import { useMutation } from '@tanstack/react-query';

interface SignupPayload {
  name: string;
  email: string;
  password: string;
  role: string;
  introduction: string;
  specialization: string;
  rating: number;
  yearsOfExperience: number;
}

interface SignupResponse {
  user?: User;
  doctor: Doctor;
  message: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

interface Doctor {
  id: number;
  specialization: string;
  yearsOfExp: number;
  rating: number;
  introduction: string;
  user_id: number;
}

export const signupDoctor = async (
  payload: SignupPayload
): Promise<SignupResponse> => {
  const response = await axiosInstance.post('/users/doctor/sign-up', payload);
  return response.data;
};

export const useSignupDoctor = () => {
  return useMutation({
    mutationKey: ['signup-doctor'],
    mutationFn: signupDoctor,
  });
};
