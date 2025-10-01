import React from 'react';

const Button = ({ className = '', icon: Icon, children, ...props }) => {
  return (
    <button
      className={`
        bg-black rounded text-white p-1
        px-4 py-2
        transition-all duration-200
        hover:bg-gray-800
        active:bg-gray-900
        flex items-center justify-center gap-2
        cursor-pointer
        ${className}
      `}
      {...props}>
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </button>
  );
};

export default Button;
