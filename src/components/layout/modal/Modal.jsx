import React from 'react';

import { useModal } from '../../../context/modalContext';
import { PiImage } from 'react-icons/pi';
import { IoIosArrowBack } from 'react-icons/io';
import { formatNumber } from '../../../utils/formatNumber';
import { capitalize } from '../../../utils/capitalize';
import { GrClose } from 'react-icons/gr';

const Modal = () => {
  const { modalData, closeModal } = useModal();

  if (!modalData) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-2">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-[1100px] max-h-[90vh] relative overflow-hidden flex flex-col">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl cursor-pointer">
          <GrClose />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 h-full overflow-y-auto">
          <div className="p-6 flex flex-col overflow-y-auto">
            <div className="flex items-center text-gray-400 mb-4">
              <span className="mr-1 cursor-pointer">
                <IoIosArrowBack size={25} />
              </span>
              <span className="font-medium">{modalData.ref}</span>
            </div>
            <div className="mb-6">
              <div className="text-3xl font-bold">
                {formatNumber(modalData.price)} {modalData.currency === 'USD' ? '$' : '€'}
              </div>
              <div className="text-gray-400 text-sm">{modalData.direction}</div>
            </div>
            <span className="text-gray-600">Características</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 text-sm">
              <div>
                <span className="block text-gray-400">Superficie</span>
                <span>{modalData.area}m²</span>
              </div>
              <div>
                <span className="block text-gray-400">Habitaciones</span>
                <span>{modalData.bedrooms}</span>
              </div>
              <div>
                <span className="block text-gray-400">Baños</span>
                <span>{modalData.bathrooms}</span>
              </div>
              <div>
                <span className="block text-gray-400">Clase energética</span>
                <span>A</span>
              </div>
              <div>
                <span className="block text-gray-400">Emisiones CO²</span>
                <span>E</span>
              </div>
              <div>
                <span className="block text-gray-400">Construcción</span>
                <span>1932</span>
              </div>
              <div>
                <span className="block text-gray-400">Conservación</span>
                <span>Reformado</span>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="mb-2">Detalles</h3>
              <div className="flex flex-wrap gap-2">
                {modalData.features.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 rounded-md text-sm text-gray-900">
                    {capitalize(tag)}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-2 bg-gray-200 flex items-center justify-center h-48 rounded">
                <span className="text-gray-500">
                  <PiImage size={40} />
                </span>
              </div>
              <div className="bg-gray-200 flex items-center justify-center h-32 rounded">
                <span className="text-gray-500">
                  <PiImage size={40} />
                </span>
              </div>
              <div className="bg-gray-400 flex items-center justify-center h-32 rounded cursor-pointer relative hover:bg-gray-200">
                <span className="text-white text-2xl font-bold">+16</span>
              </div>
            </div>
          </div>
          <div className="p-6 overflow-y-auto border-t-gray-300">
            <h3 className="mb-4 text-gray-500">Descripción</h3>
            <div className="text-gray-600 leading-relaxed text-sm space-y-4">
              {modalData.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
