import axiosInstance from '@/utils/axios';

import { useQuery } from '@tanstack/react-query';
import User from '@/constants/user';
import Doctor from '@/constants/doctor';
import { ROUTES } from '@/constants/route';
import Appointment from '@/constants/appointment';

interface ResponseProfile {
  user?: User;
  doctor?: Doctor;
  message: string;
}

interface ApptResponseProfile {
  user?: User;
  appts?: Appointment;
  message: string;
  profile?: User;
}

export const getUser = async (): Promise<ResponseProfile> => {
  const response = await axiosInstance.get(ROUTES.USER.ME);
  return response.data;
};

export const getDoctorProfile = async (
  id: number
): Promise<ResponseProfile> => {
  const response = await axiosInstance.get(`/users/${id}`);
  return response.data;
};

// get doctor appts
export const getAppointments = async (
  id: number
): Promise<ApptResponseProfile> => {
  const response = await axiosInstance.get(`/appointments/doctor?id=${id}`);

  return response.data;
};
// get patient appts
export const getPatientAppointments = async (
  id: number
): Promise<ApptResponseProfile> => {
  const response = await axiosInstance.get(`/appointments/patient?id=${id}`);

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

export const useGetAppointments = (id: number) => {
  return useQuery({
    queryKey: ['appointment', id],
    queryFn: () => getAppointments(id),
  });
};
export const useGetPatientAppointments = (id: number) => {
  return useQuery({
    queryKey: ['appointment', id],
    queryFn: () => getPatientAppointments(id),
  });
};
