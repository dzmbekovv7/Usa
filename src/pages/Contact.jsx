import React from "react";
import { Mail, Phone, MapPin, Landmark, Users } from "lucide-react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900 px-6 py-20 font-sans">
      
      {/* Hero Section with USA Image on the Left */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: USA Image */}
        <div className="w-full md:w-1/2">
          <img
          src="https://assets3.thrillist.com/v1/image/3188668/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70"
            alt="USA Skyline"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-extrabold text-blue-700">Contact U.S. Immigration & Visa Help</h1>
          <p className="text-lg text-gray-700 mt-4">
            Need help with visas, residency, or citizenship? Our team provides expert guidance on navigating the U.S. immigration system.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start mt-16">
        
        {/* Left Side: Contact Form */}
        <div className="bg-gray-50 rounded-lg shadow-lg p-10 border border-gray-300">
          <h2 className="text-3xl font-semibold mb-6">Send us a message</h2>
          <ContactForm />
        </div>

        {/* Right Side: Contact Info */}
        <div className="bg-gray-50 rounded-lg shadow-lg p-10 border border-gray-300">
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <div className="space-y-6 text-lg">
            <div className="flex items-center gap-4">
              <Mail className="text-blue-600 w-8 h-8" />
              <div>
                <div className="font-medium">Email</div>
                <a href="mailto:support@usvisas.com" className="text-blue-500 hover:underline">
                  support@usvisas.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-blue-600 w-8 h-8" />
              <div>
                <div className="font-medium">Phone</div>
                <a href="tel:+15551234567" className="text-blue-500 hover:underline">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-blue-600 w-8 h-8" />
              <div>
                <div className="font-medium">Office Location</div>
                <p className="text-gray-700">Washington D.C., USA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immigration Help Section */}
      <section className="bg-gray-100 py-20 px-6 mt-24">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          U.S. Immigration Assistance
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            { title: "Visa Guidance", icon: Landmark, text: "Explore work, student, and investor visa options for entering the U.S." },
            { title: "Residency & Green Card", icon: Users, text: "Learn about permanent residency, family sponsorship, and employment pathways." },
            { title: "Citizenship Process", icon: Landmark, text: "Step-by-step instructions on how to become a U.S. citizen through naturalization." },
          ].map(({ title, icon: Icon, text }, i) => (
            <div key={i} className="bg-white p-8 shadow-lg rounded-lg border border-gray-300 text-center">
              <Icon className="text-blue-600 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="text-gray-700 mt-3">{text}</p>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default Contact;