import React, { useEffect, useState, useMemo } from "react";
import { supabase } from "../supabase";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const DogsTrainingPage = () => {
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("newest");

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from('dogstraining_articles')
        .select("*")
        .order("published_date", { ascending: false });

      if (error) setError(error.message);
      else setArticles(data);

      setLoading(false);
    };

    fetchArticles();
  }, []);

  const handleShowMore = () => setVisibleCount((prev) => prev + 9);

  const filteredArticles = articles
    .filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      return filter === "newest"
        ? new Date(b.published_date) - new Date(a.published_date)
        : new Date(a.published_date) - new Date(b.published_date);
    });
  const slugify = text =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "")

  // Updated card styles with dynamic sizing
  const cardStyles = (article, size) => (
    <Link
      key={article.id}
        to={`/articles/${slugify(article.title)}`}
      className={`rounded-lg shadow-md overflow-hidden transition hover:scale-[1.03] ${
        size === "large" ? "md:col-span-2 lg:col-span-3" : "md:col-span-1"
      }`}
      style={{
        background: "#F8FBFF",
        color: "#222222",
        padding: "20px",
        boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
        border: "1px solid #E0E7FF",
      }}
    >
      <img src={article.image} alt={article.title} className="w-full h-64 object-cover rounded-md" />
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-3">{article.title}</h2>
        <p className="text-gray-700 text-sm">{article.summary}</p>
      </div>
    </Link>
  );

  if (loading) return <Loading />;
  if (error) return <div className="text-red-600 font-bold text-center mt-10">{error}</div>;

  return (
    <div className="min-h-screen px-6 py-10 bg-white text-black">
      {/* Header */}
      <header className="text-center max-w-4xl mx-auto mb-8">
        <h1 className="text-5xl font-extrabold text-blue-600">U.S. Insights & Information</h1>
        <p className="text-gray-700 mt-4">
          Discover expert knowledge on immigration, work, education, and life in the United States.
        </p>
      </header>

      {/* Search & Filter */}
      <div className="flex justify-center gap-4 mb-6">
        <input
          type="search"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-blue-400 rounded-lg px-4 py-2 w-full max-w-md focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => setFilter(filter === "newest" ? "oldest" : "newest")}
          className="border border-blue-500 px-4 py-2 rounded-lg text-blue-500 transition hover:bg-blue-500 hover:text-white"
        >
          {filter === "newest" ? "Newest First" : "Oldest First"}
        </button>
      </div>

      {/* Articles Grid with Dynamic Sizing */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredArticles.slice(0, visibleCount).map((article, idx) =>
          cardStyles(article, idx % 4 === 0 ? "large" : "small")
        )}
      </section>

      {/* Show More */}
      {visibleCount < filteredArticles.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleShowMore}
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition hover:bg-blue-500"
          >
            Show More Articles
          </button>
        </div>
      )}
    </div>
  );
};

export default DogsTrainingPage;