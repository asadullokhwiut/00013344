import React from 'react';
import heroImg from '../assets/graduates.jpg';

export default function HeroBanner() {
  return (
    <div
      className="h-[60vh] bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative z-10 text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Right Decision <br /> Starts With Us!
        </h1>
      </div>
    </div>
  );
}