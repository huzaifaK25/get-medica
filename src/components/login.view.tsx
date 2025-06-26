import React from 'react';
import * as font from '../../tailwind.config';
import ImageBox from './image.box';

const LoginView = () => {
  const lexend = font.default.theme.extend.fontFamily.lexend;
  return (
    <main
      className="m-0 p-0 max-w-screen w-full min-h-[100dvh] overflow-x-hidden"
      id="login-page"
    >
      <section className="flex flex-row">
        <ImageBox />
        {/* form box */}
        <div className="w-[80%] m-auto h-[100dvh] flex items-center justify-center font-sans z-[3]">
          {/* form */}
          <form className="flex flex-col w-fit h-fit">
            <p className="text-4xl font-semibold pb-10">Log In:</p>
            {/* input title box */}
            <div className="flex flex-row items-center justify-start gap-1 mb-2.5">
              <p className="">Email</p>
              <p className="text-red-500">*</p>
              <p>:</p>
            </div>
            <input
              className="w-[485px] p-2 border-gray-200 border-1 rounded-[5px] mb-10"
              type="email"
              required
              placeholder="eg. john@ex.com"
            />
            <div className="flex flex-row items-center justify-start gap-1 mb-2.5">
              <p className="">Password</p>
              <p className="text-red-500">*</p>
              <p>:</p>
            </div>
            <input
              className="w-[485px] p-2 mb-5  border-gray-200 border-1 rounded-[5px]"
              type="password"
              required
              placeholder="Enter Password"
            />
            <div className="text-end">
              <a
                href="#"
                className="text-[var(--primary-color)] text-xl hover:text-blue-600"
              >
                Forgot Password?
              </a>
            </div>
            <div className="text-center">
              <button className="bg-[var(--primary-color)] text-white w-[485px] h-[60px] px-1 py-5 border-[var(--primary-color)] rounded-xl cursor-pointer mt-7.5 hover:bg-blue-600">
                Continue
              </button>
            </div>
            <p className="text-xl text-[#999] text-center">
              Don't have an account?{' '}
              <a
                href="#"
                className="text-[var(--primary-color)] text-xl hover:text-blue-600"
              >
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default LoginView;
