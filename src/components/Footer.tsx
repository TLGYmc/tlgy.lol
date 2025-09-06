import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-gray-700">
        <div className="flex justify-between">
            <div className="py-4 ml-16">
                <p className="font-bold text-white font-mono">© 2023 My Next.js Site</p>
            </div>
            <div className="flex py-4 mr-8">
                <div className="mr-4">test</div>
                <div>test 2</div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;