'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import SignupPatientSchema from '@/utils/signup-patient-schema';
import { useSignupPatient } from '@/services/mutations/signup-patient.mutation';

const SignupPatientView = () => {
  const role = 'patient';
  const router = useRouter();
  const { mutateAsync, isPending } = useSignupPatient();

  const formik = useFormik({
    validationSchema: SignupPatientSchema,
    initialValues: { name: '', email: '', password: '' },
    onSubmit: async (values, { resetForm }) => {
      await mutateAsync(
        {
          name: values.name,
          email: values.email,
          password: values.password,
          role,
          contact_number: '0',
        },
        {
          onSuccess(data, variables, context) {
            resetForm();
            alert(data.message);
            router.push('/login');
          },
          onError(error, variables, context) {
            console.log(error);
            alert(error.message);
          },
        }
      );
    },
  });

  // Form Box
  return (
    <section className="flex flex-row">
      {/* form */}
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col w-fit h-fit"
      >
        <p className="text-4xl font-semibold pb-10">Sign Up:</p>
        {/* input title box */}
        {/* Name */}
        <div className="flex flex-row items-center justify-start gap-1 mb-2.5">
          <p className="">Name</p>
          <p className="text-red-500">*</p>
          <p>:</p>
        </div>
        <input
          className="w-[485px] p-2 border-gray-200 border-1 rounded-[5px] "
          type="text"
          placeholder="John Doe"
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name && (
          <p className="mt-1 text-sm text-red-600">{formik.errors.name}</p>
        )}
        {/* Email */}
        <div className="flex flex-row items-center justify-start gap-1 mt-10 mb-2.5">
          <p className="">Email</p>
          <p className="text-red-500">*</p>
          <p>:</p>
        </div>
        <input
          className="w-[485px] p-2 border-gray-200 border-1 rounded-[5px]"
          type="email"
          placeholder="eg. john@ex.com"
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="mt-1 text-sm text-red-600">{formik.errors.email}</p>
        )}
        {/* Password */}
        <div className="flex flex-row items-center justify-start gap-1 mt-10 mb-2.5">
          <p className="">Password</p>
          <p className="text-red-500">*</p>
          <p>:</p>
        </div>
        <input
          className="w-[485px] p-2   border-gray-200 border-1 rounded-[5px]"
          type="password"
          placeholder="Enter Password"
          {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password && (
          <p className="mt-1 text-sm text-red-600">{formik.errors.password}</p>
        )}
        <div className="text-center">
          <button
            className="bg-[var(--primary-color)] text-white w-[485px] h-[60px] px-1 py-5 border-[var(--primary-color)] rounded-xl cursor-pointer mt-7.5 hover:bg-blue-600"
            type="submit"
            disabled={isPending}
          >
            Continue
          </button>
        </div>
        <p className="text-xl text-[#999] text-center">
          Already have an account?
          <a
            href="#"
            className="text-[var(--primary-color)] text-xl hover:text-blue-600 pl-2"
            onClick={() => router.push('/login')}
          >
            Log in
          </a>
        </p>
      </form>
      {/* </div> */}
    </section>
  );
};
export default SignupPatientView;
