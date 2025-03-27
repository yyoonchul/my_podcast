import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import landingBanner from '../assets/landing_page_banner.png';

const LandingPage: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-indigo-600 pb-2 md:pb-0">My Podcast</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-4 md:py-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 md:gap-12 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left space-y-3 md:space-y-6">
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Turn Your Commute into<br />
                <span className="text-indigo-600">a Power Hour</span>
              </h1>

              {/* Mobile-only Image */}
              <div className="md:hidden relative w-[90%] mx-auto">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={landingBanner}
                    alt="Podcast listening experience"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
                Stay ahead with personalized news & career insights,
                delivered as daily podcasts designed for your commute.
              </p>
              <button
                onClick={() => navigate('/podcast-selection')}
                className="inline-flex items-center px-4 md:px-8 py-2 md:py-4 bg-indigo-600 text-white rounded-full text-sm md:text-lg font-medium hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started
                <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Desktop-only Image */}
            <div className="hidden md:block relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src={landingBanner}
                  alt="Podcast listening experience"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-8 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="p-3 md:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-2 md:mb-4">
                <svg className="w-4 h-4 md:w-6 md:h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2">Real-time News</h3>
              <p className="text-xs md:text-base text-gray-600">Get the latest news updates delivered in real-time.</p>
            </div>
            <div className="p-3 md:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-2 md:mb-4">
                <svg className="w-4 h-4 md:w-6 md:h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2">Career Insights</h3>
              <p className="text-xs md:text-base text-gray-600">Expert insights to support your career growth.</p>
            </div>
            <div className="p-3 md:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-2 md:mb-4">
                <svg className="w-4 h-4 md:w-6 md:h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2">Custom Settings</h3>
              <p className="text-xs md:text-base text-gray-600">Customize content based on your interests.</p>
            </div>
          </div>

          {/* Mobile-only Bottom Button */}
          <div className="md:hidden mt-8 text-center">
            <button
              onClick={() => navigate('/podcast-selection')}
              className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-full text-lg font-medium hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-gray-100">
        <div className="container mx-auto px-4 py-3 md:py-6">
          <p className="text-center text-gray-600 text-xs md:text-sm">
            © 2024 My Podcast. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 