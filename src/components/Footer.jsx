import React from "react";
import { Link } from "react-router-dom";
import { Landmark, Globe, GraduationCap, Briefcase, Users, Twitter, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#002868] via-[#0050A5] to-[#002868] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* О США */}
        <div className="md:w-1/3">
          <h3 className="text-3xl font-bold text-white mb-4">United States of America</h3>
          <p className="text-base text-gray-300">
            The U.S. is a land of opportunity, offering diverse pathways for education, employment, and immigration. 
            From world-renowned universities to thriving industries, the country welcomes individuals from across the globe.
          </p>
          <p className="text-base text-gray-300 mt-4">
            Whether you are a student, a professional, or an aspiring entrepreneur, the U.S. legal system provides 
            structured visa programs, residency options, and citizenship pathways to help you achieve your goals.
          </p>
        </div>

        {/* Основные категории */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-lg">
          <div className="bg-gray-50 text-gray-900 p-6 rounded-lg shadow-md">
            <GraduationCap className="w-8 h-8 text-blue-600 mb-3" />
            <h4 className="text-xl font-semibold mb-2">Education & Student Visas</h4>
            <p className="text-gray-700">
              Learn about top universities, student visa programs (F-1), and scholarship opportunities.
            </p>
          </div>

          <div className="bg-gray-50 text-gray-900 p-6 rounded-lg shadow-md">
            <Briefcase className="w-8 h-8 text-blue-600 mb-3" />
            <h4 className="text-xl font-semibold mb-2">Work & Immigration</h4>
            <p className="text-gray-700">
              Explore employment-based visas (H-1B, EB-2), Green Card processes, and business immigration.
            </p>
          </div>

          <div className="bg-gray-50 text-gray-900 p-6 rounded-lg shadow-md">
            <Landmark className="w-8 h-8 text-blue-600 mb-3" />
            <h4 className="text-xl font-semibold mb-2">Path to Citizenship</h4>
            <p className="text-gray-700">
              Understand the U.S. naturalization process and rights granted to American citizens.
            </p>
          </div>
        </div>
      </div>

      {/* Социальные сети и ссылки */}
      <div className="mt-16 max-w-7xl mx-auto text-center">
        <h4 className="text-xl font-semibold mb-4">Stay Connected</h4>
        <p className="text-gray-300 text-base">Follow official U.S. government resources and immigration updates.</p>
        
        <div className="mt-6 flex justify-center gap-8 text-white">
          <Link to="/articles" className="hover:text-yellow-400 transition">U.S. Visas</Link>
          <Link to="/articles" className="hover:text-yellow-400 transition">USCIS</Link>
          <Link to="/articles" className="hover:text-yellow-400 transition">State Department</Link>
          <Link to="/articles" className="hover:text-yellow-400 transition">White House</Link>
        </div>

  
      </div>
    </footer>
  );
};

export default Footer;