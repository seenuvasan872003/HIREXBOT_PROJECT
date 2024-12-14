import React from 'react';
import { Globe2, Users2, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: Globe2,
    title: 'Global Talent Pool',
    description: 'Access to skilled professionals from around the world.'
  },
  {
    icon: Users2,
    title: 'Industry Expertise',
    description: 'Deep knowledge across multiple sectors and technologies.'
  },
  {
    icon: Clock,
    title: 'Flexible Options',
    description: 'Full-time, contractual, nearshore, and offshore solutions.'
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Rigorous vetting process for all candidates.'
  }
];

export default function WhyChooseUs() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-600">Your Partner in Global Staffing Solutions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Let's Find Your Perfect Fit
          </button>
        </div>
      </div>
    </div>
  );
}