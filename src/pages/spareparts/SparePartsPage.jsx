import React from 'react';
import CategoryTree from '../../components/spareparts/CategoryTree';
import FilterSidebar from '../../components/spareparts/FilterSidebar';
import ProductGrid from '../../components/spareparts/ProductGrid';
import PaymentAndDelivery from '../../components/spareparts/PaymentAndDelivery';
import FeedbackButton from '../../components/spareparts/FeedbackButton'; //  Import FeedbackButton

const SparePartsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6 px-8 pb-6">

        {/* Left Side: Category Tree */}
        <div className="w-full md:w-1/4">
          <CategoryTree />
        </div>

        {/* Middle Space: Product Grid */}
        <div className="flex-1">
          <ProductGrid />
        </div>

        {/* Right Side: Filter Sidebar */}
        <div className="w-full md:w-1/4">
          <FilterSidebar />
        </div>

      </div>

      {/* Bottom Section: Payment & Delivery */}
      <PaymentAndDelivery />

      {/* Sticky Feedback Button */}
      <FeedbackButton />

    </div>
  );
};

export default SparePartsPage;
