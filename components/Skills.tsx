import React from 'react';
import { PROFILE_DATA } from '../constants';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-[#0b1120] relative overflow-hidden transition-colors duration-300">
      {/* CSS for Scrolling Animation */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
        .pause-hover:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-[#f97316] rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl text-center">
            A comprehensive overview of my professional competencies and tools.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        {PROFILE_DATA.skills.map((skillGroup, groupIndex) => (
          <div key={groupIndex} className="relative">
            {/* Category Title Overlay */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
               <h3 className="text-xl font-semibold text-[#f97316] opacity-90">
                 {skillGroup.category}
               </h3>
            </div>

            {/* Scrolling Row */}
            <div className="flex overflow-hidden relative w-full">
              {/* Gradient Masks for fade effect at edges - tailored for light/dark */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-[#0b1120] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-[#0b1120] to-transparent z-10 pointer-events-none"></div>

              <div 
                className={`flex gap-4 px-4 ${
                  groupIndex % 2 === 0 ? 'animate-scroll-left' : 'animate-scroll-right'
                } pause-hover`}
                style={{ width: 'max-content' }}
              >
                {/* Duplicate the items multiple times to ensure seamless scrolling */}
                {[...Array(4)].map((_, i) => (
                  <React.Fragment key={i}>
                    {skillGroup.items.map((skill, idx) => (
                      <div 
                        key={`${i}-${idx}`} 
                        className="flex items-center justify-center px-6 py-3 bg-gray-50 dark:bg-[#111827] border border-gray-200 dark:border-gray-700 rounded-lg whitespace-nowrap hover:border-[#f97316] dark:hover:border-[#f97316] hover:bg-white dark:hover:bg-[#1f2937] transition-all duration-300 shadow-md group cursor-default"
                      >
                         <span className="text-gray-700 dark:text-gray-200 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                           {skill}
                         </span>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};