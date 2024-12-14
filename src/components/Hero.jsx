import React from 'react';
import { Globe, Users, Briefcase } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
          alt="Diverse professionals collaborating"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Connecting Global Talent with the World's Most In-Demand Industries
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Specialists in Full-Time, Contractual, Nearshore, and Offshore Staffing Solutions
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <button 
              className="bg-white  text-blue-900 px-8 py-3 rounded-lg font-semibold 
              hover:text-white hover:bg-transparent border-2 hover:border-white
              transition cursor-pointer">
              Hire Top Talent
            </button>
            <button 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold 
              hover:bg-white hover:text-blue-900 transition cursor-pointer">
              Learn About Our Expertise
           </button>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <Globe className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
            <p className="text-center text-blue-100">Access talent from around the world</p>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Teams</h3>
            <p className="text-center text-blue-100">Pre-vetted professionals</p>
          </div>
          <div className="flex flex-col items-center">
            <Briefcase className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Flexible Solutions</h3>
            <p className="text-center text-blue-100">Tailored to your needs</p>
          </div>
        </div>
      </div>
    </div>
  );
}