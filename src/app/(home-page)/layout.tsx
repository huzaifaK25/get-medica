import { FiBell, FiUser } from 'react-icons/fi';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className=" border-2 grid [grid-template-columns:1fr_5fr] [grid-template-rows:1fr_6fr] h-[100dvh] w-[100%]">
        {/* Sidebar */}
        <div className="row-start-1 row-end-3 bg-[var(--primary-color)]">
          {/* logo */}
          <div className="relative">
            <div className="absolute rounded-full z-[2] top-10 left-21 ">
              <img src="./Medinova.svg" alt="" />
            </div>
            <div className="relative flex flex-col justify-between bg-[var(--primary-color)] h-[100dvh] overflow-hidden ">
              <div className="font-sans text-[30px] text-white font-semibold bg-transparent mx-10 mb-0 mt-17 w-fit py-[55px] ">
                GETMEDICA
              </div>
            </div>
          </div>
          {/* sidebar pages */}
        </div>
        {/* Top panel */}
        <div className="bg-gray-200 flex items-center justify-end">
          {/* profile box */}
          <div className="flex flex-row items-center justify-between gap-8">
            <div className="bg-[var(--primary-color)] w-15 h-15 rounded-full flex items-center justify-center">
              <FiBell className="text-white w-10 h-10" />
            </div>
            <div className="flex items-start justify-center flex-col ">
              <p className="">Welcome</p>
              <p className="font-bold w-40">John Doe</p>
            </div>
            <div className="bg-[var(--primary-color)] w-15 h-15 rounded-full flex items-center justify-center">
              <FiUser className="text-white w-10 h-10" />
            </div>
            <p></p>
          </div>
        </div>
        {/* Content panel */}
        <div className="col-start-2">{children}</div>
      </div>
      {/* {children} */}
    </>
  );
};

export default HomeLayout;
