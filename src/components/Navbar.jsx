import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Cloud, Shield, LineChart, Cog, Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const serviceDropdownItems = [
  { label: 'Web Development', slug: 'web-development', icon: <Code className="w-4 h-4" /> },
  { label: 'Database Solutions', slug: 'database-solutions', icon: <Database className="w-4 h-4" /> },
  { label: 'Cloud & DevOps', slug: 'cloud-devops', icon: <Cloud className="w-4 h-4" /> },
  { label: 'Cybersecurity', slug: 'cybersecurity', icon: <Shield className="w-4 h-4" /> },
  { label: 'AI/ML Solutions', slug: 'ai-ml-solutions', icon: <LineChart className="w-4 h-4" /> },
  { label: 'API Development', slug: 'api-development', icon: <Cog className="w-4 h-4" /> },
];

const navLinks = [
  { label: 'Services', href: '#services', id: 'services', hasDropdown: true },
  { label: 'Technologies', href: '#technologies', id: 'technologies' },
  { label: 'Why Us', href: '#why-us', id: 'why-us' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [servicesOpen, setServicesOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const dropdownRef = useRef(null);
  const dropdownTimeout = useRef(null);

  const getHref = (hash) => isHome ? hash : `/${hash}`;

  const handleNavClick = (e, hash) => {
    if (!isHome) {
      e.preventDefault();
      const sectionId = hash.replace('#', '');
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setServicesOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setServicesOpen(false), 200);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['contact', 'faq', 'testimonials', 'why-us', 'technologies', 'services'];
    const visibleSections = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        if (visibleSections.size > 0) {
          const sorted = sectionIds.filter((id) => visibleSections.has(id));
          setActiveSection(sorted[sorted.length - 1] || '');
        } else {
          setActiveSection('');
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
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center space-x-2">
            <img src="/logo.png" alt="DevSolutions Logo" className="w-10 h-10 object-contain" />
            <span className="font-display text-2xl font-bold text-cyan-600">
              Dev-Solutions
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div
                  key={link.id}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <a
                    href={getHref(link.href)}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`font-display ${linkClass(link.id)} inline-flex items-center gap-1`}
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </a>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-700 overflow-hidden z-50"
                      >
                        <div className="p-2">
                          {serviceDropdownItems.map((item, idx) => (
                            <Link
                              key={item.slug}
                              to={`/services/${item.slug}`}
                              onClick={() => setServicesOpen(false)}
                              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-150 group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/40 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                {item.icon}
                              </div>
                              <span className="font-display">{item.label}</span>
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-slate-100 dark:border-slate-700 p-3">
                          <a
                            href={getHref('#services')}
                            onClick={(e) => { setServicesOpen(false); handleNavClick(e, '#services'); }}
                            className="block text-center text-xs font-bold font-display text-cyan-600 dark:text-cyan-400 hover:underline"
                          >
                            View All Services
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a key={link.id} href={getHref(link.href)} onClick={(e) => handleNavClick(e, link.href)} className={`font-display ${linkClass(link.id)}`}>
                  {link.label}
                </a>
              )
            ))}

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${isScrolled ? 'text-slate-700 dark:text-slate-200' : 'text-slate-700 dark:text-slate-200'}`}
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <a href={getHref('#contact')} onClick={(e) => handleNavClick(e, '#contact')} className="font-display bg-cyan-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg hover:bg-cyan-700 transition-all">
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
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0 }}
                  href={isHome ? '#' : '/'}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-extrabold font-display text-slate-900 dark:text-white hover:text-cyan-600 transition-all py-2"
                >
                  Home
                </motion.a>

                {/* Services with expandable sub-items */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="text-3xl font-extrabold font-display text-slate-900 dark:text-white hover:text-cyan-600 transition-all py-2 w-full flex items-center justify-center gap-2"
                  >
                    Services
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-1 py-2">
                          {serviceDropdownItems.map((item) => (
                            <Link
                              key={item.slug}
                              to={`/services/${item.slug}`}
                              onClick={() => { setIsMenuOpen(false); setServicesOpen(false); }}
                              className="text-sm font-medium font-display text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors py-1.5 text-center"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {['Technologies', 'Why Us'].map((item, idx) => (
                  <motion.a
                    key={item}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * (idx + 2) }}
                    href={getHref(`#${item.toLowerCase().replace(' ', '-')}`)}
                    onClick={(e) => { setIsMenuOpen(false); handleNavClick(e, `#${item.toLowerCase().replace(' ', '-')}`); }}
                    className="text-3xl font-extrabold font-display text-slate-900 dark:text-white hover:text-cyan-600 transition-all py-2"
                  >
                    {item}
                  </motion.a>
                ))}

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6"
                >
                  <a
                    href={getHref('#contact')}
                    onClick={(e) => { setIsMenuOpen(false); handleNavClick(e, '#contact'); }}
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
