'use client';
import React from 'react';

interface Props {
  day: string;
}

const TableRow: React.FC<Props> = ({ day }) => {
  return (
    <div className="flex flex-row gap-2.5 items-center justify-between">
      <input
        className="peer border-1 border-gray-500 h-5 w-5"
        type="checkbox"
      />
      <p className="w-25  peer-checked:text-black text-gray-400">{day}</p>
      <div className="flex gap-2 items-center justify-center peer-checked:text-black text-gray-400">
        <p className="mr-2 ">From:</p>
        <input
          className="border-1 border-gray-300 rounded-[5px] px-2 py-1 lg:w-50 "
          type="time"
        />
        <p className="mr-2">To:</p>
        <input
          className="border-1 border-gray-300 rounded-[5px] px-2 py-1 lg:w-50 "
          type="time"
        />
      </div>
      <button className="  peer-checked:bg-primary bg-gray-400 text-white font-semibold text-xl h-5 w-5 rounded-[4px] flex items-center justify-center pb-1">
        +
      </button>
      <button className="bg-white peer-checked:text-gray-500 text-gray-400 font-semibold text-xl h-5 w-5 border-1 border-gray-500 rounded-[4px] flex items-center justify-center pb-1">
        -
      </button>
    </div>
  );
};

export default TableRow;
