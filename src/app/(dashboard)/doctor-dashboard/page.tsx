'use client';
import React from 'react';
import TableRow from '../../../components/table.row';

const DoctorHome = () => {
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
        {/* row - monday  */}
        <TableRow day="Monday" />
        {/* row - tuesday */}
        <TableRow day="Tuesday" />
        {/* row - wednesday */}
        <TableRow day="Wednesday" />
        {/* row - thursday */}
        <TableRow day="Thursday" />
        {/* row - friday */}
        <TableRow day="Friday" />
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
        <button className="bg-primary text-white px-15 py-3 rounded-[5px] cursor-pointer">
          Save
        </button>
      </div>
    </div>
  );
};

export default DoctorHome;
