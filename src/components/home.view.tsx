'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import doctorHome from '../../public/doctor-home.jpg';
import patient from '../../public/patient.png';
import { ROUTES } from '@/constants/route';

const HomeView = () => {
  const router = useRouter();
  let role: string;

  return (
    // Using flex layout
    <main className="flex flex-col justify-between p-10 gap-8 min-h-dvh text-center ">
      {/* Flex Item 1 */}
      {/* header */}
      <div className="flex justify-start items-center" id="header">
        {/* Logo */}
        <div className="font-sans text-[40px] text-[var(--primary-color)] font-semibold bg-transparent mx-10 w-fit px-[30px] py-[10px]">
          GETMEDICA
        </div>
      </div>

      {/* Flex Item 2 */}
      {/* Hero Container */}
      <div className="flex flex-col gap-6" id="hero-container">
        {/* Flex Item 1 */}
        {/* Heading Container */}
        <div className="flex flex-col gap-2 pb-15">
          <h1 className="text-6xl font-semibold text-black">
            Select Your Role
          </h1>
          <p className="text-2xl text-gray-500">
            Tell us how you'd like to use the web
          </p>
        </div>
        {/* Flex Item 2 */}
        {/* Grid Container */}
        <div className="grid grid-cols-2 ">
          {/* Grid Item 1 */}
          <div className="flex justify-center items-center">
            {/* card */}
            <div className="flex flex-col gap-2 justify-center p-6 hover:border-1 border-blue-500 transition-all duration-200 ease-in-out">
              {/* image */}
              <button onClick={() => (role = 'doctor')} className="w-80 h-80">
                <img src={doctorHome.src} />
              </button>
              <div className="text-xl font-medium text-black">Doctor</div>
            </div>
          </div>
          {/* Grid Item 2 */}
          <div className="flex justify-center items-center">
            {/* card */}
            <div className="flex flex-col gap-2 justify-center p-6 hover:border-1 border-blue-500 transition-all duration-200 ease-in-out">
              {/* image */}
              <button onClick={() => (role = 'patient')} className="w-80 h-80">
                <img src={patient.src} alt="" />
              </button>
              <div className="text-xl font-medium text-black">Patient</div>
            </div>
          </div>
        </div>
      </div>

      {/* Flex item 3 */}
      {/* Button Container */}
      <div className="flex justify-center items-center w-full">
        <button
          className="rounded-xl bg-blue-500 text-2xl text-white px-6 py-2 hover:bg-blue-700 transition-all duration-300 ease-in-out"
          onClick={() => router.push(ROUTES.AUTH.DOCTOR_SIGNUP)}
        >
          Continue
        </button>
      </div>
    </main>
  );
};

export default HomeView;
