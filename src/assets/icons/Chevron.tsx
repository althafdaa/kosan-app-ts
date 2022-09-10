import React, { FC } from 'react';
import clsx from 'clsx';

interface ChevronProps {
  className?: string;
  dir?: 'left' | 'up' | 'right' | 'down';
}

const Chevron: FC<ChevronProps> = ({ className, dir = 'left' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={clsx('w-6 h-6', className, {
        'rotate-90': dir === 'up',
        'rotate-180': dir === 'right',
        '-rotate-90': dir === 'down',
      })}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
};

export default Chevron;
