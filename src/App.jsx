import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import Contact from './components/Contact';
import Resume from './components/Resume';
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
      <div className="font-sans bg-gradient-to-br from-blue-100 to-white min-h-screen">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
