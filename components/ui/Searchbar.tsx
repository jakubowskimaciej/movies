import { SearchbarProps } from '@/types';
import clsx from 'clsx';
import SearchIcon from '../ui/SearchIcon';
import { useEffect, useRef, useState } from 'react';

export default function Searchbar({ isScrolled }: SearchbarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const searchbarRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (isScrolled && !isExpanded) {
      setIsExpanded(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchbarRef.current && !searchbarRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    // Dodaj nasłuchiwanie kliknięć poza komponentem
    document.addEventListener('mousedown', handleClickOutside);

    // Sprzątanie nasłuchiwania
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={searchbarRef}
      className={clsx('relative transition-all duration-300 ease-out ml-[320px]', isScrolled && 'translate-x-[-125px]')}
    >
      <input
        type="text"
        placeholder={isScrolled && !isExpanded ? '' : 'Search for movies...'}
        className={clsx(
          'transition-all duration-300 ring-0 focus:ring-0 focus:outline-none',
          isScrolled && !isExpanded ? 'w-10 h-10 rounded-full bg-gray-dark text-center pr-0 pl-0' : 'input-class'
        )}
        onClick={handleClick}
      />
      {isScrolled && !isExpanded && (
        <div className="absolute inset-0 flex items-center justify-start px-2 cursor-pointer" onClick={handleClick}>
          <SearchIcon />
        </div>
      )}
    </div>
  );
}
