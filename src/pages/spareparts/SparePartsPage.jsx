import React from 'react';
import CategoryTree from '../../components/spareparts/CategoryTree';
import FilterSidebar from '../../components/spareparts/FilterSidebar';
import ProductGrid from '../../components/spareparts/ProductGrid'; //  Import your ProductGrid here

const SparePartsPage = () => {
  return (
    <div className="flex flex-col">

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6 px-8 pb-6">

        {/* Left Side: Category Tree */}
        <div className="w-full md:w-1/4">
          <CategoryTree />
        </div>

        {/* Middle Space: Product Grid */}
        <div className="flex-1">
          <ProductGrid /> {/* 👉 Call ProductGrid here */}
        </div>

        {/* Right Side: Filter Sidebar */}
        <div className="w-full md:w-1/4">
          <FilterSidebar />
        </div>

      </div>
    </div>
  );
};

export default SparePartsPage;
