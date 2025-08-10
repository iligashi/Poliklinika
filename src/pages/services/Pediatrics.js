import React from 'react';
import { Link } from 'react-router-dom';

const Pediatrics = () => {
  const services = [
    {
      title: 'Well-Child Care',
      description: 'Comprehensive health monitoring and development tracking',
      icon: '👶',
      features: [
        'Newborn care and feeding support',
        'Growth and development monitoring',
        'Vaccination schedules',
        'Nutrition counseling',
        'Behavioral health screening',
        'School readiness assessments'
      ]
    },
    {
      title: 'Acute Care',
      description: 'Treatment for immediate health concerns and illnesses',
      icon: '🏥',
      features: [
        'Fever and infection treatment',
        'Respiratory conditions',
        'Gastrointestinal issues',
        'Minor injuries and wounds',
        'Allergic reactions',
        'Pain management'
      ]
    },
    {
      title: 'Specialized Care',
      description: 'Expert care for complex pediatric conditions',
      icon: '🩺',
      features: [
        'Asthma and allergy management',
        'Diabetes care',
        'ADHD and learning disorders',
        'Developmental delays',
        'Chronic disease management',
        'Mental health support'
      ]
    }
  ];

  const ageGroups = [
    {
      range: '0-2 years',
      description: 'Newborn and toddler care',
      services: ['Well-baby visits', 'Milestone tracking', 'Vaccinations', 'Feeding guidance']
    },
    {
      range: '3-5 years',
      description: 'Preschool age care',
      services: ['School readiness', 'Behavioral development', 'Safety education', 'Growth monitoring']
    },
    {
      range: '6-12 years',
      description: 'School age care',
      services: ['Academic performance', 'Sports physicals', 'Social development', 'Health education']
    },
    {
      range: '13-18 years',
      description: 'Adolescent care',
      services: ['Teen health', 'Mental wellness', 'Reproductive health', 'Independence building']
    }
  ];

  const doctors = [
    {
      name: 'Dr. Jennifer Adams',
      specialty: 'General Pediatrics',
      experience: '18+ years',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Dr. David Kim',
      specialty: 'Pediatric Emergency Medicine',
      experience: '12+ years',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Dr. Maria Santos',
      specialty: 'Developmental Pediatrics',
      experience: '15+ years',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            alt="Pediatrics"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Pediatrics
            </h1>
            <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
              Dedicated to the health and well-being of children from birth through adolescence. 
              Our pediatric team provides compassionate, family-centered care in a child-friendly environment.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointment"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                Book Appointment
              </Link>
              <Link
                to="/doctors?specialty=pediatrics"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition duration-300"
              >
                Meet Our Pediatricians
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive Pediatric Care Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine check-ups to specialized treatments, our pediatrics department offers 
            complete healthcare solutions designed specifically for children's unique needs.
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
                    <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Age-Specific Care */}
      <div className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Age-Appropriate Care for Every Stage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that children's healthcare needs change as they grow. 
              Our services are tailored to each developmental stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ageGroups.map((group, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
                <div className="text-center mb-4">
                  <div className="bg-green-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{group.range}</h3>
                  <p className="text-gray-600 text-sm mb-4">{group.description}</p>
                </div>
                <ul className="space-y-2">
                  {group.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-sm">
                      <svg className="w-3 h-3 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Our Pediatrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Parents Choose Our Pediatrics Department?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Child-Friendly Environment</h3>
            <p className="text-gray-600">Welcoming spaces designed to make children feel comfortable</p>
          </div>
          <div className="text-center">
            <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Family-Centered Care</h3>
            <p className="text-gray-600">Involving parents in every aspect of their child's care</p>
          </div>
          <div className="text-center">
            <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Preventive Focus</h3>
            <p className="text-gray-600">Emphasis on wellness and early intervention</p>
          </div>
          <div className="text-center">
            <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Availability</h3>
            <p className="text-gray-600">Round-the-clock care for urgent pediatric needs</p>
          </div>
        </div>
      </div>

      {/* Our Doctors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Pediatric Specialists
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced pediatricians who are passionate about children's health and committed 
            to providing the highest quality care for your family.
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
                <p className="text-green-600 font-medium mb-2">{doctor.specialty}</p>
                <p className="text-gray-600 mb-4">{doctor.experience} experience</p>
                <Link
                  to="/appointment"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Give Your Child the Best Start in Life
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Schedule your child's next check-up with our pediatric team and ensure they're 
            growing healthy and strong. We're here to support your family's health journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Schedule Check-up
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pediatrics;
