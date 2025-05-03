import React from 'react';
import CheckoutForm from '../../components/spareparts/shoppingcart/CheckoutForm';
import StepIndicator from '../../components/spareparts/shoppingcart/StepIndicator';
import PaymentSection from '../../components/spareparts/shoppingcart/PaymentSection';
import PaymentOrderSummary from '../../components/spareparts/shoppingcart/PaymentOrderSummary'; 

function CheckoutPage() {
  return (
    <div className="container mx-auto my-8">
      {/* Step Indicator */}
      <StepIndicator currentStep={2} />

      {/* Checkout Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left - Billing Form */}
        <div className="lg:col-span-2">
          <CheckoutForm />
        </div>

        {/* Right - Payment + Order Summary */}
        <div className="flex flex-col gap-4">
          <PaymentSection />
          <PaymentOrderSummary />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
