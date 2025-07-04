'use client';
import React, { useState } from 'react';
import { useGetUser } from '@/services/queries/doctor.query';
import { useSetSchedule } from '@/services/mutations/set-schedule.mutation';
import { DayAvailability } from '@/constants/availability';

// SET SCHEDULE PAGE
const DoctorHome = () => {
  // get logged in doctor profile
  const { data, error, status } = useGetUser();
  // console.log(data?.user?.id);

  // get availabilty from backend
  const [availability, setAvailability] = useState<DayAvailability[]>([
    {
      id: 1,
      day: 'Monday',
      abbr: 'Mon',
      enabled: false,
      slots: [],
    },
    {
      id: 2,
      day: 'Tuesday',
      abbr: 'Tue',
      enabled: false,
      slots: [],
    },
    {
      id: 3,
      day: 'Wednesday',
      abbr: 'Wed',
      enabled: false,
      slots: [],
    },
    {
      id: 4,
      day: 'Thursday',
      abbr: 'Thu',
      enabled: false,
      slots: [],
    },
    {
      id: 5,
      day: 'Friday',
      abbr: 'Fri',
      enabled: false,
      slots: [],
    },
  ]);

  // post schedule
  const { mutateAsync, isPending } = useSetSchedule();
  const setDoctorSchedule = () => {
    // post
    // await mutateAsync(
    //   {
    //     doctor_id: 0,
    //     days: [],
    //     timings: [],
    //   },
    //   {
    //     onSuccess(data, variables, context) {},
    //     onError(error, variables, context) {},
    //   }
    // );
    alert('Schedule Set');
  };

  // disables input if check box not select
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');
  // adds time to the availability timings array
  const addTime = (idx: number) => {
    const updated = [...availability];
    updated[idx].slots.push({ from: fromTime, to: toTime });
    setAvailability(updated);
    console.log(availability);
  };

  return (
    <div className=" flex flex-col p-6">
      {/* heading */}
      <div className="text-black font-semibold text-3xl mb-8">
        Select Your Weekly Availability
      </div>

      {/* Box*/}
      <div className="flex flex-col gap-10">
        {/* subheading */}
        <div className="flex flex-row text-black font-semibold text-xl gap-10 lg:gap-20">
          <div className="w-5 h-5"></div>
          <div className="w-[82px] md:w-[140px]">Select Day</div>
          <div className="grow-1">Select Time</div>
        </div>
        {/* row - sunday */}
        <div className="flex flex-row items-center gap-10 lg:gap-20 text-[15px] ">
          <input
            className="border-1 border-gray-500 h-5 w-5"
            type="checkbox"
            disabled
          />
          <p className="w-[82px] md:w-[140px] text-gray-400">Sunday</p>
          <p className="grow-1  text-gray-400">Unavailable</p>
        </div>
        {/* MONDAY_FRIDAY ROWS */}
        {availability.map((day, idx) => (
          <div
            key={day.id}
            className="flex flex-row items-center gap-10 lg:gap-20 text-[15px]"
          >
            <div className="h-5 w-5">
              <input
                className="peer border-1 border-gray-500 h-5 w-5"
                type="checkbox"
                checked={day.enabled}
                onChange={(e) => {
                  const updated = [...availability];
                  updated[idx].enabled = e.target.checked;
                  setAvailability(updated);
                }}
              />
            </div>
            <p className="w-[82px] md:w-[140px]  peer-checked:text-black text-gray-400">
              {day.day}
            </p>
            {/* Time inputs */}
            <div className="flex gap-2 items-center justify-center peer-checked:text-black text-gray-400">
              <p className="mr-2 ">From:</p>
              {day.enabled ? (
                <input
                  className="border-1 border-gray-300 rounded-[5px] px-2 py-1 lg:w-50 "
                  type="time"
                  onChange={(e) => setFromTime(e.target.value)}
                />
              ) : (
                <input
                  className="border-1 border-gray-300 rounded-[5px] px-2 py-1 lg:w-50 "
                  type="time"
                  disabled
                  value={''}
                />
              )}
              <p className="mr-2">To:</p>
              {day.enabled ? (
                <input
                  className="border-1 border-gray-300 rounded-[5px] px-2 py-1 lg:w-50 "
                  type="time"
                  onChange={(e) => {
                    setToTime(e.target.value);
                  }}
                />
              ) : (
                <input
                  className="border-1 border-gray-300 rounded-[5px] px-2 py-1 lg:w-50 "
                  type="time"
                  disabled
                  value={''}
                />
              )}
            </div>
            <div className="flex gap-6 md:gap-10 lg:gap-15 xl:gap-20">
              <button
                onClick={() => addTime(idx)}
                className={`${
                  day.enabled ? 'bg-primary' : 'bg-gray-400'
                }  text-white font-semibold text-xl h-5 w-5 rounded-[4px] flex items-center justify-center pb-1`}
              >
                +
              </button>
              <button className="bg-white peer-checked:text-gray-500 text-gray-400 font-semibold text-xl h-5 w-5 border-1 border-gray-500 rounded-[4px] flex items-center justify-center pb-1">
                -
              </button>
            </div>
          </div>
        ))}

        {/* row - saturday */}
        <div className="flex flex-row items-center gap-10 lg:gap-20 text-[15px]">
          <input
            className="border-1 border-gray-500 h-5 w-5"
            type="checkbox"
            disabled
          />
          <p className="w-[82px] md:w-[140px] text-gray-400">Saturday</p>
          <p className="grow-1  text-gray-400">Unavailable</p>
        </div>
      </div>
      {/* button */}
      <div className="flex justify-end mt-10 gap-2">
        <button
          onClick={() => setDoctorSchedule()}
          className="bg-primary text-white px-15 py-3 rounded-[5px] cursor-pointer"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default DoctorHome;
