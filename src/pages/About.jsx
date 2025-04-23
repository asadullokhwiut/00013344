import React from 'react';
import bgImage from '../assets/about-hero.jpg';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="h-[50vh] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">EduMatch</h1>
          <p className="text-lg md:text-xl italic">
            Empowering students through better choices.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white py-12 px-6 md:px-16">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Who We Are */}
          <section>
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Who We Are</h2>
            <p className="text-gray-700 text-lg">
              EduMatch is a platform created to help students easily compare
              universities, understand tuition costs, program offerings, and much more
              — all in one place.
            </p>
          </section>

          {/* Our Mission */}
          <section>
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg">
              We aim to simplify the journey of university selection by providing
              transparent data, smart tools, and interactive features for every student.
            </p>
          </section>

          {/* Stats / Features */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-purple-100 p-6 rounded shadow">
              <h3 className="text-3xl font-bold text-purple-700 mb-2">50+</h3>
              <p className="text-lg text-gray-700">Partner Universities</p>
            </div>
            <div className="bg-purple-100 p-6 rounded shadow">
              <h3 className="text-3xl font-bold text-purple-700 mb-2">5,000+</h3>
              <p className="text-lg text-gray-700">Satisfied Students</p>
            </div>
            <div className="bg-purple-100 p-6 rounded shadow">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">Coming Soon</h3>
              <p className="text-lg text-gray-700">VR Tours through University Campuses</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}