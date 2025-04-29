import React, { useState } from 'react';
import CategoryTree from '../../components/spareparts/CategoryTree';
import FilterSidebar from '../../components/spareparts/FilterSidebar';
import ProductGrid from '../../components/spareparts/ProductGrid';
import PaymentAndDelivery from '../../components/spareparts/PaymentAndDelivery';
import FeedbackButton from '../../components/spareparts/FeedbackButton';
import FeedbackPopup from '../../components/spareparts/FeedbackPopup'; // ✅ Import FeedbackPopup

const SparePartsPage = () => {
  const [showFeedbackPopup, setShowFeedbackPopup] = useState(false); // ✅ Create popup state

  return (
    <div className="flex flex-col min-h-screen relative">

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6 px-8 pb-6">
        <div className="w-full md:w-1/4">
          <CategoryTree />
        </div>
        <div className="flex-1">
          <ProductGrid />
        </div>
        <div className="w-full md:w-1/4">
          <FilterSidebar />
        </div>
      </div>

      {/* Bottom Section */}
      <PaymentAndDelivery />

      {/* Sticky Feedback Button */}
      <FeedbackButton onClick={() => setShowFeedbackPopup(true)} /> {/* ✅ Pass open function */}

      {/* Feedback Popup */}
      {showFeedbackPopup && (
        <FeedbackPopup /> 
      )}

    </div>
  );
};

export default SparePartsPage;
