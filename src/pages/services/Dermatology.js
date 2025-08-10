import React from 'react';
import { Link } from 'react-router-dom';

const Dermatology = () => {
  const services = [
    {
      title: 'Medical Dermatology',
      description: 'Diagnosis and treatment of skin conditions and diseases',
      icon: '🔬',
      features: [
        'Skin cancer screening and treatment',
        'Acne and rosacea management',
        'Psoriasis and eczema care',
        'Allergic skin reactions',
        'Infectious skin conditions',
        'Autoimmune skin disorders'
      ]
    },
    {
      title: 'Surgical Dermatology',
      description: 'Surgical procedures for skin conditions and lesions',
      icon: '✂️',
      features: [
        'Skin cancer excision',
        'Mole and wart removal',
        'Cyst and lipoma removal',
        'Skin biopsy procedures',
        'Reconstructive surgery',
        'Mohs micrographic surgery'
      ]
    },
    {
      title: 'Cosmetic Dermatology',
      description: 'Aesthetic treatments for skin enhancement',
      icon: '✨',
      features: [
        'Botox and dermal fillers',
        'Chemical peels',
        'Laser treatments',
        'Microdermabrasion',
        'Anti-aging procedures',
        'Scar treatment'
      ]
    }
  ];

  const conditions = [
    {
      name: 'Skin Cancer',
      description: 'Early detection and treatment of various skin cancers',
      symptoms: ['New or changing moles', 'Irregular borders', 'Color changes', 'Rapid growth']
    },
    {
      name: 'Acne',
      description: 'Treatment for all types of acne and scarring',
      symptoms: ['Pimples and blackheads', 'Inflammation', 'Scarring', 'Oily skin']
    },
    {
      name: 'Eczema',
      description: 'Management of chronic inflammatory skin conditions',
      symptoms: ['Dry, itchy skin', 'Red patches', 'Cracking', 'Flare-ups']
    },
    {
      name: 'Psoriasis',
      description: 'Treatment for autoimmune skin disorder',
      symptoms: ['Thick, scaly patches', 'Itching', 'Joint pain', 'Nail changes']
    }
  ];

  const doctors = [
    {
      name: 'Dr. Rachel Green',
      specialty: 'Dermatologist',
      experience: '18+ years',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Dr. Thomas White',
      specialty: 'Mohs Surgeon',
      experience: '20+ years',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Dr. Sophia Kim',
      specialty: 'Cosmetic Dermatologist',
      experience: '15+ years',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            alt="Dermatology"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Dermatology
            </h1>
            <p className="mt-6 text-xl text-orange-100 max-w-3xl mx-auto">
              Expert care for your skin, hair, and nails. Our dermatology team provides comprehensive 
              treatment for medical, surgical, and cosmetic skin conditions using advanced technology.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointment"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                Book Appointment
              </Link>
              <Link
                to="/doctors?specialty=dermatology"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition duration-300"
              >
                Meet Our Dermatologists
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive Dermatology Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From medical treatments to cosmetic enhancements, our dermatology department offers 
            complete skin care solutions for patients of all ages.
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
                    <svg className="w-4 h-4 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <div className="bg-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Skin Conditions We Treat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced dermatologists diagnose and treat a wide range of skin, hair, and nail conditions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {conditions.map((condition, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{condition.name}</h3>
                <p className="text-gray-600 mb-4">{condition.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Common Symptoms:</h4>
                  <ul className="space-y-1">
                    {condition.symptoms.map((symptom, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <svg className="w-3 h-3 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced Technology */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Advanced Technology & Equipment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We utilize state-of-the-art technology to provide accurate diagnoses and effective treatments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Dermoscopy</h3>
            <p className="text-gray-600">Advanced mole and lesion imaging</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Laser Therapy</h3>
            <p className="text-gray-600">Precise treatment for various conditions</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phototherapy</h3>
            <p className="text-gray-600">UV light treatment for skin conditions</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Cryotherapy</h3>
            <p className="text-gray-600">Freezing treatment for skin lesions</p>
          </div>
        </div>
      </div>

      {/* Our Doctors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Dermatology Specialists
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Board-certified dermatologists with expertise in medical, surgical, and cosmetic dermatology.
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
                <p className="text-orange-600 font-medium mb-2">{doctor.specialty}</p>
                <p className="text-gray-600 mb-4">{doctor.experience} experience</p>
                <Link
                  to="/appointment"
                  className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition duration-300"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skin Cancer Awareness */}
      <div className="bg-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Early Detection Saves Lives
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Regular skin cancer screenings are crucial for early detection and successful treatment. 
            Don't wait - schedule your annual skin check today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Schedule Skin Check
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dermatology;
