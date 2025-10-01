import React from 'react';
import TableHeader from './TableHeader';
import PropertyTableRows from './PropertyTableRows';
import MobileCard from '../../ui/MobileCard';

const PropertieTable = ({ tableData, headerData }) => {
  return (
    <>
      <table className="hidden lg:table w-full text-sm text-left text-gray-600">
        <TableHeader headerData={headerData} />
        <tbody>
          {tableData.map((item) => (
            <PropertyTableRows key={item.ref} properties={item} />
          ))}
        </tbody>
      </table>
      {tableData.map((item) => (
        <MobileCard key={item.ref} item={item} />
      ))}
    </>
  );
};

export default PropertieTable;
