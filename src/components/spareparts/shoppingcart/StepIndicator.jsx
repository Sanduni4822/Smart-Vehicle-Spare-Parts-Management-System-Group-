import React from "react";

const StepIndicator = ({ currentStep }) => {
  const steps = [
    { label: "SHOPPING CART", number: "01" },
    { label: "CHECKOUT", number: "02" },
    { label: "ORDER COMPLETE", number: "03" },
  ];

  return (
    <div className="flex gap-4 justify-center my-6">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`w-48 text-center p-4 rounded shadow-sm border transition-all duration-300 ${
            currentStep === index + 1
              ? "bg-red-600 text-white"
              : "bg-white text-black"
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
