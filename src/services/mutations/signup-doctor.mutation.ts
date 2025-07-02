import axiosInstance from '@/utils/axios';
import { useMutation } from '@tanstack/react-query';
import Doctor from '@/constants/doctor';
import User from '@/constants/user';

// Body JSON structure
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
// API response JSON structure
interface SignupResponse {
  user?: User;
  doctor?: Doctor;
  message: string;
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
