'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useSignupDoctor } from '@/services/mutations/signup-doctor.mutation';
import { useFormik } from 'formik';
import SignupDoctorSchema from '@/utils/signup-doctor-schema';

const SignupDoctorView = () => {
  const router = useRouter();
  const role = 'doctor';
  const { mutateAsync, isPending } = useSignupDoctor();

  // form state
  const formik = useFormik({
    validationSchema: SignupDoctorSchema,
    initialValues: { name: '', email: '', specialization: '', password: '' },
    onSubmit: async (values, { resetForm }) => {
      // API call sends data to server
      await mutateAsync(
        // values + fields in backend API
        {
          name: values.name,
          email: values.email,
          password: values.password,
          specialization: values.specialization,
          role,
          introduction: '',
          rating: 0,
          yearsOfExperience: 0,
        },
        {
          onSuccess: (data, variables, context) => {
            resetForm();
            alert(data.message);
            router.push('/login');
          },
          onError: (error, variables, context) => {
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
          id="name"
          type="text"
          placeholder="eg. John Doe"
          className="w-[485px] p-2 border-gray-200 border-1 rounded-[5px]"
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name && (
          <p className="mt-1 text-sm text-red-600">{formik.errors.name}</p>
        )}
        {/* Email */}
        <div className="flex flex-row items-center justify-start gap-1  mt-10 mb-2.5">
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
        {/* Specialization */}
        <div className="flex flex-row items-center justify-start gap-1  mt-10 mb-2.5">
          <p className="">Specialization</p>
          <p className="text-red-500">*</p>
          <p>:</p>
        </div>
        {/* Dropdown  */}
        <select
          id="specialization"
          className="w-[485px] p-2 border-gray-200 border-1 rounded-[5px] text-gray-600"
          {...formik.getFieldProps('specialization')}
        >
          <option value="" disabled>
            Select specialization
          </option>
          <option value="orthopedics">Orthopedics</option>
          <option value="dermatology">Dermatology</option>
          <option value="pediatrics">Pediatrics</option>
          <option value="general surgery">General Surgery</option>
          <option value="radiology">Radiology</option>
        </select>
        {formik.touched.specialization && formik.errors.specialization && (
          <p className="mt-1 text-sm text-red-600">
            {formik.errors.specialization}
          </p>
        )}
        {/* Password */}
        <div className="flex flex-row items-center justify-start gap-1 mt-10 mb-2.5">
          <p className="">Password</p>
          <p className="text-red-500">*</p>
          <p>:</p>
        </div>
        <input
          id="password"
          type="password"
          placeholder="Enter Password"
          className="w-[485px] p-2 mb-1   border-gray-200 border-1 rounded-[5px]"
          {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password && (
          <p className="mt-1 text-sm text-red-600">{formik.errors.password}</p>
        )}

        {/* <div className="text-end">
          <a
            href="/signup-doctor"
            className="text-[var(--primary-color)] text-xl hover:text-blue-600"
          >
            Forgot Password?
          </a>
        </div> */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isPending}
            className="bg-[var(--primary-color)] text-white w-[485px] h-[60px] px-1 py-5 border-[var(--primary-color)] rounded-xl cursor-pointer mt-7.5 hover:bg-blue-600"
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
    </section>
  );
};

export default SignupDoctorView;
