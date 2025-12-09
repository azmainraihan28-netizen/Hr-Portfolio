import React from 'react';
import { PROFILE_DATA } from '../constants';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-[#0b1120] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Education
          </h2>
          <div className="w-24 h-1 bg-[#f97316] rounded-full"></div>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROFILE_DATA.education.map((edu) => (
            <div 
              key={edu.id} 
              className="bg-white dark:bg-[#111827] p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:border-[#f97316]/50 transition-all duration-300 flex flex-col md:flex-row gap-6 items-start md:items-center"
            >
              {/* Icon Box */}
              <div className="shrink-0">
                <div className="w-14 h-14 bg-[#f97316] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-500/20 transform -rotate-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 w-full">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {edu.degree}
                </h3>
                <p className="text-[#f97316] font-medium text-sm mb-2">
                  {edu.field}
                </p>
                <div className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  <p className="font-semibold">{edu.university}</p>
                  <p>{edu.location}</p>
                </div>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-[#1f2937] text-gray-700 dark:text-gray-200 text-xs font-bold rounded-full border border-gray-200 dark:border-gray-600">
                    {edu.year}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-[#1f2937] text-[#f97316] text-xs font-bold rounded-full border border-[#f97316]/30">
                    CGPA: {edu.cgpa}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};