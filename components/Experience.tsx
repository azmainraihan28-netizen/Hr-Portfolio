import React from 'react';
import { PROFILE_DATA } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-[#080c17] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-[#f97316] rounded-full"></div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {PROFILE_DATA.experience.map((exp) => (
            <div 
              key={exp.id} 
              className="bg-white dark:bg-[#111827] p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:border-[#f97316]/30 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-[#f97316] rounded-lg flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col items-start mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-[#f97316] font-semibold text-lg mb-3">
                      {exp.company}
                    </p>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-[#1f2937] text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-full border border-gray-200 dark:border-gray-600">
                      {exp.duration}
                    </span>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#f97316] mr-3 mt-1.5 text-xs">●</span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};