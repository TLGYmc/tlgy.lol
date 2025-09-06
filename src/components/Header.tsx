import React from 'react';

const Header = () => {
  return (
    <header className="header bg-charcoal-800 border-b border-gray-400/30">
      <div className="flex justify-between">
        <div className="py-6 ml-8">
            <h1 className="font-bold text-2xl">
            Guest<span className='text-blue-400 font-bold font-size text-2xl'>.</span>
            </h1>
        </div>
        <div className="flex justify-between py-7 mr-8">
          <div className="mr-4 text-gray-300/70">test</div>
        </div>
      </div>
    </header>
  );
};

export default Header;