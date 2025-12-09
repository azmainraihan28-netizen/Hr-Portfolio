import React from 'react';
import { PROFILE_DATA } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0b1120] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            About Me
          </h2>
          <div className="w-24 h-1 bg-[#f97316] rounded-full"></div>
        </div>

        {/* Description Box */}
        <div className="bg-gray-50 dark:bg-[#111827] p-8 md:p-10 rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl mb-12 transition-colors duration-300">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center md:text-left">
            {PROFILE_DATA.bio}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Experience */}
          <div className="bg-gray-50 dark:bg-[#111827] p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg flex flex-col items-center text-center hover:bg-gray-100 dark:hover:bg-[#1f2937] transition-all duration-300 group">
            <div className="w-16 h-16 rounded-full bg-[#f97316] flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Experience</h3>
            <p className="text-gray-600 dark:text-gray-300">3+ years in HR & Administration</p>
          </div>

          {/* Card 2: Team Leadership */}
          <div className="bg-gray-50 dark:bg-[#111827] p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg flex flex-col items-center text-center hover:bg-gray-100 dark:hover:bg-[#1f2937] transition-all duration-300 group">
            <div className="w-16 h-16 rounded-full bg-[#f97316] flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Team Leadership</h3>
            <p className="text-gray-600 dark:text-gray-300">Managing 25 employees, serving 2200+ staff</p>
          </div>

          {/* Card 3: Strategic HR */}
          <div className="bg-gray-50 dark:bg-[#111827] p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg flex flex-col items-center text-center hover:bg-gray-100 dark:hover:bg-[#1f2937] transition-all duration-300 group">
            <div className="w-16 h-16 rounded-full bg-[#f97316] flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Strategic HR</h3>
            <p className="text-gray-600 dark:text-gray-300">Process optimization & MIS reporting</p>
          </div>

        </div>
      </div>
    </section>
  );
};