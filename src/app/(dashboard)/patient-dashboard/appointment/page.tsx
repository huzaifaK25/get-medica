'use client';
import type Appointment from '@/constants/appointment';
import {
  useGetPatientAppointments,
  useGetUser,
} from '@/services/queries/doctor.query';
import React from 'react';
import { FiUser } from 'react-icons/fi';

const Appointment = () => {
  // get logged in  profile
  const { data, error, status } = useGetUser(); // FIXME: user profile
  const id = data?.user?.doctor_detail?.id; // FIXME: id not accurate
  // gets appointments from backend
  const appts = useGetPatientAppointments(15); // id
  // const appts = useGetAppointments(14);
  const appointments = appts.data?.appts ?? []; // To handle undefined data TODO: change in other instances too

  return (
    <div className="p-6 flex flex-col">
      <div className="flex mb-8 items-center justify-between">
        <div className="text-black font-semibold text-3xl">
          View Appointments
        </div>
        <select className="border-1 border-gray-400 text-gray-400 text-xl px-4 py-1">
          <option value="" disabled></option>
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
        </select>
      </div>

      {/* appointments */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
        {appointments.map((appt: Appointment) => (
          <div
            key={appt.id}
            className="border-2 border-gray-400 border-t-primary rounded-[8px]  py-5 px-3"
          >
            <div className="flex items-center gap-5 mb-4">
              <div className="bg-[var(--primary-color)] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
                <FiUser className="text-white w-6 h-6 " />
              </div>
              <div className="font-bold text-xl">{'Huzaifa Kashif'}</div>{' '}
              {/* FIXME: patient name */}
              <div className="ml-auto border-1 rounded-[8px] border-gray-300 bg-gray-300 text-gray-600 text-4 font-semibold px-5 py-1">
                {appt.appt_status}
              </div>
            </div>
            <div>
              <div className="flex flex-wrap gap-2">
                <div>{appt.appt_date}</div>
                <div>{appt.appt_time}</div>
                <div>{'12211115444'}</div> {/* FIXME: patient number */}
              </div>
              <div className="text-gray-400 mt-2 mb-2">
                {appt.patient_complaint}
              </div>
            </div>
            <div className="flex items-center justify-start gap-2">
              <button className="border-2 border-primary text-primary font-medium rounded-[5px] text-[15px] px-2">
                Decline
              </button>
              <button className="border-2 border-primary bg-primary font-medium text-white text-[15px] rounded-[5px] px-2">
                Confirm
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointment;
