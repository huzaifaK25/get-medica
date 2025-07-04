'use client';
import { useRouter } from 'next/navigation';
import { useLogin } from '@/services/mutations/login.mutation';
import { setCookie } from 'cookies-next';
import { useFormik } from 'formik';
import LoginSchema from '@/utils/login-schema';
import { useGetUser } from '@/services/queries/doctor.query';
import { ROUTES } from '@/constants/route';

const LoginView = () => {
  const router = useRouter();
  const { mutateAsync, isPending } = useLogin();
  const { data, error, status } = useGetUser();

  // using form-state for values
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: LoginSchema,
    onSubmit: async (values, { resetForm }) => {
      // API call: sends data to server
      await mutateAsync(values, {
        onSuccess: (data, variables, context) => {
          setCookie('accessToken', data.access_token);
          resetForm(); // clear after submit
          alert(data.message);
        },
        onError: (error, variables, context) => {
          alert(error?.message);
        },
      });
      // gets data of logged in user and reroutes accordingly
    },
  });

  const routeUser = () => {
    if (data) {
      const role = data?.user?.role;
      if (role === 'doctor') {
        return router.push(ROUTES.DASHBOARD.DOCTOR_DASH);
      } else if (role === 'patient') {
        return router.push(ROUTES.DASHBOARD.PATIENT_DASH);
      }
    } else console.log(error);
  };

  // Form Box
  return (
    <section id="inner box" className="flex flex-row">
      {/* form */}
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col w-fit h-fit"
      >
        <p className="text-4xl font-semibold pb-10">Log In:</p>
        {/* input title box */}
        <div className="flex flex-row items-center justify-start gap-1 mb-2.5">
          <p className="">Email</p>
          <p className="text-red-500">*</p>
          <p>:</p>
        </div>
        <input
          id="email"
          type="email"
          placeholder="eg. john@ex.com"
          className="w-[485px] p-2 border-gray-200 border-1 rounded-[5px]"
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="mt-1 text-sm text-red-600">{formik.errors.email}</p>
        )}
        <div className="flex flex-row items-center justify-start gap-1 mb-2.5 mt-10">
          <p className="">Password</p>
          <p className="text-red-500">*</p>
          <p>:</p>
        </div>
        <input
          id="password"
          type="password"
          placeholder="Enter Password"
          className="w-[485px] p-2  border-gray-200 border-1 rounded-[5px]"
          {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password && (
          <p className="mt-1 text-sm text-red-600">{formik.errors.password}</p>
        )}
        <div className="text-end">
          <a
            href="#"
            className="text-[var(--primary-color)] text-xl hover:text-blue-600"
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center">
          <button
            type="submit"
            disabled={isPending}
            onClick={routeUser}
            className="bg-[var(--primary-color)] text-white w-[485px] h-[60px] px-1 py-5 border-[var(--primary-color)] rounded-xl cursor-pointer mt-7.5 hover:bg-blue-600"
          >
            Continue
          </button>
        </div>
        <p className="text-xl text-[#999] text-center">
          Don't have an account?
          <a
            href="#"
            className="text-[var(--primary-color)] text-xl hover:text-blue-600"
            onClick={() => router.push(ROUTES.HOME)}
          >
            Sign Up
          </a>
        </p>
      </form>
    </section>
  );
};

export default LoginView;
