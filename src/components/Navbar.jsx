import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-xl font-bold text-blue-600">
              StaffingPro
            </NavLink>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => `hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-600'}`} >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-600'}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-600'}`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-600'}`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-3 py-2 hover:text-blue-600 ${
                    isActive ? 'text-blue-600' : 'text-gray-600'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block px-3 py-2 hover:text-blue-600 ${
                    isActive ? 'text-blue-600' : 'text-gray-600'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `block px-3 py-2 hover:text-blue-600 ${
                    isActive ? 'text-blue-600' : 'text-gray-600'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block px-3 py-2 hover:text-blue-600 ${
                    isActive ? 'text-blue-600' : 'text-gray-600'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}