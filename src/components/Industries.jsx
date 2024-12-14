import React from 'react';
import { Monitor, Heart, Factory, Home, ShoppingBag, Leaf } from 'lucide-react';

const industries = [
  {
    icon: Monitor,
    title: 'Technology',
    description: 'Delivering top software engineers, AI specialists, and cybersecurity experts to power innovation.'
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Connecting skilled medical professionals with healthcare facilities worldwide.'
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Providing expert trades and technical professionals for industrial operations.'
  },
  {
    icon: Home,
    title: 'Hospitality',
    description: 'Staffing solutions for hotels, restaurants, and service industries.'
  },
  {
    icon: ShoppingBag,
    title: 'Retail',
    description: 'Supporting retail operations with qualified professionals.'
  },
  {
    icon: Leaf,
    title: 'Green Economy',
    description: 'Powering sustainable initiatives with specialized environmental experts.'
  }
];

export default function Industries() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <industry.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
              <p className="text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}