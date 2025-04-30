import React from 'react';
import ProductHeader from '../../components/spareparts/ProductHeader';
import ProductGridBakers from '../../components/spareparts/ProductGridBakers';

const BrakersViewDetailsPage = () => {
  return (
    <div className="p-4">
      {/* Header Section */}
      <ProductHeader productCount={6} />
      
      {/* Product Grid Section */}
      <ProductGridBakers/>
    </div>
  );
};

export default BrakersViewDetailsPage;
