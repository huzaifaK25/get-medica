import Appointment from '@/constants/appointment';
import { ROUTES } from '@/constants/route';
import axiosInstance from '@/utils/axios';
import { useMutation } from '@tanstack/react-query';

interface CreateApptPayload {
  doctor_id: number;
  patient_id: number | undefined;
  dto: {
    appt_date: string;
    appt_time: string;
    appt_status: string;
    patient_complaint: string;
  };
}

interface Response {
  message: string;
  appointment: Appointment;
}

export const createAppointment = async (
  payload: CreateApptPayload
): Promise<Response> => {
  const response = await axiosInstance.post(
    ROUTES.APPOINTMENTS.CREATE,
    payload
  );
  return response.data;
};

export const useCreateAppointment = () => {
  return useMutation({
    mutationKey: ['appointment'],
    mutationFn: createAppointment,
  });
};
