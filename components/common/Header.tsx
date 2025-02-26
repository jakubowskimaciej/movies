'use client';
import { useState, useEffect, JSX } from 'react';
import { throttle } from 'lodash';
import clsx from 'clsx';
import Searchbar from '../ui/Searchbar';

export default function Header(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);
  const SCROLL_THRESHOLD = 50;

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    }, 100); // Throttle to 100ms

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel(); // Cancel any pending throttled calls
    };
  }, []);

  return (
    <header className="w-full p-4 flex justify-between items-center fixed top-0 left-0 z-50 transition-transform duration-300">
      {/* Div otaczający input, który będzie przesuwał się */}
      <Searchbar isScrolled={isScrolled} />
      <button
        disabled={isScrolled}
        className={clsx(
          'transition-all duration-300 ease border border-gray-400 text-gray-700 px-5 py-1 mr-10 rounded-full',
          isScrolled && 'opacity-0'
        )}
      >
        Login
      </button>
    </header>
  );
}
