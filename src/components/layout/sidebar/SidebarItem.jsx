import React from 'react';
import clsx from 'clsx';

import { useLocation, useNavigate } from 'react-router';

const SidebarItem = ({ isExpanded, item, isActive }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleNavigate = () => {
    if (pathname === item.link) {
      navigate('/');
      return;
    }
    navigate(item.link);
  };

  return (
    <div
      className={clsx(
        'group flex items-center transition-colors justify-center',
        isExpanded &&
          `justify-start space-x-3 p-3 cursor-pointer hover:bg-gray-100 hover:text-gray-900`,
        isActive && isExpanded && 'bg-gray-100 text-gray-900',
      )}>
      <div
        onClick={handleNavigate}
        className={clsx(
          'text-gray-500 group-hover:text-gray-900',
          !isExpanded && 'hover:bg-gray-100 hover:text-gray-900 rounded-lg p-3 cursor-pointer',
          isActive && 'bg-gray-100 text-gray-900 rounded-lg',
        )}>
        <item.icon size={20} />
      </div>

      {isExpanded && (
        <span
          onClick={handleNavigate}
          className={clsx(
            'text-sm text-gray-700 whitespace-nowrap group-hover:text-gray-900',
            isActive && 'text-gray-900',
          )}>
          {item.label}
        </span>
      )}
    </div>
  );
};

export default SidebarItem;
