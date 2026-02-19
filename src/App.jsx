import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import { ThemeProvider } from './components/ThemeContext';
import Hero from './components/Hero';
import Services from './components/Services';
import Technologies from './components/Technologies';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ServiceDetail from './components/ServiceDetail';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function PageTransition({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      // Wait for the page to fully render before scrolling
      const tryScroll = (attempts = 0) => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          // Clear the state so refreshing doesn't re-scroll
          window.history.replaceState({}, '');
        } else if (attempts < 20) {
          setTimeout(() => tryScroll(attempts + 1), 100);
        }
      };
      // Small initial delay for React to mount
      setTimeout(() => tryScroll(), 50);
    }
  }, [location.state]);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Technologies />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Contact />
      <BackToTop />
      <Footer />
    </>
  );
}

function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
            <Route path="/services/:slug" element={<PageTransition><ServiceDetail /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
