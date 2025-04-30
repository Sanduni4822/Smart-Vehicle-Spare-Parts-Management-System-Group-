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

  // Define subcategories (filters) here
  const filtersData = {
    productGrade: [
      { name: 'Standard/OE', count: 25083 },
      { name: 'Premium', count: 6952 },
      { name: 'Economy', count: 4207 },
      { name: 'High Performance', count: 902 },
    ],
    fitment: [
      { name: 'Vehicle Specific', count: 46109 },
      { name: 'Universal Fitment', count: 1519 },
    ],
    brand: [
      { name: 'BOSCH', count: 6373 },
      { name: 'DENSO', count: 4714 },
      { name: 'ACDelco', count: 1628 },
      { name: 'KYB', count: 1497 },
      { name: 'DORMAN', count: 1406 },
      { name: 'OSC', count: 1151 },
      { name: 'UAC', count: 994 },
    ],
    price: [
      { name: '$0 - $50', count: 10543 },
      { name: '$51 - $100', count: 8543 },
      { name: '$101 - $200', count: 6043 },
      { name: '$201 - $500', count: 2543 },
      { name: '$500+', count: 843 },
    ],
    availability: [
      { name: 'In Stock', count: 55000 },
      { name: 'Out of Stock', count: 12000 },
    ],
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
        options={filtersData.productGrade}
      />
      <FilterSection
        title="Fitment"
        isExpanded={expanded.fitment}
        onToggle={() => toggleSection('fitment')}
        options={filtersData.fitment}
      />
      <FilterSection
        title="Brand"
        isExpanded={expanded.brand}
        onToggle={() => toggleSection('brand')}
        options={filtersData.brand}
      />
      <FilterSection
        title="Price"
        isExpanded={expanded.price}
        onToggle={() => toggleSection('price')}
        options={filtersData.price}
      />
      <FilterSection
        title="Availability"
        isExpanded={expanded.availability}
        onToggle={() => toggleSection('availability')}
        options={filtersData.availability}
      />
    </div>
  );
};

export default FilterSidebar;
