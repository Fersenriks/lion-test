import React, { useEffect, useState } from 'react';

import Paginator from '../../components/features/pagination/Paginator';
import PropertieTable from '../../components/layout/table/PropertieTable';
import db from '../../data/db.json';
import Input from '../../components/ui/Input';
import Header from '../../components/layout/header/Header';
import { getPaginatedData } from '../../utils/getPaginatedData';

import { IoSearchSharp } from 'react-icons/io5';
import { useLocation } from 'react-router';

const tableHeaderProps = [
  'Foto',
  'Oficina',
  'Referencia',
  'Tipo',
  'Derección',
  'Precio',
  'Habitaciones',
  'Superficie',
  'Fecha',
];

const Properties = () => {
  const [filteredData, setFilteredData] = useState(db);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginationData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { pathname } = useLocation();

  const ITEMS_PER_PAGE = 8;
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue.toLowerCase());
  };

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredData(db);
    } else {
      const filtered = db.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm) ||
          item.type.toLowerCase().includes(searchTerm) ||
          item.office.toLowerCase().includes(searchTerm) ||
          item.location.toLowerCase().includes(searchTerm) ||
          item.direction.toLowerCase().includes(searchTerm) ||
          item.ref.toLowerCase().includes(searchTerm) ||
          (item.features &&
            item.features.some((feature) => feature.toLowerCase().includes(searchTerm))),
      );
      setFilteredData(filtered);
    }
    setCurrentPage(1);
  }, [searchTerm, db]);

  const getFilteredData = () => {
    const cleanUrl = pathname.replace(/^\//, '');

    const sorted = [...db].sort((a, b) => {
      if (typeof a[cleanUrl] === 'number') {
        return a[cleanUrl] - b[cleanUrl];
      }
      if (typeof a[cleanUrl] === 'string') {
        return a[cleanUrl].localeCompare(b[cleanUrl]);
      }
      return 0;
    });

    setFilteredData(sorted);
  };

  useEffect(() => {
    getFilteredData();
  }, [pathname]);

  useEffect(() => {
    setPaginationData(getPaginatedData(filteredData, currentPage, ITEMS_PER_PAGE));
  }, [currentPage, filteredData]);

  return (
    <div className="relative h-full flex flex-col justify-between">
      <Header />
      <div className="flex justify-center">
        <Input
          icon={IoSearchSharp}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Buscar..."
        />
      </div>
      <div className="bg-white rounded-t-lg mt-5 overflow-auto h-[80%]">
        <PropertieTable headerData={tableHeaderProps} tableData={paginatedData} />
      </div>
      <div>
        <Paginator
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Properties;
