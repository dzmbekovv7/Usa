import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';
import Loading from '../components/Loading';
import './article.css';

const AshleyArticleDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recentArticles, setRecentArticles] = useState([]);
  const [lastUpdatedArticles, setLastUpdatedArticles] = useState([]);
  const [prevArticle, setPrevArticle] = useState(null);
  const [nextArticle, setNextArticle] = useState(null);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const slugify = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  useEffect(() => {
    const fetchArticle = async () => {
      const { data, error } = await supabase.from('greusa_articles').select('*');
   data.forEach((article, index) => {
        console.log(`Article ${index + 1} type:`, article.type);
      });
      if (!error && data) {
        const found = data.find((a) => slugify(a.title) === slug);
        if (found) {
          setArticle(found);

          const sortedByDate = data.sort(
            (a, b) => new Date(b.published_date) - new Date(a.published_date)
          );
          setRecentArticles(sortedByDate.slice(0, 5));

          const sortedByUpdate = data
            .slice()
            .sort(
              (a, b) =>
                new Date(b.updated_at || b.published_date) -
                new Date(a.updated_at || a.published_date)
            );
          setLastUpdatedArticles(sortedByUpdate.slice(0, 5));

          const sorted = data.sort(
            (a, b) => new Date(a.published_date) - new Date(b.published_date)
          );
          const currentIndex = sorted.findIndex((a) => slugify(a.title) === slug);

          setPrevArticle(sorted[currentIndex - 1] || null);
          setNextArticle(sorted[currentIndex + 1] || null);
        }
      }

      setLoading(false);
    };

    fetchArticle();
  }, [slug]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || !article) return;

    const newComment = {
      name,
      message,
      created_at: new Date().toISOString(),
    };

    const updatedComments = article.comments
      ? [...article.comments, newComment]
      : [newComment];

    const { error } = await supabase
      .from('greusa_articles')
      .update({ comments: updatedComments })
      .eq('id', article.id);

    if (!error) {
      setArticle((prev) => ({ ...prev, comments: updatedComments }));
      setName('');
      setMessage('');
    }
  };

  const keywords = [
    'Tools and tips',
    'Finance and life in the USA',
    'Immigration visas and law',
    'Studying and testing',
  ];

  if (loading) return <Loading />;
  if (!article) return <p>Article not found</p>;

  function addClassToLinks(html) {
    if (!html) return "";
  
    // Используем регулярку для добавления класса к каждому <a ...>
    return html.replace(/<a /g, '<a class="custom-link" ');
  }
  
  const customMarkdown = (content) => {
    if (!content) return "";
  
    let html = content
      .replace(/^# (.*$)/gm, '<h1>$1</h1>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong style="font-size: 30px; font-weight: 700;">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(
        /\[(.*?)\]\((.*?)\)/g,
        `<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>`
      )
      .replace(/<img>(.*?)<\/img>/g, '<img src="$1" style="width: 70%; height: 100%" loading="lazy" class="article-image-content" />')
      .split('\n')
      .map(line => line.trim() === '' ? '<br/>' : `<p>${line}</p>`)
      .join('');
  
    // Добавляем класс ко всем ссылкам
    return addClassToLinks(html);
  };

console.log(article.content)

    return (
    <div className="min-h-screen bg-white text-black px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-lg mx-auto">
        {/* Article Content */}
        <main className="md:col-span-2 space-y-10">
          {/* Title & Image */}
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={article.image}
              alt={article.title}
              className="w-full md:w-1/2 rounded-lg object-cover border border-blue-500 shadow-md"
            />
            <div className="flex flex-col justify-between">
              <h1 className="text-4xl font-extrabold text-blue-600">{article.title}</h1>
              <div className="text-sm text-gray-600 mt-4 space-y-1">
                <p>🕒 {article.reading_time} read</p>
                <p>📅 {new Date(article.published_date).toLocaleDateString()}</p>
                <p>✍️ {article.author}</p>
              </div>
            </div>
          </div>

         {/* Статья как колонки */}
          {/* <article className="columns-1 md:columns-2 gap-8 space-y-6 leading-relaxed text-lg">
            <div
              dangerouslySetInnerHTML={{ __html: customMarkdown(article.summary) }}
            />
                 <div
              dangerouslySetInnerHTML={{ __html: customMarkdown(article.contentDetails) }}
            />
          </article> */}

                    <article
            className="columns-1 md:columns-2 gap-8 space-y-4 text-gray-700 leading-relaxed text-lg"
            dangerouslySetInnerHTML={{ __html: customMarkdown(article.content) }}
          />
          {/* Navigation */}
  <div className="flex justify-between mt-12 mb-12">
  {prevArticle ? (
    <button
      onClick={() => navigate(`/articles/${slugify(prevArticle.title)}`)}
      className="flex items-center gap-3 px-5 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition max-w-[45%] shadow-lg"
    >
      <span className="text-xl font-bold">←</span>
      <div className="text-left truncate">
        <div className="font-semibold">{prevArticle.title.length > 30 ? prevArticle.title.slice(0, 30) + '...' : prevArticle.title}</div>
        <div className="text-xs opacity-80">{prevArticle.author}</div>
        <div className="text-xs opacity-70">{new Date(prevArticle.published_date).toLocaleDateString()}</div>
        <div className="text-xs italic text-gray-200 truncate max-w-full mt-1">
          {prevArticle.content ? prevArticle.content.slice(0, 60).replace(/\n/g, ' ') + '...' : ''}
        </div>
      </div>
    </button>
  ) : <div />}

  {nextArticle ? (
    <button
      onClick={() => navigate(`/articles/${slugify(nextArticle.title)}`)}
      className="flex items-center gap-3 px-5 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition max-w-[45%] shadow-lg"
    >
      <div className="text-right truncate">
        <div className="font-semibold">{nextArticle.title.length > 30 ? nextArticle.title.slice(0, 30) + '...' : nextArticle.title}</div>
        <div className="text-xs opacity-80">{nextArticle.author}</div>
        <div className="text-xs opacity-70">{new Date(nextArticle.published_date).toLocaleDateString()}</div>
        <div className="text-xs italic text-gray-200 truncate max-w-full mt-1">
          {nextArticle.content ? nextArticle.content.slice(0, 60).replace(/\n/g, ' ') + '...' : ''}
        </div>
      </div>
      <span className="text-xl font-bold">→</span>
    </button>
  ) : <div />}
</div>
        </main>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="bg-gray-100 rounded-lg p-4 shadow-md">
            <h2 className="text-blue-600 font-semibold text-lg mb-4">📌 Recent Articles</h2>
            <ul className="space-y-3">
              {recentArticles.map((item) => (
                <li key={item.id}>
                  <Link to={`/articles/${slugify(item.title)}`}className="block hover:text-blue-500">
                    <h4 className="font-medium">{item.title}</h4>
                    <time className="text-xs text-blue-600">
                      {new Date(item.published_date).toLocaleDateString()}
                    </time>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 shadow-md">
            <h2 className="text-blue-600 font-semibold text-lg mb-4">🔁 Recently Updated</h2>
            <ul className="space-y-3">
              {lastUpdatedArticles.map((item) => (
                <li key={item.id}>
                  <Link   to={`/articles/${slugify(item.title)}`} className="block hover:text-blue-500">
                    <h4 className="font-medium">{item.title}</h4>
                    <time className="text-xs text-blue-600">
                      {new Date(item.updated_at || item.published_date).toLocaleDateString()}
                    </time>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<section className="bg-white rounded-3xl p-6 shadow-lg border border-blue-500">
  <h3 className="text-xl font-bold text-blue-600 mb-4">Keywords</h3>
  <div className="flex flex-wrap gap-3">
    {keywords.map((word) => (
      <Link
        key={word}
        to={`/type/${encodeURIComponent(word)}`}
        className="bg-blue-600 text-white rounded-full px-4 py-1 text-sm font-semibold hover:bg-blue-500 transition-colors duration-300"
      >
        {word}
      </Link>
    ))}
  </div>
</section>
        </aside>
      </div>
    </div>

  
  );
};

export default AshleyArticleDetailPage;
