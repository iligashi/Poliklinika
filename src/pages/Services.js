import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'General Medicine',
      description: 'Comprehensive primary care services for adults and children.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      details: [
        'Routine check-ups and physical examinations',
        'Preventive care and health screenings',
        'Management of chronic conditions',
        'Vaccinations and immunizations',
        'Minor surgical procedures',
        'Health education and counseling'
      ]
    },
    {
      id: 2,
      name: 'Cardiology',
      description: 'Specialized care for heart and cardiovascular conditions.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      details: [
        'Cardiac diagnostic testing',
        'Echocardiography',
        'Stress testing',
        'Holter monitoring',
        'Cardiac rehabilitation',
        'Pacemaker management'
      ]
    },
    {
      id: 3,
      name: 'Neurology',
      description: 'Expert care for disorders of the nervous system.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      details: [
        'Stroke management and prevention',
        'Epilepsy treatment',
        'Multiple sclerosis care',
        'Parkinson\'s disease management',
        'Nerve conduction studies',
        'Headache and migraine treatment'
      ]
    },
    {
      id: 4,
      name: 'Pediatrics',
      description: 'Comprehensive healthcare for children from birth through adolescence.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      details: [
        'Well-child checkups',
        'Developmental screenings',
        'Childhood vaccinations',
        'Acute illness care',
        'Nutrition counseling',
        'Behavioral health services'
      ]
    },
    {
      id: 5,
      name: 'Orthopedics',
      description: 'Specialized care for musculoskeletal conditions and injuries.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      details: [
        'Joint replacement surgery',
        'Sports medicine',
        'Spine care',
        'Fracture treatment',
        'Physical therapy',
        'Arthroscopic procedures'
      ]
    },
    {
      id: 6,
      name: 'Dermatology',
      description: 'Expert care for skin, hair, and nail conditions.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      details: [
        'Skin cancer screening',
        'Acne treatment',
        'Psoriasis management',
        'Cosmetic dermatology',
        'Allergy testing',
        'Laser therapy'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <div className="relative bg-blue-600">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Medical services"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Comprehensive healthcare services delivered with expertise and compassion.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {service.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Services Include</h4>
                  <ul className="space-y-2">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex space-x-4">
                  <Link
                    to={`/doctors?specialty=${service.name.toLowerCase()}`}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-700 transition duration-300"
                  >
                    View Doctors
                  </Link>
                  <Link
                    to="/appointment"
                    className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-md text-center hover:bg-blue-50 transition duration-300"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Services Banner */}
      <div className="bg-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">24/7 Emergency Care</h2>
              <p className="mt-2">Immediate medical attention when you need it most.</p>
            </div>
            <div className="flex space-x-4">
              <Link
                to="/emergency"
                className="bg-white text-red-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-300"
              >
                Emergency Info
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-red-600 transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 