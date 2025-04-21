import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  type?: 'button' | 'submit';
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
  icon,
  className = '',
  fullWidth = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-green-600 text-white hover:bg-green-700 disabled:bg-green-300',
    secondary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300',
    outline: 'bg-transparent border border-green-600 text-green-600 hover:bg-green-50 disabled:opacity-50',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;