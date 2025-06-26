import ImageBox from '@/components/image.box';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className="m-0 p-0 max-w-screen w-full min-h-[100dvh] overflow-x-hidden border-2 border-purple-500">
      <div>auth layout</div>
      <section className="flex flex-row">
        <ImageBox />
        {/* form box */}
        <div className="w-[80%] m-auto h-[100dvh] flex items-center justify-center font-sans z-[3]">
          {/* form */}
          {children}
        </div>
      </section>
    </main>
  );
};

export default Layout;

<main id="layout">
  {/* Image box component */}
  <div className="p-24">{/* children */}</div>
</main>;
