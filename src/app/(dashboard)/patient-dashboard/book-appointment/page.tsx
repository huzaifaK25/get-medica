import React from 'react';
import { FiUser } from 'react-icons/fi';

const doctor = {
  id: 1,
  name: 'Huzaifa Kashif',
  specialization: 'Cardiology',
  availability: 'Mon, Wed, Fri',
  experience: 10,
  rating: 4.2,
};

const BookAppointment = () => {
  return (
    <div className="p-6">
      <div>
        <div className="text-black font-semibold text-3xl mb-8">
          Book Appointment
        </div>
        {/* doctor details */}
        <div
          key={doctor.id}
          className="border-2 border-gray-400  rounded-[8px] py-5 px-4 mb-8"
        >
          <div className="flex items-center gap-5 mb-4">
            <div className="bg-[var(--primary-color)] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
              <FiUser className="text-white w-6 h-6 " />
            </div>
            <div>
              <div className="font-bold text-xl">Dr. {doctor.name}</div>
              <div className="text-primary font-medium text-4">
                {doctor.specialization}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <div className="flex gap-6 ">
              <div>Availability: {doctor.availability}</div>
              <div>{doctor.experience} Years of Experience</div>
              <div>{doctor.rating} star rating</div>
            </div>
            <div className="mt-6">
              Doctor Description... Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Animi id iusto veritatis tempora doloribus
              temporibus harum dolore quia similique voluptatem! Dolores
              voluptas quia accusamus debitis quod nihil dolore earum maiores!
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-black font-semibold text-3xl mb-8">Select Day</div>
        <div className=" flex flex-wrap gap-4 mb-6 justify-between">
          <div className="w-[30%]">
            <p className="px-10 py-3 mb-4 text-xl text-primary text-center">
              MON
            </p>
            <button className="w-full bg-gray-200 text-black rounded-[5px] text-xl px-14 py-3 text-center hover:bg-primary hover:text-white">
              28
            </button>
          </div>
          <div className="w-[30%]">
            <p className="px-10 py-3 mb-4 text-xl text-primary text-center">
              WED
            </p>
            <button className="w-full bg-gray-200 text-black rounded-[5px] text-xl px-14 py-3 text-center hover:bg-primary hover:text-white">
              28
            </button>
          </div>
          <div className="w-[30%]">
            <p className="px-10 py-3 mb-4 text-xl text-primary text-center">
              FRI
            </p>
            <button className="w-full bg-gray-200 text-black rounded-[5px] text-xl px-14 py-3 text-center hover:bg-primary hover:text-white">
              28
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="text-black font-semibold text-3xl mb-8">
          Select Time
        </div>
        <div className="grid grid-cols-6 gap-3 mb-8">
          <button className=" bg-gray-200 text-black rounded-[5px] text-[15px] px-14 py-3 text-center hover:bg-primary hover:text-white">
            09:00 AM
          </button>
          <button className=" bg-gray-200 text-black rounded-[5px] text-[15px] px-14 py-3 text-center hover:bg-primary hover:text-white">
            09:30 AM
          </button>
          <button className=" bg-gray-200 text-black rounded-[5px] text-[15px] px-14 py-3 text-center hover:bg-primary hover:text-white">
            10:00 AM
          </button>
          <button className=" bg-gray-200 text-black rounded-[5px] text-[15px] px-14 py-3 text-center hover:bg-primary hover:text-white">
            10:30 AM
          </button>
          <button className=" bg-gray-200 text-black rounded-[5px] text-[15px] px-14 py-3 text-center hover:bg-primary hover:text-white">
            11:00 AM
          </button>
          <button className=" bg-gray-200 text-black rounded-[5px] text-[15px] px-14 py-3 text-center hover:bg-primary hover:text-white">
            11:30 AM
          </button>
          <button className=" bg-gray-200 text-black rounded-[5px] text-[15px] px-14 py-3 text-center hover:bg-primary hover:text-white">
            12:00 PM
          </button>
          <button className=" bg-gray-200 text-black rounded-[5px] text-[15px] px-14 py-3 text-center hover:bg-primary hover:text-white">
            12:30 PM
          </button>
          <button className=" bg-gray-200 text-black rounded-[5px] text-[15px] px-14 py-3 text-center hover:bg-primary hover:text-white">
            01:00 PM
          </button>
          <button className=" bg-gray-200 text-black rounded-[5px] text-[15px] px-14 py-3 text-center hover:bg-primary hover:text-white">
            01:30 PM
          </button>
          <button className=" bg-gray-200 text-black rounded-[5px] text-[15px] px-14 py-3 text-center hover:bg-primary hover:text-white">
            02:00 PM
          </button>
          <button className=" bg-gray-200 text-black rounded-[5px] text-[15px] px-14 py-3 text-center hover:bg-primary hover:text-white">
            02:30 PM
          </button>
        </div>
      </div>

      <div>
        <div className="text-black font-semibold text-3xl ">
          Reason for Appointment
        </div>
        <div>
          {/* <input
            type="text"
            placeholder="Enter your complaint here..."
            className="border-1 border-gray-300 px-4 py-3 mt-6 rounded-[5px] w-full h-32"
          /> */}
          <textarea
            name="complaint"
            placeholder="Enter your complaint here..."
            className="border-1 border-gray-300 px-4 py-3 mt-6 rounded-[5px] w-full h-32"
          ></textarea>
        </div>
        {/* button */}
        <div className="flex justify-end mt-10 mr-10 w-full">
          <button className="bg-primary text-white px-15 py-3 rounded-[5px] cursor-pointer">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
