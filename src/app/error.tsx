'use client';
import { ROUTES } from '@/constants/route';
import Link from 'next/link';
import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center mt-30">
      <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">This page does not exist</p>
      <Link
        href={ROUTES.DASHBOARD.PATIENT_DASH}
        className="text-white bg-primary rounded-md px-3 py-2 mt-4 w-30"
      >
        Go Back
      </Link>
    </section>
  );
};

export default ErrorPage;
