import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Exceptional talent and seamless processes—our business scaled effortlessly with their staffing solutions.",
    author: "Sarah Johnson",
    role: "CTO, TechVision Inc."
  },
  {
    quote: "Their global reach and industry expertise made them the perfect partner for our expansion.",
    author: "Michael Chen",
    role: "HR Director, Global Health Systems"
  }
];

export default function Testimonials() {
  return (
    <div className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-lg mb-4">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}