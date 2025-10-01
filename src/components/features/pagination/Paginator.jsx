import React, { useState } from 'react';

import { FaGreaterThan } from 'react-icons/fa6';
import { FaLessThan } from 'react-icons/fa6';
import { getPagination } from './pagination';

const Paginator = ({ totalPages, currentPage, setCurrentPage }) => {
  const [pagination, setPagination] = useState(getPagination(1, totalPages));

  const handlePagination = (itemPage) => {
    setPagination(getPagination(itemPage, totalPages));
    setCurrentPage(itemPage);
  };

  const incCurrentPage = () => {
    if (currentPage >= totalPages) return;

    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    setPagination(getPagination(nextPage, totalPages));
  };

  const decCurrentPage = () => {
    if (currentPage <= 1) return;

    const prevPage = currentPage - 1;
    setCurrentPage(prevPage);
    setPagination(getPagination(prevPage, totalPages));
  };

  return (
    <div className="mt-4">
      <div className="flex justify-center space-x-2">
        <button onClick={decCurrentPage} className="cursor-pointer">
          <FaLessThan />
        </button>

        {pagination.map((itemPage, index) => {
          if (itemPage === '...') {
            return <div className="px-4 py-2">...</div>;
          }
          return (
            <button
              key={index}
              onClick={() => handlePagination(itemPage)}
              className={`px-4 py-2 rounded-md cursor-pointer ${
                currentPage === itemPage
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-700 hover:bg-gray-300'
              }`}>
              {itemPage}
            </button>
          );
        })}
        <button onClick={incCurrentPage} className="cursor-pointer">
          <FaGreaterThan />
        </button>
      </div>
    </div>
  );
};

export default Paginator;
