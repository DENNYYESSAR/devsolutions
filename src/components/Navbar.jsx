import React, { useState, useEffect } from 'react';
import { Code, Menu, X, Sun, Moon, Github, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              DevSolutions
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className={`${isScrolled ? 'text-gray-700 dark:text-slate-200' : 'text-slate-700 dark:text-slate-200'} hover:text-blue-600 dark:hover:text-blue-400 transition`}>Services</a>
            <a href="#technologies" className={`${isScrolled ? 'text-gray-700 dark:text-slate-200' : 'text-slate-700 dark:text-slate-200'} hover:text-blue-600 dark:hover:text-blue-400 transition`}>Technologies</a>
            <a href="#about" className={`${isScrolled ? 'text-gray-700 dark:text-slate-200' : 'text-slate-700 dark:text-slate-200'} hover:text-blue-600 dark:hover:text-blue-400 transition`}>About</a>

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${isScrolled ? 'text-slate-700 dark:text-slate-200' : 'text-slate-700 dark:text-slate-200'}`}
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <a href="#contact" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition">
              Get Started
            </a>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${isScrolled ? 'text-slate-700 dark:text-slate-200' : 'text-slate-700 dark:text-slate-200'}`}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${isScrolled ? 'text-gray-700 dark:text-slate-200' : 'text-slate-700 dark:text-slate-200'}`}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed top-20 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b dark:border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-8">
              {['Services', 'Technologies', 'About'].map((item) => (
                <motion.a
                  key={item}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold text-slate-900 dark:text-slate-200 hover:text-blue-600 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-center shadow-lg shadow-blue-500/20"
              >
                Get Started
              </motion.a>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-6 border-t dark:border-slate-800 flex justify-center space-x-6"
              >
                <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Github className="w-6 h-6" /></a>
                <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin className="w-6 h-6" /></a>
                <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Twitter className="w-6 h-6" /></a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
