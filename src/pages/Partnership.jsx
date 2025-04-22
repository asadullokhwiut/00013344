import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import wiut from '../partners/wiut.jpg';
import suit from '../partners/suit.jpg';
import oxford from '../partners/oxford.jpg';
import cambridge from '../partners/cambridge.jpg';

export default function PartnershipPage() {
  const partners = [
    { id: 1, name: 'WIUT', img: wiut, description: 'The #1 international university in Uzbekistan!' },
    { id: 2, name: 'SUIT', img: suit, description: 'Singapore University in Tashkent.' },
    { id: 3, name: 'Oxford', img: oxford, description: 'Top prestige university in the world.' },
    { id: 4, name: 'Cambridge', img: cambridge, description: 'The #1 university in the UK.' }
  ];

  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, '');
    setFormData(prev => ({ ...prev, phone: digitsOnly }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    emailjs.send(
      'edumatch',
      'edumatchtemp',
      {
        name: formData.companyName,
        email: formData.email,
        message: formData.message,
        title: 'Partnership Inquiry'
      },
      'Y-0bEGRWD2qdcQPZf'
      )    
      .then(() => {
        setStatus('Thank you! Your inquiry has been sent.');
        setFormData({ companyName: '', email: '', phone: '', message: '' });
      })
      .catch((error) => {
        console.error('Email send error:', error);
        setStatus('Failed to send inquiry. Please try again later.');
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 p-6">
      <h1 className="text-3xl font-bold text-center text-purple-900 mb-8">
        Our Partners
      </h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {partners.map(partner => (
          <div
            key={partner.id}
            className="bg-gradient-to-br from-purple-300 via-purple-400 to-purple-500 rounded-lg shadow p-6 flex flex-col items-center text-center"
          >
            <img src={partner.img} alt={partner.name} className="w-full h-48 object-cover rounded mb-4 shadow" />
            <h2 className="text-xl font-semibold mb-2 text-white">
              {partner.name}
            </h2>
            <p className="text-gray-100">{partner.description}</p>
          </div>
        ))}
      </div>

      {/* Partnership Inquiry Form */}
      <div className="max-w-xl mx-auto bg-gradient-to-br from-purple-300 via-purple-400 to-purple-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold mb-4 text-white text-center">
          Partnership Inquiry
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-white">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-white bg-white bg-opacity-90 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
              required
              className="mt-1 block w-full p-2 border border-white bg-white bg-opacity-90 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              inputMode="numeric"
              pattern="[0-9]+"
              title="Please enter numbers only"
              value={formData.phone}
              onChange={handlePhoneChange}
              required
              className="mt-1 block w-full p-2 border border-white bg-white bg-opacity-90 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-white bg-white bg-opacity-90 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-white text-purple-800 font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition"
            >
              Submit Inquiry
            </button>
          </div>
        </form>
        {status && <p className="mt-4 text-center text-white">{status}</p>}
      </div>
    </div>
  );
}