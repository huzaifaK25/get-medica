'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const role = 'doctor';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = { email, password };

    // TODO: API call here
    console.log(user);

    setEmail('');
    setPassword('');

    if (role === 'doctor') {
      router.push('/doctor-home');
    }
    router.push('/patient-home');
  };

  // Form Box
  return (
    <section id="inner box" className="flex flex-row">
      {/* form */}
      <form onSubmit={handleSubmit} className="flex flex-col w-fit h-fit">
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
            onClick={() => router.push('/')}
          >
            Sign Up
          </a>
        </p>
      </form>
    </section>
  );
};

export default LoginView;
