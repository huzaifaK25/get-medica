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
      {/* subheading */}
      <div className="flex flex-row text-black font-semibold text-xl mb-5">
        <div className=" ml-31">Select Day</div>
        <div className=" ml-26">Select Time</div>
      </div>
      {/* Box*/}
      <div className="flex flex-col gap-10 mr-10">
        {/* row - sunday */}
        <div className="flex flex-row items-center w-106 justify-between ">
          <input
            className="border-1 border-gray-500 h-5 w-5"
            type="checkbox"
            disabled
          />
          <p className="w-25  text-gray-400">Sunday</p>
          <p className="w-25  text-gray-400">Unavailable</p>
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
        <div className="flex flex-row items-center w-106 justify-between">
          <input
            className="border-1 border-gray-500 h-5 w-5"
            type="checkbox"
            disabled
          />
          <p className="w-25  text-gray-400">Saturday</p>
          <p className="w-25  text-gray-400">Unavailable</p>
        </div>
      </div>
      {/* button */}
      <div className="flex justify-end mt-10 mr-10 gap-2">
        <button className="bg-primary text-white px-15 py-3 rounded-[5px] cursor-pointer">
          Save
        </button>
      </div>
    </div>
  );
};

export default DoctorHome;
