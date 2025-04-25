import { useState } from 'react';
import { Facebook, Instagram, Twitter, Github } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };

  return (
    <div>
      <h3 className="text-gray-800 font-semibold mb-4 text-lg">Join Our Newsletter Now</h3>
      <p className="text-gray-600 mb-4">Get E-mail updates about our latest shop and special offers.</p>
      <form onSubmit={handleSubmit} className="flex mb-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email..."
          className="flex-grow px-4 py-2 border border-gray-300 focus:outline-none"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 uppercase text-sm font-semibold">
          Subscribe
        </button>
      </form>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-600 hover:text-blue-600"><Facebook size={20} /></a>
        <a href="#" className="text-gray-600 hover:text-blue-600"><Instagram size={20} /></a>
        <a href="#" className="text-gray-600 hover:text-blue-600"><Twitter size={20} /></a>
        <a href="#" className="text-gray-600 hover:text-blue-600"><Github size={20} /></a>
      </div>
    </div>
  );
}
