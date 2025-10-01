export function getPagination(currentPage = 1, totalPages = 20, delta = 2) {
  let pagesNums = [];
  const left = currentPage - delta;
  let right = currentPage + delta;
  pagesNums.push(1, totalPages);

  if (currentPage <= 2) right += 2;

  for (let i = left; i <= right; i++) {
    if (pagesNums.includes(i) || i < 1 || i > totalPages) continue;
    pagesNums.push(i);
  }

  pagesNums.sort((a, b) => a - b);

  let pagination = [];

  for (let i = 0; i < pagesNums.length; i++) {
    pagination.push(pagesNums[i]);
    if (pagesNums[i + 1] && pagesNums[i + 1] - pagesNums[i] > 1) pagination.push('...');
  }

  return pagination;
}
