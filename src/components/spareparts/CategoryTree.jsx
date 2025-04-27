import React, { useState } from 'react';
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa';

const categoriesData = [
  { name: 'Replacement Parts' },
  { name: 'Body Parts' },
  { name: 'Automotive Lightings' },
  { name: 'Tools & Equipment' },
  { name: 'Performance Parts' },
  { name: 'Wheels & Tires' },
  { name: 'Interior' },
  { name: 'Exterior' },
  { name: 'Specialty Parts' },
  { name: 'Merchandise' },
];

const CategoryTree = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="w-full p-4 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Categories</h2>

      {/* Category List */}
      <div className="flex flex-col gap-2">
        {categoriesData.map((category, index) => (
          <div key={index} className="flex items-center gap-2 cursor-pointer text-blue-800 font-semibold">
            <FaPlusSquare size={16} />
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryTree;
