import React from "react";
import { motion } from "framer-motion";
import { Landmark, Globe, Users, Briefcase, Scale , Target, Handshake, ShieldCheck, Home, Banknote, GraduationCap } from "lucide-react";

const sections = [
  {
    id: "education",
    title: "Study in the U.S.",
    description: "Explore world-class universities, scholarships, and the student visa process for international students.",
    image: "https://jfkconsultancy.com/wp-content/uploads/2023/06/study-in-USA.png",
    icon: Globe,
  },
  {
    id: "work",
    title: "Work & Immigration",
    description: "Understand visa categories like H-1B, employment-based Green Cards, and U.S. job market opportunities.",
    image: "https://www.buhlerthomaslaw.com/wp-content/uploads/2022/08/immigration-visa-status-basics-720x480.jpg",
    icon: Briefcase,
  },
  {
    id: "laws",
    title: "U.S. Legal Rights",
    description: "Learn about constitutional protections, labor laws, and rights for immigrants in the United States.",
    image: "https://thumbs.dreamstime.com/b/career-opportunities-job-fair-re-hiring-recruitment-ads-human-resources-open-vacancy-job-seekers-come-applying-jobs-165707996.jpg",
    icon: Scale,
  },
];


const team = [
  {
    name: "John Patterson",
    role: "Immigration Attorney",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    bio: "Expert in visa regulations and helping applicants with residency and citizenship processes.",
  },
  {
    name: "Emily Carter",
    role: "Visa Consultant",
    photo: "https://randomuser.me/api/portraits/women/38.jpg",
    bio: "Guides international students and professionals through complex U.S. visa applications.",
  },
  {
    name: "Michael Chang",
    role: "Legal Advisor",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Specialist in employment and business immigration strategies for foreign professionals.",
  },
  {
    name: "Sophia Roberts",
    role: "Economic Policy Analyst",
    photo: "https://randomuser.me/api/portraits/women/29.jpg",
    bio: "Researches and advises on financial impact and regulations affecting immigrants in the U.S.",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      {/* Intro Section with Image */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 py-20">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://video.cgtn.com/news/2022-03-08/Do-immigrants-in-the-U-S-have-equal-opportunities--18eCbemQOXK/video/7ee5074913cb4c8bb763ff158819bf99/7ee5074913cb4c8bb763ff158819bf99.png"
            alt="USA Overview"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Text */}
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-extrabold text-blue-700">About Immigration & U.S. Opportunities</h1>
          <p className="text-lg text-gray-700 mt-4">
            The United States offers pathways for study, work, and residency for people around the world. Our mission is to provide clear, expert guidance on visas, legal rights, and economic prospects.
          </p>
        </div>
      </section>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 py-20">

        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-extrabold text-blue-700">Your Guide to U.S. Immigration</h1>
          <p className="text-lg text-gray-700 mt-4">
            From visa applications to citizenship pathways, we provide expert guidance to help immigrants build their future in America.
          </p>
        </div>
            <div className="w-full md:w-1/2">
          <img
            src="https://www.landerholmimmigration.com/cms/thumbnails/00/540x303/images/blog/shutterstock_2138503409.2405130712550.jpg"
            alt="Immigration Process"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>
      {/* Section Cards */}
      <section className="py-16 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {sections.map(({ id, title, description, image, icon: Icon }, idx) => (
            <motion.div
              key={id}
              className="rounded-2xl overflow-hidden shadow-lg bg-blue-100 text-gray-900"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <img src={image} alt={title} className="w-full h-60 object-cover" />
              <div className="p-6 text-center">
                <Icon className="w-10 h-10 mx-auto text-blue-700 mb-4" />
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="text-gray-700 mt-2">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meet Our Team */}
      <section id="team" className="py-16 px-6 bg-blue-50">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">Meet Our Experts</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map(({ name, role, photo, bio }, i) => (
            <motion.div
              key={name}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <img src={photo} alt={name} className="mx-auto rounded-full w-28 h-28 object-cover shadow-md" />
              <h3 className="text-xl font-semibold mt-4">{name}</h3>
              <p className="text-sm italic mb-2 text-blue-600">{role}</p>
              <p className="text-gray-700 text-sm">{bio}</p>
            </motion.div>
          ))}
        </div>
      </section>





    </div>
  );
};

export default AboutPage;