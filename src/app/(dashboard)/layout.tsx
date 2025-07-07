'use client';
import HomeLogo from '@/components/home-logo';
import { FiBell, FiBox, FiUser } from 'react-icons/fi';
import SvgAppointment from '@/components/icon-appointment';
import SvgAvailability from '@/components/icon-availability';
import SvgDoctor from '@/components/icon-doctor';
import Link from 'next/link';
import { useGetUser } from '@/services/queries/doctor.query';
import { useLogout } from '@/utils/logout';
import Spinner from '../loading';

interface Props {
  children: React.ReactNode;
}

const HomeLayout: React.FC<Props> = ({ children }) => {
  const { data } = useGetUser();
  const role = data?.user?.role;
  console.log(data);

  return (
    <div className="flex flex-row h-screen w-vw overflow-x-hidden ">
      {/* side nav bar */}
      <nav className="  md:w-[230px] lg:w-2xs h-full bg-[var(--primary-color)] transition-all duration-300 ease-in-out opacity-0 translate-x-[-100%] md:opacity-100 md:translate-x-0 fixed ">
        <HomeLogo />
        <div className="flex flex-col mt-10 items-center gap-3">
          {role === 'doctor' ? (
            <>
              <Link
                href={'/doctor-dashboard'}
                className="flex flex-row items-center justify-start gap-1 rounded-[8px] bg-white text-[var(--primary-color)] font-semibold w-[80%] pt-1 pb-1 pr-1 pl-1"
              >
                <SvgAvailability /> Set Availability
              </Link>
              <Link
                href={'/doctor-dashboard/appointment'}
                className="flex flex-row items-center justify-start gap-1 rounded-[8px] bg-white text-[var(--primary-color)] font-semibold w-[80%] pt-1 pb-1 pr-1 pl-1"
              >
                <SvgAppointment />
                Appointment
              </Link>
            </>
          ) : (
            <>
              <Link
                href={'/patient-dashboard'}
                className="flex flex-row items-center justify-start gap-1 rounded-[8px] bg-white text-[var(--primary-color)] font-semibold w-[80%] pt-1 pb-1 pr-1 pl-1"
              >
                <SvgDoctor /> Doctor List
              </Link>
              <Link
                href={'/patient-dashboard/appointment'}
                className="flex flex-row items-center justify-start gap-1 rounded-[8px] bg-white text-[var(--primary-color)] font-semibold w-[80%] pt-1 pb-1 pr-1 pl-1"
              >
                <SvgAppointment />
                Appointment
              </Link>
            </>
          )}
          <button
            onClick={useLogout()}
            className="flex flex-row justify-center gap-1 rounded-[8px] bg-white text-[var(--primary-color)] font-bold w-[80%] pt-1 pb-1 pr-1 pl-1 mt-130 cursor-pointer"
          >
            LOGOUT
          </button>
        </div>
      </nav>
      {/* right panel */}
      <div className=" w-full">
        {/* top nav bar */}
        <div className="bg-gray-200 h-1/9 flex  justify-between md:justify-end ">
          {/* profile box */}
          <div className="w-60 md:w-100 h-full flex flex-row justify-evenly items-center transition-all duration-300 ease-in-out">
            <div>
              <div className="bg-[var(--primary-color)] w-15 h-15 rounded-full hidden md:flex items-center justify-center">
                <FiBell className="text-white w-10 h-10" />
              </div>
            </div>
            <div className="order-2 md:order-none w-30 md:w-40 text-[12px] sm:text-[15px] flex flex-col justify-center items-start ">
              <p className="transition-all duration-300 ease-in-out">Welcome</p>
              <p className="font-bold transition-all duration-300 ease-in-out">
                {data?.user?.name}
              </p>
            </div>
            <div className="order-1 md:order-none">
              <div className="bg-[var(--primary-color)] w-10 h-10 sm:w-15 sm:h-15 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
                <FiUser className="text-white w-8 h-8 sm:w-10 sm:h-10" />
              </div>
            </div>
          </div>
          {/* menu logo */}
          <div className=" text-3xl mr-10 md:mr-0 content-center md:transition-all duration-300 ease-in-out opacity-100 translate-x-0 md:opacity-0 md:translate-x-[100%]">
            <FiBox />
          </div>
        </div>
        {/* content page */}
        <div className="h-8/9 md:ml-[230px] lg:ml-72 transition-all duration-300 ease-in-out">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
