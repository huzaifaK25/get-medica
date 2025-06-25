'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const HomeView = () => {
  const router = useRouter();

  return (
    // Using flex layout
    <main className="flex flex-col justify-between p-10 gap-8 min-h-dvh text-center ">
      {/* Flex Item 1 */}
      {/* header */}
      <div className="flex justify-start items-center" id="header">
        {/* Logo */}
        <div className="text-2xl p-10 font-bold text-blue-600">GETMEDICA</div>
      </div>

      {/* Flex Item 2 */}
      {/* Hero Container */}
      <div className="flex flex-col gap-6" id="hero-container">
        {/* Flex Item 1 */}
        {/* Heading Container */}
        <div className="flex flex-col gap-2 pb-40">
          <h1 className="text-6xl font-semibold text-black">
            Select Your Role
          </h1>
          <p className="text-2xl text-gray-500">
            Tell us how you'd like to use the web
          </p>
        </div>
        {/* Flex Item 2 */}
        {/* Grid Container */}
        <div className="grid grid-cols-2 gap-6">
          {/* Grid Item 1 */}
          <div className="flex justify-center items-center">
            {/* card */}
            <div className="flex flex-col gap-2 justify-center p-6 hover:border-1 border-blue-500 transition-all duration-200 ease-in-out">
              {/* image */}
              <div className="w-50 h-50 bg-amber-200/30"></div>
              <div className="text-xl font-medium text-black">Doctor</div>
            </div>
          </div>
          {/* Grid Item 2 */}
          <div className="flex justify-center items-center">
            {/* card */}
            <div className="flex flex-col gap-2 justify-center p-6 hover:border-1 border-blue-500 transition-all duration-200 ease-in-out">
              {/* image */}
              <div className="w-50 h-50 bg-amber-200/30"></div>
              <div className="text-xl font-medium text-black">Patient</div>
            </div>
          </div>
        </div>
      </div>

      {/* Flex item 3 */}
      {/* Button Container */}
      <div className="flex justify-end items-center w-full">
        <button
          className="rounded-xl bg-blue-500 text-2xl text-white px-6 py-2 hover:bg-blue-700 transition-all duration-300 ease-in-out"
          onClick={() => router.push('/signup-doctor')}
        >
          Continue
        </button>
      </div>
    </main>
  );
};

export default HomeView;
