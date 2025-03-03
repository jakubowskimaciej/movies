import { SidebarLink } from '@/types';

export const sidebarLinks: SidebarLink[] = [
  {
    //   imgURL: "/icons/home.svg",
    route: '/movies/popular',
    label: 'Popular',
  },
  {
    //   imgURL: "/icons/dollar-circle.svg",
    route: '/movies/top_rated',
    label: 'Top Rated',
  },
  {
    //   imgURL: "/icons/transaction.svg",
    route: '/movies/upcoming',
    label: 'Upcoming',
  },
];
