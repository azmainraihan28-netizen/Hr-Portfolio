import React from 'react';
import { PROFILE_DATA } from '../constants';

export const Achievements: React.FC = () => {
  // Helper to get icon based on type
  const getIcon = (type: string) => {
    // Added specific animation classes for the icon itself
    // Counter-rotates against the container and scales up for a dynamic pop effect
    const iconClass = "w-6 h-6 transition-transform duration-500 ease-out group-hover:scale-125 group-hover:-rotate-12";

    switch (type) {
      case 'trophy':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        );
      case 'star':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        );
      case 'certificate':
      default:
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-[#0b1120] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 text-center">
            Achievements & Certifications
          </h2>
          <div className="w-24 h-1 bg-[#f97316] rounded-full"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROFILE_DATA.achievements.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white dark:bg-[#111827] p-5 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 cursor-default"
            >
              {/* Icon Bubble */}
              <div className="shrink-0 w-12 h-12 bg-[#f97316] rounded-2xl flex items-center justify-center text-white shadow-md transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {getIcon(item.type)}
              </div>

              {/* Content */}
              <div className="flex flex-col">
                <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 leading-snug mb-2 group-hover:text-[#f97316] transition-colors duration-300">
                  {item.title}
                </h4>
                <span className="text-xs font-semibold text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-[#1f2937] px-2 py-1 rounded-md self-start border border-transparent dark:border-gray-700 group-hover:border-[#f97316]/20 transition-colors duration-300">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};