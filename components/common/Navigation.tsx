'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { NavigationProps } from '@/types';

function Navigation({ genres }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className=" h-full w-64 sticky top-[-400px] border-r-[1px] border-gray-ligh hidden lg:block">
      <div className=" w-full h-[200px] flex justify-center items-center ">
        <Link href="/popular" className="flex justify-center items-center">
          <Image
            src="/icons/logo.svg"
            width={200}
            height={200}
            alt="Movies Library logo"
            style={{ width: '80%', height: '80%' }}
            priority
          />
        </Link>
      </div>

      <div className="w-full flex flex-col justify-center items-start py-5 px-[30px] sticky top-0 ">
        <h2 className="px-[9px] py-7 font-bold text-xs text-gray-main uppercase ">discover</h2>
        <ul className="w-full px-6">
          {sidebarLinks.map((item) => {
            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
            return (
              <li key={item.label} className="mb-2 capitalize">
                <Link
                  href={item.route}
                  className={cn('sidebar-link', { 'sidebar-link-active': isActive })}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* GENRES SECTION */}
        <h2 className="px-[9px] py-7 font-bold text-xs text-gray-main uppercase ">genres</h2>
        <ul>
          {genres.map((genre) => {
            const path = pathname.split('/').pop();
            const isActive = path === genre.name || pathname.startsWith(`/genre/${genre.name.toLocaleLowerCase()}`);

            return (
              <li key={genre.name} className="mb-2 capitalize">
                <Link
                  href={`/genre/${genre.name.toLocaleLowerCase()}`}
                  className={cn('sidebar-link', { 'sidebar-link-active': isActive })}
                >
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
