import React from 'react';

import { PiImage } from 'react-icons/pi';

import { formatNumber } from '../../utils/formatNumber';
import { capitalize } from '../../utils/capitalize';

import { useModal } from '../../context/modalContext';

const MobileCard = ({ item }) => {
  const { openModal } = useModal();

  const handleClickPropertie = () => {
    openModal(item);
  };

  return (
    <div
      onClick={() => handleClickPropertie(item.id)}
      className="bg-white rounded-xl shadow-md my-5 p-2 cursor-pointer hover:shadow-lg transition lg:hidden">
      <div className="bg-gray-200 flex items-center justify-center h-40 w-full rounded mb-3">
        <PiImage size={40} className="text-gray-800" />
      </div>
      <div className="space-y-2 text-sm text-gray-700">
        <p>
          <span className="font-medium">Oficina:</span> {item.office}
        </p>
        <p>
          <span className="font-medium">Referencia:</span> {item.ref}
        </p>
        <p>
          <span className="font-medium">Tipo:</span> {capitalize(item.type)}
        </p>
        <p>
          <span className="font-medium">Dirección:</span> {item.direction}
        </p>
        <p>
          <span className="font-medium">Precio:</span> {formatNumber(item.price)} {item.currency}
        </p>
        <p>
          <span className="font-medium">Habitaciones:</span> {item.bedrooms}
        </p>
        <p>
          <span className="font-medium">Superficie:</span> {item.area} m²
        </p>
        <p>
          <span className="font-medium">Fecha: {item.date}</span>
        </p>
      </div>
    </div>
  );
};

export default MobileCard;
