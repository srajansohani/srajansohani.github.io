import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import './index.css';

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
