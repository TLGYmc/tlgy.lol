"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="header bg-neutral-950 border-b border-gray-400/40 relative">
      <div className="flex justify-between">
        <div className="py-6 ml-8"><Link href="/">
            <h1 className="font-bold text-2xl">
            Guest<span className='text-orange-400 font-bold font-size text-2xl'>.</span>
            </h1>
        </Link></div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>

        <div className="hidden md:flex justify-between py-7 mr-8">
          <div className={`mr-4 text-gray-200 font-bold ${pathname === '/' ? 'border-b-2 border-orange-400' : ''}`}>
            <Link href="/">Home</Link>
          </div>
          <div className={`mr-4 text-gray-200 font-bold ${pathname === '/about' ? 'border-b-2 border-orange-400' : ''}`}>
            <Link href="/about">About</Link>
          </div>
          <div className={`mr-4 text-gray-200 font-bold ${pathname === '/projects' ? 'border-b-2 border-orange-400' : ''}`}>
            <Link href="/projects">Projects</Link>
          </div>
          <div className={`mr-4 text-gray-200 font-bold ${pathname === '/contact' ? 'border-b-2 border-orange-400' : ''}`}>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed top-20 left-0 right-0 bottom-0 bg-black/40 backdrop-blur-sm z-20 md:hidden transition-opacity duration-200"  // top-20 = ~80px header height
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu */}
            <div className='md:hidden absolute top-full left-0 w-full bg-charcoal-800/95 backdrop-blur-md border-t border-gray-400/40 z-30 shadow-2xl'>
              <div className="py-4 px-8 max-w-4xl mx-auto">
                <Link
                  href="/" className="block py-3 text-gray-200 text-shadow-gray-500 font-bold hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link
                  href="/about" className="block py-3 text-gray-200 text-shadow-gray-500 font-bold hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link
                  href="/projects" className="block py-3 text-gray-200 text-shadow-gray-500 font-bold hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</Link>
                <Link 
                  href="/contact" className="block py-3 text-gray-200 text-shadow-gray-500 font-bold hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </div>
            </div>
          </>
        )}

      </div>
    </header>
  );
};

export default Header;