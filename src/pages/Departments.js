import React from 'react';
import { Link } from 'react-router-dom';

const Departments = () => {
  const departments = [
    {
      id: 1,
      name: 'Cardiology',
      description: 'Specialized care for heart conditions and cardiovascular diseases.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      services: [
        'Heart Disease Diagnosis',
        'Cardiac Rehabilitation',
        'Echocardiography',
        'Stress Testing',
        'Pacemaker Implantation'
      ]
    },
    {
      id: 2,
      name: 'Neurology',
      description: 'Expert care for disorders of the nervous system.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      services: [
        'Stroke Management',
        'Epilepsy Treatment',
        'Multiple Sclerosis Care',
        'Parkinson\'s Disease Management',
        'Nerve Conduction Studies'
      ]
    },
    {
      id: 3,
      name: 'Pediatrics',
      description: 'Comprehensive healthcare for children from birth through adolescence.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      services: [
        'Well-Child Checkups',
        'Vaccinations',
        'Developmental Screening',
        'Childhood Illness Treatment',
        'Nutrition Counseling'
      ]
    },
    {
      id: 4,
      name: 'Orthopedics',
      description: 'Specialized care for musculoskeletal conditions and injuries.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      services: [
        'Joint Replacement',
        'Sports Medicine',
        'Spine Care',
        'Fracture Treatment',
        'Physical Therapy'
      ]
    },
    {
      id: 5,
      name: 'Dermatology',
      description: 'Expert care for skin, hair, and nail conditions.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      services: [
        'Skin Cancer Screening',
        'Acne Treatment',
        'Psoriasis Management',
        'Cosmetic Dermatology',
        'Allergy Testing'
      ]
    },
    {
      id: 6,
      name: 'General Medicine',
      description: 'Comprehensive primary care for adults.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      services: [
        'Preventive Care',
        'Chronic Disease Management',
        'Health Screenings',
        'Vaccinations',
        'Minor Procedures'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Departments</h1>
          <p className="text-xl text-gray-600">Comprehensive healthcare services across various specialties</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((department) => (
            <div key={department.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="relative h-48">
                <img
                  src={department.image}
                  alt={department.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {department.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{department.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Services</h4>
                  <ul className="space-y-2">
                    {department.services.map((service, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex space-x-4">
                  <Link
                    to={`/doctors?department=${department.name.toLowerCase()}`}
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
    </div>
  );
};

export default Departments; 