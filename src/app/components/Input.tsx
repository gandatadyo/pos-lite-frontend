import React, { ChangeEvent } from 'react';

interface InputProps {
  type?: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  [x: string]: any; // To allow additional props like `id`, `aria-*`, etc.
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  className = '',
  ...rest
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`mt-1 w-full p-3 rounded-md ring-1 ring-gray-300 ring-inset border-gray-200 shadow-sm sm:text-sm ${className}`}
      {...rest}
    />
  );
};

export default Input;
