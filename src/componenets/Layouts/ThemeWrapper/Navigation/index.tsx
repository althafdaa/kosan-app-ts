import HeartIcon from '@/assets/icons/HeartIcon';
import HomeIcon from '@/assets/icons/HomeIcon';
import PersonIcon from '@/assets/icons/PersonIcon';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

interface NavigationProps {}

const navItem = [
  { route: '/', label: 'Home', icon: HomeIcon },
  { route: '/explore', label: 'Explore', icon: HomeIcon },
  { route: '/bookmarks', label: 'Bookmarks', icon: HeartIcon },
  { route: '/profile', label: 'Profile', icon: PersonIcon },
];
const Navigation: FC<NavigationProps> = (props) => {
  const router = useRouter();
  return (
    <>
      <nav className="w-full fixed inset-x-0 bottom-0 py-3 bg-[#1a1d2d] flex justify-between px-12">
        {navItem.map((item, idx) => {
          const isRouteMatch = router.asPath === item.route;
          return (
            <Link href={item.route} passHref key={idx}>
              <a className="flex flex-col items-center justify-center">
                <item.icon fill={isRouteMatch ? 'white' : 'none'} />
                <span className={clsx({ 'font-semibold': isRouteMatch })}>
                  {item.label}
                </span>
              </a>
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Navigation;
