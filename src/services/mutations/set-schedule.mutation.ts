import { ROUTES } from '@/constants/route';
import Schedule from '@/constants/schedule';
import axiosInstance from '@/utils/axios';
import { useMutation } from '@tanstack/react-query';

interface SchedulePayload {
  doctor_id: number;
  dto: {
    sched_day: string;
    time_from: string;
    time_to: string;
  };
}
interface ScheduleResponse {
  message: string;
  schedule: Schedule;
}

export const setSchedule = async (
  payload: SchedulePayload
): Promise<ScheduleResponse> => {
  const response = await axiosInstance.post(ROUTES.SCHEDULE.CREATE, payload);
  return response.data;
};

export const useSetSchedule = () => {
  return useMutation({
    mutationKey: ['schedule'],
    mutationFn: setSchedule,
  });
};
