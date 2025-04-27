import React from 'react';
import CategoryTree from '../../components/spareparts/CategoryTree';
import FilterSidebar from '../../components/spareparts/FilterSidebar'; // Import the FilterSidebar

const SparePartsPage = () => {
  return (
    <div className="flex flex-col">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6 p-6">

        {/* Left Side: Category Tree */}
        <div className="w-full md:w-1/4">
          <CategoryTree />
        </div>

        {/* Middle Space: (Optional Parts Listing) */}
        <div className="flex-1">
          {/* You can later add a products grid or parts list here */}
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
