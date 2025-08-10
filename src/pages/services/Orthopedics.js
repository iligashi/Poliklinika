import React from 'react';
import { Link } from 'react-router-dom';

const Orthopedics = () => {
  const services = [
    {
      title: 'Joint Replacement',
      description: 'Advanced surgical procedures for damaged joints',
      icon: '🦴',
      features: [
        'Hip replacement surgery',
        'Knee replacement surgery',
        'Shoulder replacement',
        'Ankle replacement',
        'Revision surgery',
        'Minimally invasive techniques'
      ]
    },
    {
      title: 'Sports Medicine',
      description: 'Treatment for sports-related injuries and conditions',
      icon: '⚽',
      features: [
        'ACL reconstruction',
        'Meniscus repair',
        'Tennis elbow treatment',
        'Runner\'s knee management',
        'Sports injury rehabilitation',
        'Performance optimization'
      ]
    },
    {
      title: 'Spine Care',
      description: 'Comprehensive treatment for back and neck conditions',
      icon: '🦴',
      features: [
        'Herniated disc treatment',
        'Spinal stenosis surgery',
        'Scoliosis correction',
        'Back pain management',
        'Neck pain treatment',
        'Spine rehabilitation'
      ]
    }
  ];

  const conditions = [
    {
      name: 'Arthritis',
      description: 'Joint inflammation and degeneration',
      treatments: ['Medication management', 'Physical therapy', 'Joint injections', 'Surgical options']
    },
    {
      name: 'Fractures',
      description: 'Broken bones requiring stabilization',
      treatments: ['Casting and splinting', 'Surgical fixation', 'Rehabilitation', 'Prevention strategies']
    },
    {
      name: 'Tendon Injuries',
      description: 'Damage to connective tissues',
      treatments: ['Conservative management', 'Surgical repair', 'Physical therapy', 'Return to activity']
    },
    {
      name: 'Back Pain',
      description: 'Chronic and acute spinal conditions',
      treatments: ['Diagnostic imaging', 'Pain management', 'Physical therapy', 'Surgical intervention']
    }
  ];

  const doctors = [
    {
      name: 'Dr. Christopher Brown',
      specialty: 'Orthopedic Surgeon',
      experience: '22+ years',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Dr. Amanda Davis',
      specialty: 'Sports Medicine Specialist',
      experience: '16+ years',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Dr. Kevin Lee',
      specialty: 'Spine Surgeon',
      experience: '19+ years',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            alt="Orthopedics"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Orthopedics
            </h1>
            <p className="mt-6 text-xl text-purple-100 max-w-3xl mx-auto">
              Expert care for bones, joints, muscles, and spine. Our orthopedic specialists provide 
              comprehensive treatment for musculoskeletal conditions using advanced surgical and non-surgical approaches.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointment"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                Book Appointment
              </Link>
              <Link
                to="/doctors?specialty=orthopedics"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition duration-300"
              >
                Meet Our Surgeons
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive Orthopedic Care Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From conservative treatments to advanced surgical procedures, our orthopedics department 
            offers complete solutions for musculoskeletal health and mobility restoration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Conditions We Treat */}
      <div className="bg-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Orthopedic Conditions We Treat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced orthopedic specialists diagnose and treat a wide range of musculoskeletal conditions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {conditions.map((condition, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{condition.name}</h3>
                <p className="text-gray-600 mb-4">{condition.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Treatment Options:</h4>
                  <ul className="space-y-1">
                    {condition.treatments.map((treatment, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <svg className="w-3 h-3 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {treatment}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Treatment Approaches */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Treatment Approaches
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in a comprehensive approach to orthopedic care, starting with conservative 
            treatments and progressing to surgical options when necessary.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Conservative Care</h3>
            <p className="text-gray-600">Non-surgical treatment options first</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Minimally Invasive</h3>
            <p className="text-gray-600">Advanced surgical techniques</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Plans</h3>
            <p className="text-gray-600">Tailored to individual needs</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Rehabilitation</h3>
            <p className="text-gray-600">Comprehensive recovery support</p>
          </div>
        </div>
      </div>

      {/* Our Doctors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Orthopedic Specialists
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Board-certified orthopedic surgeons with extensive experience in treating complex 
            musculoskeletal conditions and performing advanced surgical procedures.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                <p className="text-purple-600 font-medium mb-2">{doctor.specialty}</p>
                <p className="text-gray-600 mb-4">{doctor.experience} experience</p>
                <Link
                  to="/appointment"
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Regain Your Mobility and Quality of Life
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Don't let pain and limited mobility hold you back. Schedule a consultation with our 
            orthopedic team and discover the treatment options available to restore your function.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orthopedics;
