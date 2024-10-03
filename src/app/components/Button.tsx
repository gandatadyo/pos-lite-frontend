import React from 'react';

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
  }
  
  const Button: React.FC<ButtonProps> = ({ onClick, children, className, disabled }) => {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 ${className}`}
        disabled={disabled}
      >
        {children}
      </button>
    );
  };
  
  export default Button;