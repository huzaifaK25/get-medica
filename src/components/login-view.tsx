'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLogin } from '@/services/mutations/login.mutation';
import { setCookie } from 'cookies-next';
import { useFormik } from 'formik';
import LoginSchema from '@/utils/login-schema';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const role = 'doctor';
  const { mutateAsync, isPending } = useLogin();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: LoginSchema,
    onSubmit: (values, { resetForm }) => {
      console.log('✅ Submitted:', values);
      resetForm(); // clear after submit
    },
  });

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const user = { email, password };

  //   // API call:
  //   await mutateAsync(
  //     {
  //       email,
  //       password,
  //     },
  //     {
  //       onSuccess: (data, variables, context) => {
  //         setCookie('accessToken', data.access_token);
  //         alert(data.message);
  //         // TODO: set user
  //       },
  //       onError: (error, variables, context) => {
  //         alert(error?.message);
  //       },
  //     }
  //   );

  //   setEmail('');
  //   setPassword('');

  //   if (role === 'doctor') {
  //     router.push('/doctor-home');
  //   }
  //   router.push('/patient-home');
  // };

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
          className="w-[485px] p-2 border-gray-200 border-1 rounded-[5px]"
          id="email"
          type="email"
          {...formik.getFieldProps('email')}
          // required
          placeholder="eg. john@ex.com"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
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
          className="w-[485px] p-2  border-gray-200 border-1 rounded-[5px]"
          type="password"
          id="password"
          placeholder="Enter Password"
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
          <button className="bg-[var(--primary-color)] text-white w-[485px] h-[60px] px-1 py-5 border-[var(--primary-color)] rounded-xl cursor-pointer mt-7.5 hover:bg-blue-600">
            Continue
          </button>
        </div>
        <p className="text-xl text-[#999] text-center">
          Don't have an account?{' '}
          <a
            href="#"
            className="text-[var(--primary-color)] text-xl hover:text-blue-600"
            onClick={() => router.push('/')}
          >
            Sign Up
          </a>
        </p>
      </form>
    </section>
  );
};

export default LoginView;
