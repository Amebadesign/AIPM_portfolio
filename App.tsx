import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AiGallery from './components/AiGallery';
import Methods from './components/Methods';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import AiGalleryDetail from './components/AiGalleryDetail';
import { LanguageProvider } from './contexts/LanguageContext';

const Home = () => (
  <>
    <Hero />
    <Projects />
    <AiGallery />
    <Methods />
    <Footer />
  </>
);

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        {/* Changed selection color from violet to pink/purple mix */}
        <div className="min-h-screen bg-neutral-50 text-neutral-900 selection:bg-fuchsia-100 selection:text-fuchsia-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/ai-gallery/:id" element={<AiGalleryDetail />} />
          </Routes>
        </div>
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;