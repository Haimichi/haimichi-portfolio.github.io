import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from '../my-portfolio/src/components/Navbar';
import Footer from '../my-portfolio/src/components/Footer';
import Home from '../my-portfolio/src/pages/Home';
import Projects from '../my-portfolio/src/pages/Projects';
import Contact from '../my-portfolio/src/pages/Contact';
import Skills from '../my-portfolio/src/pages/Skills';
import Experience from '../my-portfolio/src/pages/Experience';
import { useTranslation } from 'react-i18next';
import './i18n';

function App() {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App; 