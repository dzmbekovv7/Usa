import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import FAQ from './pages/FAQ';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Introduction from './pages/Introduction';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import AshleyArticlesPage from './pages/Articles';
import AshleyArticleDetailPage from './pages/ArticlesDetailPage';
import AnimatedPage from './components/FadeTransition';
import CategoryArticlesPage from './pages/CategoryArticlesPage';
import ReviewsPage from './pages/Reviews';

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('');

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
          <Route path="/introduction" element={<AnimatedPage><Introduction /></AnimatedPage>} />
          <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
          <Route path="/reviews" element={<AnimatedPage><ReviewsPage /></AnimatedPage>} />
          <Route path='/FAQ' element={<AnimatedPage><FAQ/></AnimatedPage>}></Route>
          <Route path="/articles" element={<AnimatedPage><AshleyArticlesPage /></AnimatedPage>} />
          <Route path="/articles/:slug" element={<AnimatedPage><AshleyArticleDetailPage /></AnimatedPage>} />
          <Route path="/type/:typename" element={<AnimatedPage><CategoryArticlesPage /></AnimatedPage>} />
          <Route path="/privacy" element={<AnimatedPage><Privacy /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
