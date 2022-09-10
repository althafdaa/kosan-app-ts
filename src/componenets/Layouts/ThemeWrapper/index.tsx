import React, { FC, ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

interface ThemeWrapperProps {
  children: ReactNode;
}

const ThemeWrapper: FC<ThemeWrapperProps> = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer theme="dark" />
    </>
  );
};

export default ThemeWrapper;
