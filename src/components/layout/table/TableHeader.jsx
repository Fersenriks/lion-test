import React from 'react';

const TableHeader = ({ headerData }) => {
  return (
    <thead className="bg-gray-100 text-gray-800 text-xs">
      <tr>
        {headerData?.map((headerItem, index) => (
          <th key={index} className="px-4 py-3">
            {headerItem}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
