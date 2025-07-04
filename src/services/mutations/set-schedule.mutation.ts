import { DayAvailability } from '@/constants/availability';
import { ROUTES } from '@/constants/route';
import Schedule from '@/constants/schedule';
import axiosInstance from '@/utils/axios';
import { useMutation } from '@tanstack/react-query';

interface SchedulePayload {
  doctor_id: number;
  availability: DayAvailability;
}

interface ScheduleResponse {
  message: string;
  data: Schedule; //FIXME: if type should be SCHEDULE or DAYAVAILABILITY ??
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
