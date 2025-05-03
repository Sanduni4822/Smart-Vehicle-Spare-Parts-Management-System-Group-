import React from "react";
import { useNavigate } from "react-router-dom";

const StepIndicator = ({ currentStep }) => {
  const navigate = useNavigate();

  const steps = [
    { label: "SHOPPING CART", number: "01", path: "/view-cart" },
    { label: "CHECKOUT", number: "02", path: "/checkout" },
    { label: "ORDER COMPLETE", number: "03", path: "/order-complete" }, // If implemented
  ];

  return (
    <div className="flex gap-4 justify-center my-6">
      {steps.map((step, index) => (
        <div
          key={index}
          onClick={() => navigate(step.path)}
          className={`w-48 text-center p-4 rounded shadow-sm border cursor-pointer transition-all duration-300 ${
            currentStep === index + 1
              ? "bg-red-600 text-white"
              : "bg-white text-black hover:bg-gray-100"
          }`}
        >
          <span className="block font-semibold text-sm">{step.label}</span>
          <span
            className={`text-3xl font-bold ${
              currentStep === index + 1 ? "text-white/30" : "text-black/10"
            }`}
          >
            {step.number}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
