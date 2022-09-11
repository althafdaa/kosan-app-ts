import { useRouter } from 'next/router';
import React, { FC, ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import Navigation from './Navigation';

interface ThemeWrapperProps {
  children: ReactNode;
}

const onboardRouting = ['/onboarding', '/signin', '/register'];

const ThemeWrapper: FC<ThemeWrapperProps> = ({ children }) => {
  const router = useRouter();

  const isNavShow = onboardRouting.some((item) =>
    router.pathname.startsWith(item)
  );

  return (
    <div className="relative">
      {children}

      {!isNavShow && <Navigation />}
      <ToastContainer theme="dark" />
    </div>
  );
};

export default ThemeWrapper;
