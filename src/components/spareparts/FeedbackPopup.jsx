import React, { useState } from 'react';

const FeedbackPopup = () => {
  const [rating, setRating] = useState('');
  const [recommend, setRecommend] = useState('');
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send this data to your server or Google Forms here
    console.log({ rating, feedback, recommend, email });
    alert('Thank you for your feedback!');
  };

  const emojis = [
    { label: 'Very Bad', symbol: '😠' },
    { label: 'Bad', symbol: '😟' },
    { label: 'Okay', symbol: '😐' },
    { label: 'Good', symbol: '😊' },
    { label: 'Excellent', symbol: '😍' },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6">Send Feedback</h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Emoji Rating */}
          <div className="text-center space-x-4">
            <p className="mb-2 font-semibold">Please rate your overall experience below</p>
            <div className="flex justify-center gap-4">
              {emojis.map((emoji, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setRating(emoji.label)}
                  className={`text-4xl ${rating === emoji.label ? 'scale-125' : ''} transition-transform`}
                >
                  {emoji.symbol}
                </button>
              ))}
            </div>
          </div>

          {/* Textarea Feedback */}
          <div>
            <label className="font-semibold block mb-2">Please write your feedback</label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              rows="4"
              required
            />
          </div>

          {/* Likert Scale (1-10) */}
          <div className="text-center">
            <p className="font-semibold mb-2">How likely are you to recommend us to your friends and colleagues? </p>
            <div className="flex justify-center gap-2 flex-wrap">
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setRecommend(num)}
                  className={`w-10 h-10 rounded-full border ${
                    recommend === num ? 'bg-blue-500 text-white' : 'text-gray-700'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
            <div className="flex justify-between text-sm mt-2 text-gray-500">
              <span>Not very likely</span>
              <span>Very likely</span>
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="font-semibold block mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
          >
            Submit Feedback
          </button>

        </form>
      </div>
    </div>
  );
};

export default FeedbackPopup;
