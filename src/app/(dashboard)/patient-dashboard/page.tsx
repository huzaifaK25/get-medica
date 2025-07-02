'use client';
import React from 'react';
import { FiUser } from 'react-icons/fi';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/utils/axios';
import Spinner from '@/app/loading';
import ErrorPage from '@/app/error';
import { QueryClient } from '@tanstack/react-query';

const fetchDoctors = async () => {
  const response = await axiosInstance.get('/users/all-doctors');
  return response.data;
};

const PatientHome = () => {
  // for invalidate cache data
  const queryClient = new QueryClient();
  const {
    data: doctors = [],
    error,
    isPending,
  } = useQuery({
    queryKey: ['doctors'],
    queryFn: fetchDoctors,
  });

  if (isPending) return <Spinner />;
  if (error) return <ErrorPage />;

  const doctorsList = doctors.doctors;
  console.log(doctorsList);

  // invalidate query example
  function action() {
    queryClient.invalidateQueries({
      queryKey: ['doctors'],
    });
  }

  return (
    <div className="p-6">
      <div className="text-black font-semibold text-3xl mb-15">
        Doctors Listing
      </div>
      <div className="flex justify-between gap-4 mb-6">
        <input
          type="search"
          className="border-1 border-gray-300 px-4 py-3 rounded-[5px] w-[80%]"
          placeholder="Search"
        />
        <select
          name="Specialization"
          className="border-1 border-gray-300 px-4 py-3 rounded-[5px] w-[20%]"
        >
          <option value="">Specialization</option>
          <option value="cardiology">Cardiology</option>
          <option value="orthopedics">Orthopedics</option>
          <option value="surgery">General Surgery</option>
        </select>
      </div>
      {/* doctors list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {doctorsList.map(({ ...doctor }) => (
          <div
            key={doctor.id}
            className="border-2 border-gray-400  rounded-[8px]  py-5 px-4"
          >
            <div className="flex items-center gap-5 mb-4">
              <div className="bg-[var(--primary-color)] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
                <FiUser className="text-white w-6 h-6 " />
              </div>
              <div>
                <div className="font-bold text-xl">Dr. {doctor.name}</div>
                <div className="text-primary font-medium text-4">
                  {doctor.doctor_detail.specialization}
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-2 ">
                <div>Availability: Mon, Wed, Fri</div>
                <div>{doctor.doctor_detail.yearsOfExp} Years of Experience</div>
                <div>{doctor.doctor_detail.rating} star rating</div>
              </div>
              <div className="flex items-end ">
                <Link href={'/patient-home/book-appointment'}>
                  <button className=" bg-blue-100 font-semibold text-primary text-[20px] rounded-full w-10 h-10 hover:border-2 border-primary cursor-pointer">
                    {'->'}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientHome;
