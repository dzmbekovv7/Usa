import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Flag, Home, Newspaper, MessageCircle, Info, HelpCircle } from 'lucide-react';
import ScrollToTopButton from './ScrollToTop';

const navItems = [
  { name: "Home", icon: Home, path: "/" },
  { name: "Articles", icon: Newspaper, path: "/articles" },
  { name: "Reviews", icon: MessageCircle, path: "/reviews" },
  { name: "Privacy", icon: Info, path: "/privacy" },
  { name: "Contact", icon: MessageCircle, path: "/contact" },
  { name: "About", icon: Info, path: "/about" },

];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-300 shadow-md">
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-30 z-30" onClick={() => setIsOpen(false)}></div>}

      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        {/* Title with Flag Icon */}
        <div className="flex items-center space-x-2">
          <Flag className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900 hover:text-blue-600 transition">GRE2USA</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map(({ name, icon: Icon, path }, index) => (
            <Link key={index} to={path} className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition">
              <Icon className="w-5 h-5" />
              <span>{name}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-2/3 bg-white z-50 p-6 shadow-xl flex flex-col gap-4">
          <div className="flex justify-between items-center text-gray-900 mb-4">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>
          {navItems.map(({ name, icon: Icon, path }, index) => (
            <Link key={index} to={path} className="flex items-center space-x-2 text-lg text-gray-900 hover:text-blue-600 font-medium transition" onClick={() => setIsOpen(false)}>
              <Icon className="w-5 h-5" />
              <span>{name}</span>
            </Link>
          ))}
        </div>
      )}

      <ScrollToTopButton />
    </header>
  );
};

export default Header;