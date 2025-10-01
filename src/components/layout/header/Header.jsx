import React from 'react';

import Button from '../../ui/Button';
import { FiPlus } from 'react-icons/fi';
import { MdFormatListBulletedAdd } from 'react-icons/md';

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <h3 className="text-gray-400 text-lg font-bold">Propiedades</h3>
      <Button className="hidden lg:flex" icon={FiPlus}>
        Añadir nueva propiedad
      </Button>
      <MdFormatListBulletedAdd size={30} className="lg:hidden cursor-pointer text-gray-600" />
    </header>
  );
};

export default Header;
