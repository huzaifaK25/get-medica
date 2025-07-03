import Doctor from './doctor';
import Patient from './patient';

interface Appointment {
  id: number;
  appt_date: string;
  appt_time: string;
  appt_status: string;
  patient_complaint: string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  doctor_detail: Doctor;
  patient_detail: Patient;
}

export default Appointment;
