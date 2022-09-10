import React, { FC, ReactNode, useState } from 'react';
import clsx from 'clsx';
import EyeIcon from '@/assets/icons/EyeIcon';
import EyeSlashIcon from '@/assets/icons/EyeSlashIcon';

interface InputProps {
  className?: string;
  suffixIcon?: ReactNode;
  placeholder?: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string | number | readonly string[] | undefined;
  type: React.HTMLInputTypeAttribute;
  isError?: boolean;
  errMsg?: string;
}

const Input: FC<InputProps> = ({
  suffixIcon,
  className,
  placeholder,
  name,
  onChange,
  type,
  errMsg,
  value,
  isError,
}) => {
  const [hide, setHide] = useState<boolean>(true);
  const toggleHide = () => {
    setHide((prev) => !prev);
  };

  if (type !== 'password') {
    return (
      <div className={`relative  ${className}`}>
        {suffixIcon}
        <input
          type={type}
          className={clsx('input', { '': isError })}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
        />
        {isError && errMsg && (
          <div className="text-red-500 mt-2 pl-6">{errMsg}</div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {suffixIcon}
      <div
        className="absolute  top-[14px] right-4 cursor-pointer"
        onClick={toggleHide}
      >
        {hide ? <EyeIcon /> : <EyeSlashIcon />}
      </div>

      <input
        type={hide ? 'password' : 'text'}
        className={clsx('input', { '': isError })}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
      {isError && errMsg && (
        <div className="text-red-500 mt-2 pl-6">{errMsg}</div>
      )}
    </div>
  );
};

export default Input;
