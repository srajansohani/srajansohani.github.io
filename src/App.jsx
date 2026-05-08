import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './index.css';

// Lazy loaded components
const BlogPost = lazy(() => import('./components/BlogPost'));
const ProjectDetail = lazy(() => import('./components/ProjectDetail'));
const Resume = lazy(() => import('./components/Resume'));

import BlogList from './components/BlogList';
import Contact from './components/Contact';

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">
    <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin"></div>
  </div>
);

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <BlogList />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="relative min-h-screen text-[#0f172a]  overflow-hidden">
        <div className="fixed inset-0 z-[-2] pointer-events-none noise-bg"></div>
        <Navbar />
        <main className="pt-24 relative z-0">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/project/:slug" element={<ProjectDetail />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
