import React from 'react';
import AuthLogo from './auth-logo';

const ImageBox = () => {
  return (
    <div className="relative flex flex-col justify-between bg-[var(--primary-color)] w-[120%] h-[100dvh] overflow-hidden z-[1]">
      <AuthLogo />
      {/* image container */}
      <div className=" flex justify-center items-end">
        {/* image */}
        <div className="">
          <img className="h-[700px]" src="./doctor.png" />
        </div>
      </div>
      {/* circle + cl/c1-2 classes */}
      <div className="circle absolute rounded-[50%] w-[800px] h-[800px] left-[750px] top-[-360px] bg-[#ffffff1a]"></div>
      <div className="circle absolute rounded-[50%] w-[660px] h-[660px] left-[850px] top-[-320px] bg-[#ffffff1a]"></div>
      <div className="circle absolute rounded-[50%] w-[400px] h-[400px] left-[950px] top-[-160px] bg-[#ffffff1a]"></div>

      <div className="circle absolute rounded-[50%] w-[800px] h-[800px] left-[-330px] top-[500px] bg-[#ffffff1a]"></div>
      <div className="circle absolute rounded-[50%] w-[660px] h-[660px] left-[-250px] top-[590px] bg-[#ffffff1a]"></div>
      <div className="circle absolute rounded-[50%] w-[400px] h-[400px] left-[-150px] top-[680px] bg-[#ffffff1a]"></div>
    </div>
  );
};

export default ImageBox;
