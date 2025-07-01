'use client';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Dropdown from './dropdown';
import { useSignupDoctor } from '@/services/mutations/signup-doctor.mutation';

const SignupDoctorView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [specialization, setSpecialization] = useState('');
  const router = useRouter();
  const role = 'doctor';
  const { mutateAsync, isPending } = useSignupDoctor();
  // get specialization from dropdown component
  const getSpecialization = (spec: string) => setSpecialization(spec);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = { name, email, password, specialization };
    console.log(user);

    // API call here
    await mutateAsync(
      {
        name,
        email,
        password,
        specialization,
        role,
        introduction: '',
        rating: 0,
        yearsOfExperience: 0,
      },
      {
        onSuccess(data, variables, context) {
          console.log(data.user);
          alert(data.message);

          router.push('/login');
        },
        onError(error, variables, context) {
          alert(error.message);
        },
      }
    );

    // Clear fields after submit
    setName('');
    setEmail('');
    setPassword('');
    setSpecialization('');
  };

  // For Box
  return (
    <section className="flex flex-row">
      {/* form */}
      <form onSubmit={handleSubmit} className="flex flex-col w-fit h-fit">
        <p className="text-4xl font-semibold pb-10">Sign Up:</p>
        {/* input title box */}
        {/* Name */}
        <div className="flex flex-row items-center justify-start gap-1 mb-2.5">
          <p className="">Name</p>
          <p className="text-red-500">*</p>
          <p>:</p>
        </div>
        <input
          className="w-[485px] p-2 border-gray-200 border-1 rounded-[5px] mb-10"
          type="text"
          required
          placeholder="eg. john@ex.com"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* Email */}
        <div className="flex flex-row items-center justify-start gap-1 mb-2.5">
          <p className="">Email</p>
          <p className="text-red-500">*</p>
          <p>:</p>
        </div>
        <input
          className="w-[485px] p-2 border-gray-200 border-1 rounded-[5px] mb-10"
          type="email"
          required
          placeholder="eg. john@ex.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Specialization */}
        <div className="flex flex-row items-center justify-start gap-1 mb-2.5">
          <p className="">Specialization</p>
          <p className="text-red-500">*</p>
          <p>:</p>
        </div>
        <Dropdown onChange={getSpecialization} />
        {/* Password */}
        <div className="flex flex-row items-center justify-start gap-1 mb-2.5">
          <p className="">Password</p>
          <p className="text-red-500">*</p>
          <p>:</p>
        </div>
        <input
          className="w-[485px] p-2 mb-5  border-gray-200 border-1 rounded-[5px]"
          type="password"
          required
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

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
