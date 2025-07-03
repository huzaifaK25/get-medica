import Doctor from './doctor';
import Patient from './patient';

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  doctor_detail?: Doctor;
  patient_detail?: Patient;
}

export default User;
