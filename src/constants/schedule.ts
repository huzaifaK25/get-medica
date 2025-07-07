interface Schedule {
  id: number;
  doctor_id: number;
  sched_day: string;
  time_from: string;
  time_to: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}
export default Schedule;
