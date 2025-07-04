import * as Yup from 'yup';

const ScheduleSchema = Yup.object({
  days: Yup.string().required(),
  timings: Yup.string().required(),
});
// check changes for aray of days/dates
export default ScheduleSchema;
