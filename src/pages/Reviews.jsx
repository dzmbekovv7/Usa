import React from "react";
import { Briefcase, GraduationCap, Landmark, Users, Quote } from "lucide-react";

const ReviewsPage = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans overflow-x-hidden">
      {/* Заголовок */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-6 text-blue-700">Stories of Immigration & Success</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Learn from individuals who moved to the United States, built careers, and became citizens.
          Their experiences showcase the journey through visas, education, and opportunities.
        </p>
      </section>

      {/* Основные категории */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {categories.map(({ icon: Icon, title, desc }, i) => (
          <div key={i} className="bg-gray-50 rounded-3xl p-6 text-center shadow-lg transition hover:shadow-2xl">
            <Icon className="mx-auto text-blue-600 mb-4" size={36} />
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <p className="text-gray-700">{desc}</p>
          </div>
        ))}
      </section>

      {/* Карточки отзывов */}
      <section className="px-6 py-20 bg-gray-100">
        <h2 className="text-4xl text-center font-bold text-blue-700 mb-12">Immigration Journeys</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {reviews.map(({ id, name, comment }) => (
            <div key={id} className="p-6 bg-white rounded-3xl shadow-lg border border-gray-300 hover:shadow-xl transition">
              <Quote className="text-blue-400 opacity-50 mb-4" size={32} />
              <h5 className="text-lg font-bold text-blue-600 mb-2">{name}</h5>
              <p className="text-gray-700">{comment}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const categories = [
  {
    name: "Student Visa (F-1)",
    icon: GraduationCap,
    desc: "How international students adapt to U.S. education and culture.",
  },
  {
    name: "Work Visa (H-1B)",
    icon: Briefcase,
    desc: "Stories from skilled professionals working in the United States.",
  },
  {
    name: "Green Card (EB-2/EB-3)",
    icon: Landmark,
    desc: "How immigrants gain permanent residency and build lives in the U.S.",
  },
];

const reviews = [
  {
    id: 1,
    name: "Raj P.",
    comment: "From student visa to H-1B, my American dream is becoming reality!",
  },
  {
    id: 2,
    name: "Maria G.",
    comment: "Becoming a citizen was a long process, but the opportunities are worth it.",
  },
  {
    id: 3,
    name: "Lee H.",
    comment: "Coming for work, staying for life. The U.S. is full of possibilities.",
  },
];

export default ReviewsPage;