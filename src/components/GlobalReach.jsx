import React from 'react';
import { MapPin } from 'lucide-react';


const locations = [
  'US', 'UK', 'Australia', 
  'Germany', 'Netherlands', 'Norway'
];

export default function GlobalReach() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="py-20 bg-cover bg-[url('https://images.unsplash.com/photo-1589519160732-57fc498494f8?auto=format&fit=crop&q=80')] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Global Reach</h2>
              <p className="text-2xl ">Bridging Borders, Building Teams</p>
            </div>
            {/* <img
              src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?auto=format&fit=crop&q=80 " 
              alt="World Map"
              className="h-auto my-10 rounded-lg shadow-lg"
            /> */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {locations.map((location, index) => (
              <div key={index} className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-lg font-medium">{location}</span>
              </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-2xl max-w-2xl mx-auto">
               With a presence across major global markets, we connect businesses with top talent worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}