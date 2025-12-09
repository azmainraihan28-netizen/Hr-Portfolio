import React from 'react';
import { PROFILE_DATA } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gray-50 dark:bg-[#0b1120] overflow-hidden pt-20 transition-colors duration-300">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-[#0b1120] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <span className="text-xl text-gray-500 dark:text-gray-300 font-medium block">Hello,</span>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-gray-900 dark:text-white">I'm </span>
              <span className="text-[#f97316]">
                 {PROFILE_DATA.name}
              </span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-200">
              {PROFILE_DATA.title}
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {PROFILE_DATA.heroTagline}
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
              <a
                href="#about"
                className="px-8 py-4 bg-[#f97316] hover:bg-orange-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-orange-500/25 flex items-center gap-2"
              >
                Discover More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <div className="flex items-center gap-4">
                <span className="text-gray-500 dark:text-gray-300 text-sm">Follow me:</span>
                <div className="flex gap-3">
                  <a href={PROFILE_DATA.socials.linkedin} className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 hover:bg-[#f97316] dark:hover:bg-[#f97316] flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-white dark:hover:text-white transition-all border border-gray-200 dark:border-gray-700 shadow-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href={PROFILE_DATA.socials.github} className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 hover:bg-[#f97316] dark:hover:bg-[#f97316] flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-white dark:hover:text-white transition-all border border-gray-200 dark:border-gray-700 shadow-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image & Stats */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">
              
              {/* Main Image Circle with Orange Border */}
              <div className="absolute inset-4 rounded-full border-4 border-[#f97316] z-10"></div>
              <div className="absolute inset-0 rounded-full overflow-hidden z-0">
                <img 
                   src={PROFILE_DATA.profileImage}
                   alt={PROFILE_DATA.name} 
                   className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Stat Card: 5+ Years */}
              <div className="absolute top-10 -left-4 sm:-left-12 z-20 bg-white/90 dark:bg-[#1e293b]/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 p-3 sm:p-4 rounded-xl flex items-center gap-3 shadow-xl animate-bounce-slow">
                <div className="text-[#f97316]">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-900 dark:text-white font-bold text-lg sm:text-xl leading-none">5+</h3>
                  <p className="text-gray-500 dark:text-gray-300 text-xs">Years Experience</p>
                </div>
              </div>

              {/* Floating Stat Card: 25 Team Members */}
              <div className="absolute top-0 right-0 sm:-right-8 z-20 bg-white/90 dark:bg-[#1e293b]/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 p-3 sm:p-4 rounded-xl flex items-center gap-3 shadow-xl animate-pulse-slow">
                 <div className="text-[#f97316]">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                 </div>
                 <div>
                    <h3 className="text-gray-900 dark:text-white font-bold text-lg sm:text-xl leading-none">25</h3>
                    <p className="text-gray-500 dark:text-gray-300 text-xs">Team Members</p>
                 </div>
              </div>

              {/* Floating Stat Card: 2200+ Serving Regularly */}
              <div className="absolute bottom-4 right-0 sm:-right-4 z-20 bg-white/90 dark:bg-[#1e293b]/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 p-3 sm:p-4 rounded-xl flex items-center gap-3 shadow-xl animate-bounce-slow" style={{ animationDelay: '1s' }}>
                <div className="text-[#f97316]">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <div>
                   <h3 className="text-gray-900 dark:text-white font-bold text-lg sm:text-xl leading-none">2200+</h3>
                   <p className="text-gray-500 dark:text-gray-300 text-xs">Serving Regularly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};