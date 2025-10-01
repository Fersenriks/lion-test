import { PiImage } from 'react-icons/pi';

import { formatNumber } from '../../../utils/formatNumber';
import { capitalize } from '../../../utils/capitalize';
import { useModal } from '../../../context/modalContext';

const PropertyTableRows = ({ properties }) => {
  const { openModal } = useModal();

  const handleClickPropertie = () => {
    openModal(properties);
  };

  return (
    <tr
      onClick={() => handleClickPropertie(properties.id)}
      className="border-t hover:bg-gray-50 cursor-pointer">
      <td className="px-4 py-3">
        <div className="bg-gray-200 flex items-center justify-center h-10 w-20 rounded">
          <PiImage size={24} className="text-gray-800" />
        </div>
      </td>
      <td className="px-4 py-3">{properties.office}</td>
      <td className="px-4 py-3">{properties.ref}</td>
      <td className="px-4 py-3">{capitalize(properties.type)}</td>
      <td className="px-4 py-3">{properties.direction}</td>
      <td className="px-4 py-3">
        {formatNumber(properties.price)} {properties.currency}
      </td>
      <td className="px-4 py-3">{properties.bedrooms}</td>
      <td className="px-4 py-3">{properties.area} m²</td>
      <td className="px-4 py-3">{properties.date}</td>
    </tr>
  );
};

export default PropertyTableRows;
