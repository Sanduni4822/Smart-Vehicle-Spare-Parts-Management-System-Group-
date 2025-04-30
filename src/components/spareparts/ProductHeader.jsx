import { FaTh, FaBars } from 'react-icons/fa';
import { useState } from 'react';

const ProductHeader = ({ productCount = 21 }) => {
  const [view, setView] = useState('grid');
  const [sortOption, setSortOption] = useState('Featured');

  const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest'];

  return (
    <div className="flex flex-wrap justify-between items-center px-4 py-2 border-b text-sm text-gray-700">
      
      {/* Product Count */}
      <span>
        <span className="text-gray-500 mr-1">{productCount}</span>
        <span className="text-blue-700 font-medium">products</span>
      </span>

      {/* View + Sort */}
      <div className="flex items-center gap-4">
        {/* View Toggle */}
        <div className="flex items-center gap-1">
          <span className="mr-1">View</span>
          <button onClick={() => setView('grid')}>
            <FaTh className={`text-lg ${view === 'grid' ? 'text-black' : 'text-gray-400'}`} />
          </button>
          <button onClick={() => setView('list')}>
            <FaBars className={`text-lg ${view === 'list' ? 'text-black' : 'text-gray-400'}`} />
          </button>
        </div>

        {/* Sort By */}
        <div className="relative">
          <label htmlFor="sort" className="mr-1">Sort by</label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="appearance-none bg-white border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
