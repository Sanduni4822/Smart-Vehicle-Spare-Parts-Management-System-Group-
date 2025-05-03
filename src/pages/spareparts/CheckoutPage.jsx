import React from 'react';
import CheckoutForm from '../../components/spareparts/shoppingcart/CheckoutForm';
import StepIndicator from '../../components/spareparts/shoppingcart/StepIndicator';
import PaymentSection from '../../components/spareparts/shoppingcart/PaymentSection'; // ✅ Import PaymentSection

function CheckoutPage() {
  return (
    <div className="container mx-auto my-8">
      {/* Step Indicator */}
      <StepIndicator currentStep={2} />

      {/* Checkout Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left - Billing Form */}
        <div className="lg:col-span-2">
          <CheckoutForm />
        </div>

        {/* Right - Payment Section */}
        <div className="w-full">
          <PaymentSection />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
