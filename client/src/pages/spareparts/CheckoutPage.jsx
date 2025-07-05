import React, { useRef, useState } from 'react';
import CheckoutForm from '../../components/spareparts/shoppingcart/CheckoutForm';
import PaymentSection from '../../components/spareparts/shoppingcart/PaymentSection';
import PaymentOrderSummary from '../../components/spareparts/shoppingcart/PaymentOrderSummary';
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
  const formRef = useRef();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (!agreed) {
      alert("You must agree to the Terms & Conditions.");
      return;
    }

    if (formRef.current?.validateForm()) {
      if (paymentMethod === "card") {
        navigate("/order-completecredit");
      } else if (paymentMethod === "paypal") {
        navigate("/order-completepaypal");
      } else if (paymentMethod === "cod") {
        navigate("/order-completecash");
      } else {
        alert("Please select a valid payment method.");
      }
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <CheckoutForm ref={formRef} />
        </div>
        <div className="flex flex-col gap-4">
          <PaymentSection
            selectedMethod={paymentMethod}
            setSelectedMethod={setPaymentMethod}
          />
          <PaymentOrderSummary
            agreed={agreed}
            setAgreed={setAgreed}
            onPlaceOrder={handlePlaceOrder}
          />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
