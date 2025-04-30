import React from 'react';
//import ProductHeader from '../../../components/spareparts/viewdetails/ProductHeader';
//import ProductGridBakers from '../../../components/spareparts/viewdetails/ProductGridBakers';
import ProductHeader from '../../components/spareparts/ProductHeader';

const BrakersViewDetailsPage = () => {
  return (
    <div className="p-4">
      {/* Header Section */}
      {/* <ProductHeader productCount={6} /> Dynamically show 6 products */}
      <ProductHeader productCount={6} />
      {/* Product Grid Section */}
      {/* <ProductGridBakers/> */}
    </div>
  );
};

export default BrakersViewDetailsPage;
