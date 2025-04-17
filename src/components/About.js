import React from 'react';

const stats = [
  { label: 'Years of Experience', value: '15+' },
  { label: 'Satisfied Patients', value: '10,000+' },
  { label: 'Professional Doctors', value: '25+' },
  { label: 'Medical Services', value: '50+' },
];

const About = () => {
  return (
    <div className="relative bg-white py-16" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Poli Klinika Drenas
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Founded in 2008, Poli Klinika Drenas has been providing exceptional healthcare services to the community of Drenas and beyond. Our state-of-the-art facility combines modern medical technology with compassionate care to ensure the best possible outcomes for our patients.
            </p>
            <div className="mt-8">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-lg text-gray-500">
                  Modern Medical Equipment
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-lg text-gray-500">
                  Expert Medical Staff
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-lg text-gray-500">
                  24/7 Emergency Services
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-2 lg:mt-0">
            {stats.map((stat) => (
              <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                <p className="text-3xl font-extrabold text-blue-600">{stat.value}</p>
                <p className="mt-2 text-lg font-medium text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-extrabold text-gray-900">
            Our Mission
          </h3>
          <p className="mt-4 text-lg text-gray-500">
            To provide accessible, high-quality healthcare services to our community while maintaining the highest standards of medical excellence and patient care. We are committed to continuous improvement and innovation in healthcare delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 