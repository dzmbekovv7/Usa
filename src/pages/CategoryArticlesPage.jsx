import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../supabase";
import Loading from "../components/Loading";

const CategoryArticlesPage = () => {
  const { typename } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from("greusa_articles")
        .select("*")
        .eq("type", typename)
        .order("published_date", { ascending: false });

      if (error) {
        setError(error.message);
      } else {
        setArticles(data);
      }
      setLoading(false);
    };

    fetchArticles();
  }, [typename]);

  const slugify = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

  return (
    <div className="min-h-screen bg-white py-16 px-6 text-black">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-5xl font-extrabold text-blue-600 text-center mb-14 tracking-wide uppercase">
          {typename.replace(/-/g, " ")}
        </h1>

        {/* Loading, Error, or Articles */}
        {loading ? (
          <Loading />
        ) : error ? (
          <p className="text-center text-red-600 font-semibold">{error}</p>
        ) : articles.length === 0 ? (
          <p className="text-center text-gray-500 italic">
            No articles found in "{typename}"
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/articles/${slugify(article.title)}`}
                className="group relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 border border-blue-300"
              >
                {/* Article Image */}
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover rounded-t-lg transition-opacity duration-500 group-hover:opacity-90"
                />

                {/* Article Content */}
                <div className="p-6 bg-blue-50 rounded-b-lg text-center">
                  <h2 className="text-blue-700 text-2xl font-bold mb-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {article.summary.length > 130
                      ? article.summary.slice(0, 130) + "..."
                      : article.summary}
                  </p>

                  {/* Author & Date */}
                  <div className="flex justify-between items-center text-gray-500 text-xs font-semibold">
                    <span>{new Date(article.published_date).toLocaleDateString()}</span>

                    <div className="flex items-center gap-3">
                      <img
                        src={article.avatar}
                        alt={article.author}
                        className="w-7 h-7 rounded-full border border-blue-400"
                      />
                      <span>{article.author}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryArticlesPage;