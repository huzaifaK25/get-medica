import HomeLogo from '@/components/home.logo';
import { FiBell, FiUser } from 'react-icons/fi';
import SvgAppointment from '@/components/svg.appointment';
import SvgAvailability from '@/components/svg.availability';
import SvgDoctor from '@/components/svg.doctor';

interface Props {
  children: React.ReactNode;
}
type Role = 'doctor' | 'patient';
// enum Role {
//   DOCTOR = 'doctor',
//   PATIENT = 'patient'
// }
const role: Role = 'doctor';

const HomeLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-row h-screen w-vw overflow-x-hidden">
      {/* side nav bar */}
      <nav className=" w-1/6 bg-[var(--primary-color)]">
        <HomeLogo />
        <div className="flex flex-col mt-10 items-center gap-3">
          {role === 'doctor' ? (
            <>
              <div className="flex flex-row items-center justify-start gap-1 rounded-[8px] bg-white text-[var(--primary-color)] font-semibold w-[80%] pt-1 pb-1 pr-1 pl-1">
                <SvgAvailability /> Set Availability
              </div>
              <div className="flex flex-row items-center justify-start gap-1 rounded-[8px] bg-white text-[var(--primary-color)] font-semibold w-[80%] pt-1 pb-1 pr-1 pl-1">
                <SvgAppointment />
                Appointment
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-row items-center justify-start gap-1 rounded-[8px] bg-white text-[var(--primary-color)] font-semibold w-[80%] pt-1 pb-1 pr-1 pl-1">
                <SvgDoctor /> Doctor List
              </div>
              <div className="flex flex-row items-center justify-start gap-1 rounded-[8px] bg-white text-[var(--primary-color)] font-semibold w-[80%] pt-1 pb-1 pr-1 pl-1">
                <SvgAppointment />
                Appointment
              </div>
            </>
          )}
        </div>
      </nav>
      {/* right panel */}
      <div className=" w-full">
        {/* top nav bar */}
        <div className="bg-gray-200  h-1/9 flex justify-end">
          {/* profile box */}
          <div className=" w-100 h-full flex flex-row justify-evenly items-center">
            <div>
              <div className="bg-[var(--primary-color)] w-15 h-15 rounded-full flex items-center justify-center">
                <FiBell className="text-white w-10 h-10" />
              </div>
            </div>
            <div className=" w-40 flex flex-col justify-center items-start">
              <p>Welcome</p>
              <p className="font-bold">Dr. John Doe</p>
            </div>
            <div>
              <div className="bg-[var(--primary-color)] w-15 h-15 rounded-full flex items-center justify-center">
                <FiUser className="text-white w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
        {/* content page */}
        <div className="h-8/9">{children}</div>
      </div>
    </div>
  );
};

export default HomeLayout;
