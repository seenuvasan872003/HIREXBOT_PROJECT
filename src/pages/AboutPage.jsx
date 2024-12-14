import React from 'react';
import { Users, Target, Shield } from 'lucide-react';

const values = [
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working together to create innovative staffing solutions.'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Committed to delivering the highest quality talent.'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Building trust through transparent practices.'
  }
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About StaffingPro
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Empowering Businesses with the Right Talent, Anywhere in the World
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To deliver flexible and specialized staffing solutions that connect global talent with opportunities, 
              driving business success in dynamic markets.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine industry expertise with global reach to provide 
              comprehensive staffing solutions that meet your unique needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}