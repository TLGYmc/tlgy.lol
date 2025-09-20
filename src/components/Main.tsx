import React from 'react';

const Main = () => {
  return (
      <div className="main-content grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <h1 className="text-3xl">
            Hey, I'm <span className="text-blue-400"> Guest</span>
        </h1>
      </div>
  );
};

export default Main;