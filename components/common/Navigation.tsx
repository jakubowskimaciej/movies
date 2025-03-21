'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { NavigationProps } from '@/types';
import DiscoverLink from './DiscoverLink';
import { FaDotCircle } from 'react-icons/fa';
import LogoLink from '../ui/LogoLink';

function Navigation({ genres }: NavigationProps) {
  const pathname = usePathname();

  // Przypisanie odpowiednich ikon

  return (
    <nav className=" h-full w-64 sticky top-[-400px] border-r-[1px]  hidden lg:block">
      <LogoLink />

      <div className="w-full flex flex-col justify-center items-start py-5 px-[30px] sticky">
        {/* DISCOVER SECTION */}
        <h2 className="px-[9px] py-7 font-bold text-xs text-gray-main uppercase ">discover</h2>
        <ul className="w-full">
          {sidebarLinks.map((item) => {
            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
            return <DiscoverLink key={item.label} item={item} isActive={isActive} />;
          })}
        </ul>
        {/* GENRES SECTION */}
        <h2 className="px-[9px] py-5 font-bold text-xs text-gray-main uppercase ">genres</h2>
        <ul>
          {genres.map((genre) => {
            const path = pathname.split('/').pop();
            const isActive =
              path === genre.name || pathname.startsWith(`/movies/genre/${genre.name.toLocaleLowerCase()}`);

            return (
              <li key={genre.name} className="mb-2 capitalize">
                <Link
                  href={`/movies/genre/${genre.name.toLocaleLowerCase()} `}
                  className={cn('sidebar-link flex items-center', { 'sidebar-link-active': isActive })}
                >
                  <FaDotCircle className="mr-3" />
                  {genre.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
