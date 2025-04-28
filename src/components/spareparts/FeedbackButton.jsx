import React from 'react';

const FeedbackButton = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      <button 
        className="bg-gray-100 text-black font-semibold px-3 py-8 rounded-l-md shadow-2xl hover:bg-gray-200 transition-all text-sm"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        onClick={() => window.open('https://forms.gle/your-feedback-form', '_blank')} // Replace this with your feedback form link
      >
        Feedback
      </button>
    </div>
  );
};

export default FeedbackButton;
