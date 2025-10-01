import React from 'react';

const PageWrapper = ({ children, className }) => {
  return <div className="bg-white p-2 rounded h-full">{children}</div>;
};

export default PageWrapper;
