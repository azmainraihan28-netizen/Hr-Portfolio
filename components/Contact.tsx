import React from 'react';
import { PROFILE_DATA } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-[#0b1120] transition-colors duration-300 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Contact Me
        </h2>
        
        <div className="flex flex-col items-center gap-6">
          {/* Email */}
          <a 
            href={`mailto:${PROFILE_DATA.socials.email}`}
            className="flex items-center gap-3 text-lg text-gray-600 dark:text-gray-200 hover:text-[#f97316] dark:hover:text-[#f97316] transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[#f97316] group-hover:bg-[#f97316] group-hover:text-white transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span>{PROFILE_DATA.socials.email}</span>
          </a>

          {/* Phone */}
          <a 
            href={`tel:${PROFILE_DATA.socials.phone}`}
            className="flex items-center gap-3 text-lg text-gray-600 dark:text-gray-200 hover:text-[#f97316] dark:hover:text-[#f97316] transition-colors group"
          >
             <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[#f97316] group-hover:bg-[#f97316] group-hover:text-white transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span>{PROFILE_DATA.socials.phone}</span>
          </a>

           {/* LinkedIn */}
           <a 
            href={PROFILE_DATA.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg text-gray-600 dark:text-gray-200 hover:text-[#f97316] dark:hover:text-[#f97316] transition-colors group"
          >
             <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[#f97316] group-hover:bg-[#f97316] group-hover:text-white transition-all">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
               </svg>
             </div>
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
};