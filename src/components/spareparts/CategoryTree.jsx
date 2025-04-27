import React, { useState } from 'react';
import CategoryItem from './CategoryItem'; // import the child component

const CategoryTree = () => {
  const [expanded, setExpanded] = useState({});

  const categoriesData = [
    {
      name: 'Replacement Parts',
      subcategories: [
        { name: 'Brakes', count: 174573 },
        { name: 'Suspension', count: 74425 },
        { name: 'Heating and Air Conditioning', count: 39988 },
        { name: 'Engine', count: 37294 },
        { name: 'Cooling Systems', count: 35610 },
        { name: 'Steering', count: 27883 },
        { name: 'Car Sensors', count: 24861 },
        { name: 'Fuel and Air', count: 23758 },
        { name: 'Wheel Bearings', count: 22461 },
        { name: 'Drivetrain', count: 20990 },
      ],
    },
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

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="w-full p-4 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Categories</h2>

      <div className="flex flex-col gap-3">
        {categoriesData.map((category, index) => (
          <CategoryItem
            key={index}
            category={category}
            isExpanded={expanded[index]}
            onToggle={() => toggleExpand(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryTree;
