import React from 'react';
import ProductHeader from '../../components/spareparts/ProductHeader';
import ProductGridBakers, { currentProducts } from '../../components/spareparts/ProductGridBakers';

const BrakersViewDetailsPage = () => {
  return (
    <div className="p-4">
      {/* Header Section with dynamic product count */}
      <ProductHeader productCount={currentProducts.length} />
      
      {/* Product Grid Section */}
      <ProductGridBakers />
    </div>
  );
};

export default BrakersViewDetailsPage;
