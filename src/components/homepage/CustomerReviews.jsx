import React from 'react';

//  Import customer images
import Customer1 from '../../assets/homepagecustomerreviews/Customer1.png';
import Customer2 from '../../assets/homepagecustomerreviews/Customer2.png';
import Customer3 from '../../assets/homepagecustomerreviews/Customer3.png';
import Customer4 from '../../assets/homepagecustomerreviews/Customer4.png';


const reviews = [
  {
    text: "UDFVDFHBV DV DJNKJDSFHDUNFVK",
    name: "MD",
    rating: 4,
    image: Customer1,
  },
  {
    text: "A critical article or report, as in a periodical, on a book, play, recital, or the like; critique; evaluation.",
    name: "MD Mosheur Rahman",
    rating: 4,
    image: Customer2,
  },
  {
    text: "Providing a great customer experience is very important to us, and we thank you for working with us to resolve the problems you experienced.",
    name: "Mosheur Rahman",
    rating: 5,
    image: Customer3,
  },
  {
    text: "I needed a part for my car and got online to search for it. I came across CarParts.com. They seemed to have the part I needed.",
    name: "Shakil Choudhory",
    rating: 4,
    image: Customer4,
  },
  
  
];

const CustomerReviews = () => {
  return (
    <div className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-10 uppercase">
        What our Customer say
      </h2>
      <div className="max-w-7xl mx-auto px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow hover:shadow-md transition duration-300 p-6 flex flex-col justify-between border border-gray-200"
          >
            <p className="text-gray-700 text-sm mb-6">{review.text}</p>
            <div className="flex items-center gap-4 mt-auto">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full border-2 border-orange-500"
              />
              <div className="text-left">
                <h4 className="text-md font-bold">{review.name}</h4>
                <div className="flex">
                  {[...Array(5)].map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 ${
                        starIndex < review.rating ? 'text-orange-500' : 'text-gray-300'
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.028 3.174a1 1 0 00.95.69h3.317c.969 0 1.371 1.24.588 1.81l-2.683 1.95a1 1 0 00-.364 1.118l1.028 3.174c.3.921-.755 1.688-1.538 1.118l-2.683-1.95a1 1 0 00-1.176 0l-2.683 1.95c-.783.57-1.838-.197-1.538-1.118l1.028-3.174a1 1 0 00-.364-1.118l-2.683-1.95c-.783-.57-.38-1.81.588-1.81h3.317a1 1 0 00.95-.69l1.028-3.174z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
