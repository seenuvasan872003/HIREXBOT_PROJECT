import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p className="mb-4">
              Global staffing solutions connecting businesses with exceptional talent across industries
              and borders.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="group">
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </Link>
              <Link href="#" className="group">
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </Link>
              <Link href="#" className="group">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </Link>
              <Link href="#" className="group">
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className={({ isActive }) => `hover:text-blue-400   text-white`} >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => `hover:text-blue-400 text-white`} >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className={({ isActive }) => `hover:text-blue-400 text-white`} >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => `hover:text-blue-400 text-white`} >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="/ourservices/technology" className="hover:text-blue-400">Technology Staffing</a></li>
              <li><a href="/ourservices/healthcare" className="hover:text-blue-400">Healthcare Recruitment</a></li>
              <li><a href="/ourservices/manufacturing" className="hover:text-blue-400">Manufacturing & Construction</a></li>
              <li><a href="/ourservices/hospitality" className="hover:text-blue-400">Hospitality & Retail</a></li>
              <li><a href="/ourservices/green-economy" className="hover:text-blue-400">Green Economy Experts</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div className="inline xl:flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border-gray-700 text-white px-4 py-2 rounded w-full"
              />
              <button className="bg-gray-700 hover:bg-blue-400 text-white px-4 py-2 my-3 xl:my-0 rounded">
                Subscribe
              </button>

            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
