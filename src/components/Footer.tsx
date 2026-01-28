'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const weddingDate = new Date('2027-07-25T15:30:00'); // your wedding date/time

    const updateCountdown = () => {
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft('Idag gifter vi oss!');
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      setTimeLeft(`${days} dagar kvar<3`);
    };

    updateCountdown(); // run immediately
    const interval = setInterval(updateCountdown, 1000 * 60); // update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-custom-pink text-custom-red mt-8 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-4 px-6 md:flex-row md:space-y-0">
        {/* Left section */}
        <div className="text-custom-red text-center md:text-left">
          <h4 className="font-script text-xl">Marwa + Eliza</h4>
          <h4 className="font-lora mt-1 text-sm">{timeLeft}</h4>
        </div>

        {/* Middle section - image */}
        <div>
          <Image
            src="/marwaeliza2.png"
            alt="Marwa and Eliza"
            width={200}
            height={200}
            className="mx-auto flex h-40 w-40 space-x-4 opacity-50 sm:h-48 sm:w-48"
          />
        </div>
        {/* Middle section - nav links */}
        {/* <div className="font-lora flex space-x-4 text-sm">
          <a href="#info" className="text-custom-red hover:underline">
              Info
            </a>
            <a href="#schema" className="text-custom-red hover:underline">
              Schema
            </a>
            <a href="#osa" className="text-custom-red hover:underline">
              OSA
            </a>
        </div> */}

        {/* Right section - back to top */}
        <div className="font-lora text-center text-sm md:text-right">
          <a
            href="#"
            className="text-custom-red inline-flex items-center transition-colors hover:text-red-900"
          >
            ↑ Till toppen
          </a>
        </div>
      </div>
    </footer>
  );
}
