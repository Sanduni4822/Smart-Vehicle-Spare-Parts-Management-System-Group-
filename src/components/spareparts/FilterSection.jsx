import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FilterSection = ({ title, icon, isExpanded, onToggle }) => {
  return (
    <div className="border-b py-6">
      <div
        className="flex justify-between items-center cursor-pointer font-semibold text-black"
        onClick={onToggle}
      >
        <div className="flex items-center gap-2">
          {icon && <span>{icon}</span>}
          <span>{title}</span>
        </div>
        {isExpanded ? <FaMinus /> : <FaPlus />}
      </div>
    </div>
  );
};

export default FilterSection;
