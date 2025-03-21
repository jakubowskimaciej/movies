import type { JSX } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FaCalendarAlt, FaChartLine, FaHeart } from 'react-icons/fa';

export default function DiscoverLink({
  item,
  isActive,
}: {
  item: { label: string; route: string; icon: string };
  isActive: boolean;
}) {
  const iconMap: { [key: string]: JSX.Element } = {
    FaHeart: <FaHeart size={12} />,
    FaChartLine: <FaChartLine size={12} />,
    FaCalendarAlt: <FaCalendarAlt size={12} />,
  };

  return (
    <li key={item.label} className="mb-2 capitalize">
      <Link
        href={item.route}
        className={cn('sidebar-link', { 'sidebar-link-active': isActive })}
        aria-current={isActive ? 'page' : undefined}
      >
        <span className="flex items-center mr-3">{iconMap[item.icon]}</span>
        {item.label}
      </Link>
    </li>
  );
}
