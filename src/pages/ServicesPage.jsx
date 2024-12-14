import React from 'react';
import { Code, Heart, Factory, Building2, ShoppingBag, Leaf } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Technology Staffing',
    description: 'From software engineers to cybersecurity experts, our talent drives innovation.',
    features: ['Software Development', 'AI & Machine Learning', 'Cloud Architecture', 'Cybersecurity']
  },
  {
    icon: Heart,
    title: 'Healthcare Recruitment',
    description: 'Filling critical gaps in healthcare with skilled professionals globally.',
    features: ['Medical Practitioners', 'Nursing Staff', 'Healthcare Administration', 'Specialized Care']
  },
  {
    icon: Factory,
    title: 'Manufacturing & Engineering',
    description: 'Expert technical professionals for industrial operations.',
    features: ['Process Engineers', 'Quality Control', 'Production Management', 'Maintenance']
  },
  {
    icon: Building2,
    title: 'Construction & Trades',
    description: 'Skilled trades professionals for your construction needs.',
    features: ['Project Managers', 'Skilled Trades', 'Site Supervisors', 'Safety Officers']
  },
  {
    icon: ShoppingBag,
    title: 'Retail & Hospitality',
    description: 'Supporting customer-facing operations with qualified professionals.',
    features: ['Store Management', 'Customer Service', 'Operations', 'Inventory Management']
  },
  {
    icon: Leaf,
    title: 'Green Economy',
    description: 'Sustainable development experts for environmental initiatives.',
    features: ['Renewable Energy', 'Sustainability', 'Environmental Engineering', 'Green Technology']
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive Staffing Solutions Across Industries
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}