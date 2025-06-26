'use client';
import React from 'react';
import ImageBox from './image.box';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Dropdown from './dropdown';

const SignupDoctorView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [specialization, setSpecialization] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = { name, email, password, specialization };

    // API call here
    console.log(user);

    // Clear fields after submit
    setName('');
    setEmail('');
    setPassword('');
    setSpecialization('');

    router.push('/login');
  };

  const getSpecialization = (spec: string) => setSpecialization(spec);

  return (
    <main
      className="m-0 p-0 max-w-screen w-full min-h-[100dvh] overflow-x-hidden"
      id="doctor-signup-page"
    >
      <section className="flex flex-row">
        <ImageBox />
        {/* form box */}
        <div className="w-[80%]  h-[100dvh] flex items-center justify-center font-sans z-[3]">
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
        </div>
      </section>
    </main>
  );
};

export default SignupDoctorView;
