import * as Yup from 'yup';

const AppointmentSchema = Yup.object({
  docID: Yup.number(),
  patID: Yup.number(),
  day: Yup.string().required('Please select a day'),
  time: Yup.string().required('Please select a time slot'),
  complaint: Yup.string().required('Appointment reason is required'),
});

export default AppointmentSchema;
