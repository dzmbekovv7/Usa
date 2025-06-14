import React from "react";
import { ShieldCheck, Landmark, Users, Globe } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-5xl bg-gray-50 rounded-xl shadow-lg p-12 border border-gray-300">
        {/* Заголовок */}
        <h1 className="text-5xl font-extrabold mb-10 text-blue-700 text-center">
          U.S. Privacy & Legal Rights
        </h1>
        <p className="text-lg text-gray-700 mb-10 text-center">
          Understanding how the United States protects personal data, ensures privacy, and upholds legal rights for residents and immigrants.
        </p>

        {/* Основные разделы */}
        {sections.map(({ number, title, content, icon: Icon }, idx) => (
          <section key={number} className="mb-12 bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <div className="flex items-center gap-4 mb-4">
              <Icon className="text-blue-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-gray-900">{number}. {title}</h2>
            </div>
            <p className="text-gray-800 leading-relaxed text-lg">{content}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

const sections = [
  {
    number: "1",
    title: "Privacy Protection in the U.S.",
    content: "The U.S. guarantees data protection under federal and state laws, including the Consumer Privacy Act and digital security regulations.",
    icon: ShieldCheck,
  },
  {
    number: "2",
    title: "Rights for U.S. Residents & Immigrants",
    content: "Whether you're a citizen, permanent resident, or visa holder, U.S. laws protect fundamental rights, including privacy and freedom of speech.",
    icon: Users,
  },
  {
    number: "3",
    title: "Data Collection Regulations",
    content: "U.S. businesses and institutions must disclose how personal data is collected, stored, and shared, ensuring transparency and security.",
    icon: Globe,
  },
  {
    number: "4",
    title: "Legal Compliance & Security",
    content: "Strict cybersecurity and legal measures safeguard sensitive data from unauthorized access, complying with national security frameworks.",
    icon: Landmark,
  },
];

export default PrivacyPolicy;