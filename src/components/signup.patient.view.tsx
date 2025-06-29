'use client';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignupPatientView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = { name, email, password };

    // API call here
    console.log(user);

    // Clear fields after submit
    setName('');
    setEmail('');
    setPassword('');

    router.push('/login');
  };
  // Form Box
  return (
    <section className="flex flex-row">
      {/* form */}
      <form onSubmit={handleSubmit} className="flex flex-col w-fit h-fit">
        <p className="text-4xl font-semibold pb-10">Sign Up:</p>
        {/* input title box */}
        {/* Name */}
        <div className="flex flex-row items-center justify-start gap-1 mb-2.5">
          <p className="">Name</p>
          <p className="text-red-500">*</p>
          <p>:</p>
        </div>
        <input
          className="w-[485px] p-2 border-gray-200 border-1 rounded-[5px] mb-10"
          type="text"
          name="name"
          value={name}
          required
          placeholder="John Doe"
          onChange={(e) => setName(e.target.value)}
        />
        {/* Email */}
        <div className="flex flex-row items-center justify-start gap-1 mb-2.5">
          <p className="">Email</p>
          <p className="text-red-500">*</p>
          <p>:</p>
        </div>
        <input
          className="w-[485px] p-2 border-gray-200 border-1 rounded-[5px] mb-10"
          type="email"
          name="email"
          value={email}
          required
          placeholder="eg. john@ex.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Password */}
        <div className="flex flex-row items-center justify-start gap-1 mb-2.5">
          <p className="">Password</p>
          <p className="text-red-500">*</p>
          <p>:</p>
        </div>
        <input
          className="w-[485px] p-2 mb-5  border-gray-200 border-1 rounded-[5px]"
          type="password"
          name="password"
          value={password}
          required
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="text-center">
          <button
            className="bg-[var(--primary-color)] text-white w-[485px] h-[60px] px-1 py-5 border-[var(--primary-color)] rounded-xl cursor-pointer mt-7.5 hover:bg-blue-600"
            type="submit"
          >
            Continue
          </button>
        </div>
        <p className="text-xl text-[#999] text-center">
          Already have an account?
          <a
            href="#"
            className="text-[var(--primary-color)] text-xl hover:text-blue-600 pl-2"
            onClick={() => router.push('/login')}
          >
            Log in
          </a>
        </p>
      </form>
      {/* </div> */}
    </section>
  );
};

export default SignupPatientView;
