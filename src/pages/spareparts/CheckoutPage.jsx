import React from 'react';
import CheckoutForm from '../../components/spareparts/shoppingcart/CheckoutForm';
import StepIndicator from '../../components/spareparts/shoppingcart/StepIndicator'; // Make sure this path is correct

function CheckoutPage() {
  return (
    <div className="container mx-auto my-8">
      {/* Step Indicator */}
      <StepIndicator currentStep={2} />

      {/* Checkout Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
