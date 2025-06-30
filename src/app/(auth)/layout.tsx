import ImageBox from '@/components/image-box';
import React from 'react';

// defining props type
interface Props {
  children: React.ReactNode;
}

// layout function recieves an oject of type props which has children
const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <main className="m-0 p-0 max-w-screen w-full min-h-[100dvh] overflow-x-hidden ">
      <section className="flex flex-row">
        <ImageBox />
        {/* form box */}
        <div
          id="outer box"
          className="w-[80%] m-auto h-[100dvh] flex items-center justify-center font-sans z-[3] "
        >
          {/* forms of in page.tsx*/}
          {children}
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;
