interface Appointment {
  [x: string]: any;
  id: number;
  appt_date: string;
  appt_time: string;
  appt_status: string;
  patient_complaint: string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
}

export default Appointment;
