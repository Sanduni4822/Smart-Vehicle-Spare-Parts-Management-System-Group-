import React from 'react';
import CategoryTree from '../../components/spareparts/CategoryTree';

const SparePartsPage = () => {
  return (
    <div className="flex flex-col">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6 p-6">
        <div className="w-full md:w-1/4">
          <CategoryTree />
        </div>
      </div>
    </div>
  );
};

export default SparePartsPage;
