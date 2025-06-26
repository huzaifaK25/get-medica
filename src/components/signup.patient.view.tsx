'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import ImageBox from './image.box';

const SignupPatientView = () => {
  const router = useRouter();
  return (
    <main className="m-0 p-0 max-w-screen w-full min-h-[100dvh] overflow-x-hidden">
      <section className="flex flex-row">
        <ImageBox />
        {/* form box */}
        <div className="w-[80%] m-auto h-[100dvh] flex items-center justify-center font-sans z-[3]">
          {/* form */}
          <form className="flex flex-col w-fit h-fit">
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
              type="email"
              required
              placeholder="John Doe"
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
            />
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
            />
            <div className="text-center">
              <button
                className="bg-[var(--primary-color)] text-white w-[485px] h-[60px] px-1 py-5 border-[var(--primary-color)] rounded-xl cursor-pointer mt-7.5 hover:bg-blue-600"
                onClick={() => router.push('/patient-home')}
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

export default SignupPatientView;
