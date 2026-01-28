'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const heart = '<3';

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 50) {
        setShow(false); // scrolling down → hide
      } else {
        setShow(true); // scrolling up → show
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-transform duration-300 ${
        show ? 'translate-y-0' : '-translate-y-full'
      } bg-custom-pink`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="" className="font-quicksand text-custom-red text-xl font-bold">
          {heart}
        </a>

        {/* hamburger for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-custom-red cursor-pointer focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>

        {/* desktop menu */}
        <div className="font-lora hidden space-x-6 md:flex">
          <a href="#info" className="text-custom-red hover:underline">
            Info
          </a>
          <a href="#schema" className="text-custom-red hover:underline">
            Schema
          </a>
          <a href="#osa" className="text-custom-red hover:underline">
            OSA
          </a>
        </div>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div
          className={`bg-custom-pink transition-max-h overflow-hidden duration-300 md:hidden ${
            isOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <ul className="font-lora flex flex-col space-y-2 p-4 text-right text-lg">
            <li>
              <a
                href="#info"
                className="text-custom-red hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Info
              </a>
            </li>
            <li>
              <a
                href="#schema"
                className="text-custom-red hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Schema
              </a>
            </li>
            <li>
              <a
                href="#osa"
                className="text-custom-red hover:underline"
                onClick={() => setIsOpen(false)}
              >
                OSA
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
