import HeartIcon from '@/assets/icons/HeartIcon';
import HomeIcon from '@/assets/icons/HomeIcon';
import PersonIcon from '@/assets/icons/PersonIcon';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

const navItem = [
  { route: '/', label: 'Home', icon: HomeIcon },
  { route: '/explore', label: 'Explore', icon: HomeIcon },
  { route: '/bookmarks', label: 'Bookmarks', icon: HeartIcon },
  { route: '/profile', label: 'Profile', icon: PersonIcon },
];
const Navigation: FC = () => {
  const router = useRouter();
  return (
    <nav className="w-full fixed bottom-0 py-3 bg-[#1a1d2d]">
      <div className="flex justify-between w-full max-w-[500px] mx-auto px-6">
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
      </div>
    </nav>
  );
};

export default Navigation;
