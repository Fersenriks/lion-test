import React, { useState } from 'react';
import { useLocation } from 'react-router';

import { AiOutlineHome } from 'react-icons/ai';
import { BsPersonPlus } from 'react-icons/bs';
import { GrGroup } from 'react-icons/gr';
import { FaRegHeart } from 'react-icons/fa';
import { TbCoins } from 'react-icons/tb';
import { BiBuildingHouse } from 'react-icons/bi';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { FaRegFile } from 'react-icons/fa';
import { FaRegMap } from 'react-icons/fa';

import { HiMiniArrowLeftStartOnRectangle } from 'react-icons/hi2';
import { IoSettingsOutline } from 'react-icons/io5';

import { MdArrowCircleRight } from 'react-icons/md';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { pathname } = useLocation();

  const sideBarTools = [
    {
      icon: IoSettingsOutline,
      label: 'Ajustes',
      link: '/settings',
    },
    {
      icon: HiMiniArrowLeftStartOnRectangle,
      label: 'Salir',
    },
  ];

  const sideBarList = [
    {
      icon: AiOutlineHome,
      label: 'Superficie',
      link: '/area',
    },
    {
      icon: BsPersonPlus,
      label: 'Referencia',
      link: '/ref',
    },
    {
      icon: GrGroup,
      label: 'Clientes',
      link: '/clients',
    },
    {
      icon: FaRegHeart,
      label: 'Dormitorio',
      link: '/bedrooms',
    },
    {
      icon: TbCoins,
      label: 'Precio',
      link: '/price',
    },
    {
      icon: BiBuildingHouse,
      label: 'Tipo',
      link: '/type',
    },
    {
      icon: MdOutlineCalendarToday,
      label: 'Calendario',
      link: '/calendar',
    },
    {
      icon: FaRegFile,
      label: 'Status',
      link: '/status',
    },
    {
      icon: FaRegMap,
      label: 'Dirección',
      link: '/direction',
    },
  ];

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside
      className={`py-8 border-r border-gray-200 transition-all duration-300 ${
        isExpanded ? 'w-64' : 'w-20'
      }`}>
      <nav className="h-full flex flex-col justify-between">
        <div className="flex-1 relative">
          <button
            onClick={toggleSidebar}
            className={`absolute -right-3 top-2 bg-white border border-gray-200 rounded-full p-1 transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}>
            <MdArrowCircleRight
              className="text-gray-600 cursor-pointer hover:text-gray-500"
              size={20}
            />
          </button>
          <div className="space-y-2">
            {sideBarList.map((item, index) => {
              const isActive = item.link === pathname;

              return (
                <SidebarItem key={index} item={item} isExpanded={isExpanded} isActive={isActive} />
              );
            })}
          </div>
        </div>

        <div className="border-t-2 border-gray-200 pt-4">
          {sideBarTools.map((item, index) => {
            const isActive = item.link === pathname;

            return (
              <SidebarItem key={index} item={item} isExpanded={isExpanded} isActive={isActive} />
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
