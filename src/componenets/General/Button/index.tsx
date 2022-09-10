/* eslint-disable @typescript-eslint/no-unused-vars */
import ButtonSpinner from '@/assets/icons/ButtonSpinner';
import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset' | undefined;
  isLoading?: boolean;
  theme: 'primary' | 'secondary' | 'danger' | 'disabled';
  as?: 'button' | 'a';
}

const Button: FC<ButtonProps> = ({
  as = 'button',
  onClick,
  className,
  children,
  type = 'button',
  isLoading,
  theme = 'primary',
  ...props
}) => {
  if (as === 'button') {
    return (
      <button
        type={type}
        className={clsx(
          `transition-all text-white text-sm font-semibold px-3 py-2 rounded-xl active:scale-105`,
          className,
          {
            'bg-blue-600 hover:bg-blue-800 ': theme === 'primary',
            'bg-[#171A2B] border': theme === 'secondary',
            'bg-red-600 hover:bg-red-800 ': theme === 'danger',
            'text-[#ABADC6] active:scale-100': theme === 'disabled',
          }
        )}
        disabled={theme === 'disabled'}
        onClick={onClick}
        {...props}
      >
        {isLoading && <ButtonSpinner />}
        {!isLoading && children}
      </button>
    );
  }

  return (
    <a
      className={clsx(
        `transition-all text-white text-center text-sm font-semibold px-3 py-2 rounded-xl active:scale-105`,
        className,
        {
          'bg-blue-600 hover:bg-blue-800 ': theme === 'primary',
          'bg-[#171A2B] border': theme === 'secondary',
          'bg-red-600 hover:bg-red-800 ': theme === 'danger',
          'text-[#ABADC6] active:scale-100': theme === 'disabled',
        }
      )}
      {...props}
    >
      {isLoading && <ButtonSpinner />}
      {!isLoading && children}
    </a>
  );
};

export default Button;
