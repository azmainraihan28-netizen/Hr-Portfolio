import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { ChatAssistant } from './components/ChatAssistant';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0b1120] text-gray-900 dark:text-gray-100 selection:bg-[#f97316] selection:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/90 dark:bg-[#0b1120]/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f97316] flex items-center justify-center text-white font-bold text-sm">
                AR
              </div>
              <span className="font-bold text-xl text-gray-900 dark:text-white">
                Azmain Raihan
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-[#f97316] dark:hover:text-[#f97316] text-sm font-medium transition-colors">About</a>
              <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-[#f97316] dark:hover:text-[#f97316] text-sm font-medium transition-colors">Experience</a>
              <a href="#education" className="text-gray-600 dark:text-gray-300 hover:text-[#f97316] dark:hover:text-[#f97316] text-sm font-medium transition-colors">Education</a>
              <a href="#achievements" className="text-gray-600 dark:text-gray-300 hover:text-[#f97316] dark:hover:text-[#f97316] text-sm font-medium transition-colors">Achievements</a>
              <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-[#f97316] dark:hover:text-[#f97316] text-sm font-medium transition-colors">Skills</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-[#f97316] dark:hover:text-[#f97316] text-sm font-medium transition-colors">Contact</a>
              
              {/* Theme Toggle Button */}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-[#f97316] dark:hover:text-[#f97316] transition-colors"
                aria-label="Toggle Theme"
              >
                {isDark ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              <button className="px-6 py-2.5 bg-[#f97316] hover:bg-orange-600 text-white text-sm font-semibold rounded-full transition-all shadow-lg shadow-orange-500/20">
                Resume
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
               <button 
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              >
                {isDark ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
              <button className="text-gray-600 dark:text-gray-300 hover:text-[#f97316] dark:hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Achievements />
        <Skills />
        <Contact />
      </main>

      <footer className="bg-white dark:bg-[#080c17] py-8 text-center text-gray-500 dark:text-gray-500 text-sm border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <p>&copy; {new Date().getFullYear()} Azmain Raihan. All rights reserved.</p>
        <p className="mt-2">HR Expert and Administration Officer.</p>
      </footer>

      <ChatAssistant />
    </div>
  );
};

export default App;