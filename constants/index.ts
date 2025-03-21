import { SidebarLink } from '@/types';

export const sidebarLinks: SidebarLink[] = [
  {
    route: '/movies/popular',
    label: 'Popular',
    icon: 'FaHeart',
  },
  {
    route: '/movies/top_rated',
    label: 'Top Rated',
    icon: 'FaChartLine',
  },
  {
    route: '/movies/upcoming',
    label: 'Upcoming',
    icon: 'FaCalendarAlt',
  },
];
