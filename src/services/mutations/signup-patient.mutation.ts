import User from '@/constants/user';
import axiosInstance from '@/utils/axios';
import Patient from '@/constants/patient';
import { useMutation } from '@tanstack/react-query';

interface SignupPayload {
  name: string;
  email: string;
  password: string;
  role: string;
  contact_number: string;
}

interface SignupResponse {
  user?: User;
  patient?: Patient;
  message: string;
}

export const signupPatient = async (
  payload: SignupPayload
): Promise<SignupResponse> => {
  const response = await axiosInstance.post('/users/patient/sign-up', payload);
  return response.data;
};

export const useSignupPatient = () => {
  return useMutation({
    mutationKey: ['signup-patient'],
    mutationFn: signupPatient,
  });
};
