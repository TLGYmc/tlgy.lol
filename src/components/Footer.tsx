import React from 'react';

const Footer = () => {
  return (
    <footer className="header bg-charcoal-800 border-t border-gray-400/40">
      <div className="py-6 ml-8 grid justify-left">
          <h1 className="">
          <span className='text-orange-400 font-bold'>Guest</span> - All rights reserved © {new Date().getFullYear()}
          </h1>
      </div>
    </footer>
  );
};

export default Footer;