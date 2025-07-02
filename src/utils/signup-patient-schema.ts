import * as Yup from 'yup';

const SignupPatientSchema = Yup.object({
  name: Yup.string().max(50, 'Name is too long').required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Must be atleasy 6 characters')
    .required('Password is required'),
});

export default SignupPatientSchema;
