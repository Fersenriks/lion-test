export const getPaginatedData = (tableData = [], currentPage = 1, itemsPerPage = 8) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return tableData.slice(startIndex, endIndex);
};
