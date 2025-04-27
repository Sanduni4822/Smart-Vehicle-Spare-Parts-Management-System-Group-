import React, { useState } from 'react';
import FilterSection from '../../components/spareparts/FilterSection'; // Correct import path

const FilterSidebar = () => {
  const [expanded, setExpanded] = useState({
    productGrade: false,
    fitment: false,
    brand: false,
    price: false,
    availability: false,
  });

  const toggleSection = (section) => {
    setExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="w-full p-6 bg-white rounded-md shadow-md overflow-y-auto max-h-screen">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">All Filters</h2>

      {/* Sections */}
      <FilterSection
        title="Product Grade"
        isExpanded={expanded.productGrade}
        onToggle={() => toggleSection('productGrade')}
      />
      <FilterSection
        title="Fitment"
        isExpanded={expanded.fitment}
        onToggle={() => toggleSection('fitment')}
      />
      <FilterSection
        title="Brand"
        isExpanded={expanded.brand}
        onToggle={() => toggleSection('brand')}
      />
      <FilterSection
        title="Price"
        isExpanded={expanded.price}
        onToggle={() => toggleSection('price')}
      />
      <FilterSection
        title="Availability"
        isExpanded={expanded.availability}
        onToggle={() => toggleSection('availability')}
      />
    </div>
  );
};

export default FilterSidebar;
