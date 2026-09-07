import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';
import Loader from './components/Loader';

// Lazy load pages for code splitting and high performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));
const Journey = lazy(() => import('./pages/Journey'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  return (
    <Router>
      {/* Initial preloader */}
      {initialLoading && <Loader onFinished={() => setInitialLoading(false)} />}

      {/* Subtle photographic noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Custom desktop cursor */}
      <CustomCursor />

      {/* Primary layout shell */}
      <div className="min-h-screen flex flex-col bg-[#050505] text-white bg-grid-pattern relative">
        <Navbar />

        <main className="flex-1 w-full" id="main-content">
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-accent-violet border-t-transparent animate-spin" />
              </div>
            }
          >
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectDetails />} />
                <Route path="/journey" element={<Journey />} />
                {/* Redirect legacy /experience to /journey */}
                <Route path="/experience" element={<Navigate to="/journey" replace />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PageTransition>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
