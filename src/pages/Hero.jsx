import {
  Star,
  Heart,
  Brush,
  Eye,
  Smile,
  CheckCircle,
  Trophy,
  ThumbsUp,
  Users,
  Camera,
  MagnetIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { supabase } from "../supabase";
import { useNavigate, Link } from "react-router-dom";
import { PawPrint, Dog, Moon, Sparkles, Banknote, Rocket, ShieldCheck, Activity, ClipboardList, Landmark,    University ,Globe,BookOpenCheck, Lightbulb } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const sparkleCount = 8;
import { Flag, FileText, Briefcase, GraduationCap } from 'lucide-react';
const categories = [
  {
    name: "Student Visa (F-1)",
    icon: <GraduationCap className="w-10 h-10 text-yellow-400" />,
    description: "For international students pursuing education in the U.S.",
  },
  {
    name: "Work Visa (H-1B)",
    icon: <Briefcase className="w-10 h-10 text-yellow-400" />,
    description: "For skilled workers and professionals hired by U.S. employers.",
  },
  {
    name: "Green Card (EB-2/EB-3)",
    icon: <Landmark className="w-10 h-10 text-yellow-400" />,
    description: "Permanent residency for qualified professionals and workers.",
  },
  {
    name: "Investor Visa (EB-5)",
    icon: <Banknote className="w-10 h-10 text-yellow-400" />,
    description: "For individuals investing in U.S. businesses and creating jobs.",
  },
  {
    name: "Citizenship (Naturalization)",
    icon: <ShieldCheck className="w-10 h-10 text-yellow-400" />,
    description: "The process of becoming a U.S. citizen after permanent residency.",
  },
  {
    name: "Refugee & Asylum",
    icon: <Users className="w-10 h-10 text-yellow-400" />,
    description: "Protection for individuals facing persecution in their home country.",
  },
];


const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
const Hero = () => {
  const sparkles = Array.from({ length: sparkleCount }).map((_, i) => {
    const size = 12 + Math.random() * 14;
    const left = Math.random() * 100;
    const top = Math.random() * 80 + 10;
    const duration = 3 + Math.random() * 3;
    const delay = Math.random() * 4;

    return (
      <motion.div
        key={i}
        className="absolute text-yellow-400"
        style={{ left: `${left}%`, top: `${top}%`, fontSize: size }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          duration: duration,
          delay: delay,
        }}
      >
        <Star />
      </motion.div>
    );
  });
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [showCategories, setShowCategories] = useState(false);
  useEffect(() => {
    if (inView) setShowCategories(true);
    else setShowCategories(false);
  }, [inView]);
  
  useEffect(() => {
    async function fetchArticles() {
      const { data } = await supabase
        .from("greusa_articles")
        .select("*")
        .order("published_date", { ascending: false })
        .limit(6);
      if (data) setArticles(data);
      setLoading(false);
    }
    fetchArticles();
  }, []);

  const handleCategoryClick = (categoryName) => {
    navigate(`/articles?category=${encodeURIComponent(categoryName)}`);
  };
const topics = [
  { image: 'https://satkurslari.az/wp-content/uploads/2024/04/sat-act-ferqleri-1.jpg',title: "SAT and ACT", desc: "Key standardized tests for college admissions in the U.S.", icon: GraduationCap },
  { image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202501/67763ea32f880-macquarie-has-raised-concerns-about-a-new-proposal-suggesting-a-flat-wage-floor-for-h-1b-visa-holde-022205317-16x9.png?size=948:533',title: "H1-B Visa Policy", desc: "Latest guidance on H1-B amendments and immigration policies.", icon: Briefcase },
  { image: 'https://isss.emory.edu/documents/STEM%20OPT%20Extension%20Request%20Checklist.png',title: "STEM OPT Extension", desc: "Understanding the OMB-approved STEM OPT rule for students.", icon: FileText },
  { image: 'https://www.lawyer-monthly.com/wp-content/uploads/2017/04/immigrationUS.jpg',title: "U.S. Immigration Laws", desc: "Overview of visa categories, rights, and employment rules.", icon: GraduationCap },
];
const sections = [
  {
    title: "Study in the USA",
    desc: "Learn about top universities, scholarships, and admission requirements for international students.",
    icon: University,
    image: "https://jfkconsultancy.com/wp-content/uploads/2023/06/study-in-USA.png",
    path: "/articles",
  },
  {
    title: "Visa and Immigration",
    desc: "Understand the various visa types available, including F-1 for students and H-1B for professionals.",
    icon: Briefcase,
    image: "https://www.buhlerthomaslaw.com/wp-content/uploads/2022/08/immigration-visa-status-basics-720x480.jpg",
    path: "/articles",
  },
  {
    title: "Career Opportunities",
    desc: "Explore job markets, networking strategies, and ways to secure employment in the U.S.",
    icon: Lightbulb,
    image: "https://thumbs.dreamstime.com/b/career-opportunities-job-fair-re-hiring-recruitment-ads-human-resources-open-vacancy-job-seekers-come-applying-jobs-165707996.jpg",
    path: "/articles",
  },
];


  return (
    <>
  <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-extrabold mb-6">Welcome to GRE2USA</h1>
          <p className="text-lg leading-relaxed mb-6">
            Your go-to resource for navigating U.S. education policies, visa laws, and standardized testing. Whether you're a student preparing for SAT and ACT, a professional looking at visa opportunities, or someone wanting to understand immigration policies—we’ve got you covered with accurate, up-to-date information.
          </p>
          <p className="text-lg leading-relaxed">
            Stay informed, get expert guidance, and explore the key aspects that define studying and working in the United States.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src="https://i0.wp.com/verbalistseducation.com/wp-content/uploads/2022/01/The-new-US-guidance-for-consular-officers-may-help-international-students-get-visas-Verbalists-Education.jpg" alt="USA Education and Visa Guidance" className="rounded-lg shadow-lg w-full"/>
        </div>
      </div>
    </section>

 <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <div className="flex justify-center items-center space-x-3 mb-6">
          <BookOpenCheck className="w-10 h-10 text-blue-600" />
          <h2 className="text-4xl font-extrabold text-gray-900">Understanding U.S. Laws and Policies</h2>
        </div>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Stay updated on key standardized tests, visa regulations, and immigration policies shaping the future of students and professionals in the U.S.
        </p>
      </div>

      {/* Information Cards with Images */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {topics.map(({ title, desc, icon: Icon, image }, index) => (
          <div key={index} className="p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition bg-gray-50 flex flex-col items-center">
            <img src={image} alt={title} className="rounded-md w-full h-40 object-cover mb-4" />
            <div className="flex items-center space-x-3">
              <Icon className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            </div>
            <p className="text-gray-700 mt-3">{desc}</p>
            <Link to={`/${title.toLowerCase().replace(/\s/g, '-')}`} className="text-blue-600 hover:underline mt-4 inline-block">
              Learn more →
            </Link>
          </div>
        ))}
      </div>
    </section>

 <section className="bg-gray-100 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Заголовок */}
        <div className="flex justify-center items-center space-x-3 mb-6">
          <Globe className="w-10 h-10 text-blue-600" />
          <h2 className="text-4xl font-extrabold text-gray-900">Navigating Education, Visa, and Career in the U.S.</h2>
        </div>
        <p className="text-gray-700 text-lg max-w-4xl mx-auto">
          Whether you're a student aiming for top universities, a professional seeking visa guidance, or an individual exploring career opportunities, our resources help you understand every step of the journey.
        </p>
      </div>

      {/* Карточки с изображениями */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {sections.map(({ title, desc, icon: Icon, image, path }, index) => (
          <div key={index} className="p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition bg-white flex flex-col items-center">
            <img src={image} alt={title} className="rounded-md w-full h-40 object-cover mb-4" />
            <div className="flex items-center space-x-3">
              <Icon className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            </div>
            <p className="text-gray-700 mt-3">{desc}</p>
            <Link to={path} className="text-blue-600 hover:underline mt-4 inline-block">
              Learn more →
            </Link>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <div className="flex items-center space-x-3 mb-8">
          <ClipboardList className="w-10 h-10 text-blue-600" />
          <h2 className="text-4xl font-extrabold text-gray-900">Understanding the F-1 Student Visa</h2>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed">
          The **F-1 visa** is the most common non-immigrant visa for international students in the U.S. To qualify, applicants must enroll in an accredited institution, prove financial stability, and show intent to return home after studies.
        </p>

        {/* Блоки информации */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Eligibility Requirements</h3>
            <ul className="list-disc pl-6 text-gray-700 text-lg space-y-2">
              <li>Enrollment in a **SEVP-certified school**.</li>
              <li>Proof of financial ability to cover education and living costs.</li>
              <li>Intent to return home upon program completion.</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Work Opportunities</h3>
            <p className="text-gray-700 text-lg">
              F-1 students may work **on-campus for up to 20 hours** per week. After graduation, they can apply for **OPT**, allowing **up to 12 months of work**, with **STEM students receiving a 24-month extension**.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <div className="flex items-center space-x-3 mb-8">
          <ClipboardList className="w-10 h-10 text-blue-600" />
          <h2 className="text-4xl font-extrabold text-gray-900">Understanding the F-1 Student Visa</h2>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed">
          The **F-1 visa** is the most common non-immigrant visa for international students in the U.S. To qualify, applicants must enroll in an accredited institution, prove financial stability, and show intent to return home after studies.
        </p>

        {/* Блоки информации */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Eligibility Requirements</h3>
            <ul className="list-disc pl-6 text-gray-700 text-lg space-y-2">
              <li>Enrollment in a **SEVP-certified school**.</li>
              <li>Proof of financial ability to cover education and living costs.</li>
              <li>Intent to return home upon program completion.</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Work Opportunities</h3>
            <p className="text-gray-700 text-lg">
              F-1 students may work **on-campus for up to 20 hours** per week. After graduation, they can apply for **OPT**, allowing **up to 12 months of work**, with **STEM students receiving a 24-month extension**.
            </p>
          </div>
        </div>
      </div>
    </section>

<section
  className=" bg-gradient-to-r from-[#002868] via-[#0050A5] to-[#002868] text-white min-h-[500px] py-20 px-6 lg:px-20 flex flex-col items-center"
  aria-label="U.S. Immigration and Law Section"
>
  <h2 className="text-4xl font-bold mb-10 text-center">
    Understanding U.S. Immigration and Law
  </h2>

  <p className="max-w-4xl text-center text-lg leading-relaxed">
    The United States has one of the most structured immigration and legal systems in the world, 
    balancing opportunities with regulations to ensure economic growth and national security. 
    Whether you are applying for a visa, pursuing citizenship, or seeking educational benefits, 
    understanding key legal frameworks is essential.
  </p>

  <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-lg text-center">
    <div className="bg-gray-50 text-gray-900 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Visa Programs</h3>
      <p>
        The U.S. offers multiple visa programs, including student (F-1), work (H-1B), investor (EB-5), 
        and visitor visas, each with its own requirements and benefits.
      </p>
    </div>

    <div className="bg-gray-50 text-gray-900 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Path to Citizenship</h3>
      <p>
        Becoming a U.S. citizen involves several steps, including obtaining permanent residency (Green Card), 
        fulfilling residency requirements, and passing the naturalization process.
      </p>
    </div>

    <div className="bg-gray-50 text-gray-900 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Legal Protections</h3>
      <p>
        The U.S. Constitution guarantees fundamental rights for all residents, ensuring equality, freedom 
        of speech, and due process under the law.
      </p>
    </div>
  </div>
</section>

      <section ref={ref} className="relative py-20 bg-white">
      {/* --- Статьи --- */}
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <h4 className="text-3xl font-semibold text-[#4B2E2E] mb-8 text-center">
          Featured Articles
        </h4>
        {loading ? (
          <p className="text-center text-[#7E6A52]">Loading articles...</p>
        ) : (
          <div className="grid gap-12 sm:grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto p-6">
          {articles.map(article => (
            <Link
              to="/articles"
              key={article.id}
              className="flex bg-[#0a122a] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 group cursor-pointer"
            >
              {/* Левая часть — наклонённая картинка */}
              <div className="relative w-1/2 overflow-hidden -skew-x-6 group-hover:scale-105 transform transition-transform duration-500">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover skew-x-6"
                />
              </div>
        
              {/* Правая часть — текст */}
              <div className="w-1/2 bg-gradient-to-tr from-[#112240] to-[#1a2e55] p-8 flex flex-col justify-between rounded-r-2xl">
                <h2 className="text-3xl font-extrabold text-[#b6c7f7] mb-4 group-hover:text-[#e0e6ff] transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-300 mb-6 line-clamp-4">
                  {article.summary}
                </p>
                <div className="flex justify-between items-center text-sm text-[#a8b1d6]">
                  <span className="flex items-center gap-2 bg-[#18294d] px-3 py-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#8fa1ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                    {article.reading_time} read
                  </span>
                  <span className="flex items-center gap-2 bg-[#18294d] px-3 py-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#8fa1ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z" />
                    </svg>
                    {new Date(article.published_date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        )}

        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/articles")}
            className="px-9 py-6 bg-gradient-to-tr from-[#112240] to-[#1a2e55] text-white rounded-full font-semibold  transition duration-300 shadow-lg hover:shadow-xl"
          >
            Show more
          </button>
        </div>
      </div>

<AnimatePresence mode="wait">
  {showCategories && (
    <motion.div
      key="categories"
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerVariants}
      className="max-w-6xl mx-auto px-6"
    >
      <h3 className="text-4xl font-serif italic text-[#002868] mb-12 text-center">
        U.S. Immigration Categories
      </h3>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.name}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer bg-gradient-to-tr from-[#113355] to-[#225599] rounded-3xl p-8 shadow-lg text-white flex flex-col items-center text-center transition-shadow hover:shadow-2xl"
            onClick={() => handleCategoryClick(cat.name)}
          >
            <div className="mb-5">{cat.icon}</div>
            <h4 className="text-2xl font-semibold">{cat.name}</h4>
            <p className="mt-3 text-sm">{cat.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )}
</AnimatePresence>


    </section>
    </>
  );
};

export default Hero;
