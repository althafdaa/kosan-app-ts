import React, { FC, ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return (
    <main className="max-w-[500px] max-h-screen mx-auto flex flex-col items-center justify-center min-h-screen px-4">
      {children}
    </main>
  );
};

export default PageWrapper;
