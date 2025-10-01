import React from 'react';

const Input = ({ className = '', icon: Icon, ...props }) => {
  return (
    <div className="relative flex">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
      )}

      <input
        className={`
          bg-gray-100 rounded
          border border-gray-300
          px-4 py-1
          focus:outline-none focus:ring-2 focus:ring-gray-500
          ${Icon ? 'pl-10' : ''}
          ${className}
        `}
        {...props}
      />
    </div>
  );
};

export default Input;
