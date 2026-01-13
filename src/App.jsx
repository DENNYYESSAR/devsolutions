import React from 'react';
import Navbar from './components/Navbar';
import { ThemeProvider } from './components/ThemeContext';
import Hero from './components/Hero';
import Services from './components/Services';
import Technologies from './components/Technologies';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <Navbar />
        <Hero />
        <Services />
        <Technologies />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
