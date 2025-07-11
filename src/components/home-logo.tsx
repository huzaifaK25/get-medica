import React from 'react';
import Medinova from '../../public/Medinova.svg';

const HomeLogo = () => {
  return (
    <div className=" w-full h-30 flex flex-col items-center justify-evenly mt-4 ">
      <img src={Medinova.src} alt="get-medica logo" className="size-15 " />
      <div className="font-sans text-[25px] text-white font-semibold  ">
        GETMEDICA
      </div>
    </div>
  );
};

export default HomeLogo;
