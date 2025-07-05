import React, { useState } from 'react';
import CategoryItem from './CategoryItem'; // Import the child component

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
    {
      name: 'Body Parts',
      subcategories: [
        { name: 'Front Bumpers', count: 15205 },
        { name: 'Fenders', count: 8519 },
        { name: 'Rear Bumpers', count: 7546 },
        { name: 'Bumper Grilles', count: 5772 },
        { name: 'Mirrors', count: 5340 },
        { name: 'Car Doors', count: 5311 },
        { name: 'Hoods', count: 2902 },
        { name: 'Radiator Support', count: 2026 },
        { name: 'Tailgates', count: 526 },
        { name: 'Quarter Panels', count: 454 },
        { name: 'Windshields', count: 409 },
      ],
    },
    {
      name: 'Automotive Lightings',
      subcategories: [
        { name: 'Headlights', count: 10622 },
        { name: 'Tail Lights', count: 8085 },
        { name: 'Turn Signals', count: 6751 },
        { name: 'Fog Lights', count: 3473 },
        { name: 'Lighting Components', count: 2094 },
        { name: 'Interior Lighting', count: 1817 },
        { name: 'Replacement Bulbs', count: 1737 },
        { name: 'Custom Lights', count: 335 },
        { name: 'LED Lights', count: 122 },
      ],
    },
    {
      name: 'Tools & Equipment',
      subcategories: [
        { name: 'Hand Tools & Accessories', count: 7347 },
        { name: 'Automotive Service Tools', count: 3568 },
        { name: 'Power Tools & Accessories', count: 1517 },
        { name: 'Garage & Auto Shop Equipment', count: 1291 },
        { name: 'Auto Body Shop Tools & Equipment', count: 716 },
        { name: 'Pneumatic Air Tools', count: 695 },
        { name: 'Automotive Paints', count: 421 },
        { name: 'Apparel & Safety Gear', count: 227 },
        { name: 'Vehicle Lifting Equipment', count: 99 },
        { name: 'Air Tools & Accessories', count: 28 },
      ],
    },
    {
      name: 'Performance Parts',
      subcategories: [
        { name: 'Brakes & Rotors', count: 12205 },
        { name: 'Ignition Systems', count: 9757 },
        { name: 'Cooling Systems', count: 6799 },
        { name: 'Engine Components', count: 5562 },
        { name: 'Transmission Systems', count: 4602 },
        { name: 'Suspension Systems', count: 2896 },
        { name: 'Exhaust Systems', count: 2720 },
        { name: 'Fuel Delivery Systems', count: 1904 },
        { name: 'Steering Systems', count: 1776 },
        { name: 'Axles & Drivetrain', count: 601 },
      ],
    },
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
    <div className="w-full p-8 bg-white rounded-md shadow-md overflow-y-auto max-h-screen">
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
