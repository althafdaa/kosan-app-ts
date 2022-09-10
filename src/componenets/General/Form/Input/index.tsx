import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface InputProps {
  className?: string;
  suffixIcon?: ReactNode;
  placeholder?: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value: string | number | readonly string[] | undefined;
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
  return (
    <div className={`relative ${className}`}>
      {suffixIcon}
      <input
        type={type}
        className={clsx('input mb-1', { '': isError })}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
      {isError && errMsg && <span className="text-red-500 pl-6">{errMsg}</span>}
    </div>
  );
};

export default Input;
