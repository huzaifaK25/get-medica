import React from 'react';
import Medinova from '../../public/Medinova.svg';

const AuthLogo = () => {
  return (
    <div className=" w-[40%] h-30 flex flex-col items-center justify-evenly mt-15 ">
      <img src={Medinova.src} alt="get-medica logo" className="size-20 " />
      <div className="font-sans text-[35px] text-white font-semibold  ">
        GETMEDICA
      </div>
    </div>
  );
};

export default AuthLogo;
