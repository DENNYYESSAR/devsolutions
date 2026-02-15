import React, { useState, useEffect } from 'react';
import { Code, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Technologies', href: '#technologies', id: 'technologies' },
  { label: 'Why Us', href: '#why-us', id: 'why-us' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['contact', 'faq', 'testimonials', 'why-us', 'technologies', 'services'];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) => {
    const isActive = activeSection === id;
    return `transition font-medium ${isActive
      ? 'text-cyan-600 dark:text-cyan-400'
      : isScrolled
        ? 'text-gray-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400'
        : 'text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400'
      }`;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="w-full mx-auto px-6 md:px-12 lg:px-48">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center space-x-2">
            <img src="/logo.png" alt="DevSolutions Logo" className="w-10 h-10 object-contain" />
            <span className="text-2xl font-bold text-cyan-600">
              DevSolutions
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.id} href={link.href} className={linkClass(link.id)}>
                {link.label}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${isScrolled ? 'text-slate-700 dark:text-slate-200' : 'text-slate-700 dark:text-slate-200'}`}
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <a href="#contact" className="bg-cyan-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg hover:bg-cyan-700 transition-all">
              Get Started
            </a>
          </div>

          <div className="flex items-center gap-4 md:hidden relative z-50">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${isScrolled ? 'text-slate-700 dark:text-slate-200' : 'text-slate-700 dark:text-slate-200'}`}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-xl transition-all duration-300 ${isMenuOpen ? 'bg-cyan-600 text-white shadow-lg' : isScrolled ? 'text-gray-700 dark:text-slate-200' : 'text-slate-700 dark:text-slate-200'}`}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white dark:bg-slate-900 shadow-2xl rounded-b-[2.5rem] overflow-hidden border-b border-slate-100 dark:border-slate-800"
            >
              <div className="flex flex-col space-y-3 px-6 md:px-12 lg:px-48 pb-12 pt-24 text-center">
                {['Home', 'Services', 'Technologies', 'Why Us'].map((item, idx) => (
                  <motion.a
                    key={item}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * idx }}
                    href={item === 'Home' ? '#' : `#${item.toLowerCase().replace(' ', '-')}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-3xl font-extrabold text-slate-900 dark:text-white hover:text-cyan-600 transition-all py-2"
                  >
                    {item}
                  </motion.a>
                ))}

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="pt-6"
                >
                  <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full bg-cyan-600 text-white px-6 py-3.5 rounded-2xl font-bold text-lg shadow-xl shadow-cyan-500/30 hover:bg-cyan-700 transition-all"
                  >
                    Get Started
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
