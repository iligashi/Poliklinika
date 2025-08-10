import React from 'react';
import { Link } from 'react-router-dom';

const Cardiology = () => {
  const services = [
    {
      title: 'Diagnostic Testing',
      description: 'Advanced cardiac diagnostic procedures and imaging',
      icon: '💓',
      features: [
        'Electrocardiogram (ECG/EKG)',
        'Echocardiography',
        'Stress testing',
        'Holter monitoring',
        'Cardiac CT scans',
        'Nuclear medicine imaging'
      ]
    },
    {
      title: 'Interventional Procedures',
      description: 'Minimally invasive cardiac procedures and treatments',
      icon: '🩺',
      features: [
        'Cardiac catheterization',
        'Angioplasty and stenting',
        'Pacemaker implantation',
        'Cardiac ablation',
        'Valve repair/replacement',
        'Coronary artery bypass'
      ]
    },
    {
      title: 'Preventive Cardiology',
      description: 'Heart disease prevention and risk management',
      icon: '🫀',
      features: [
        'Cardiovascular risk assessment',
        'Lifestyle modification counseling',
        'Cholesterol management',
        'Blood pressure control',
        'Diabetes and heart disease',
        'Exercise stress testing'
      ]
    }
  ];

  const conditions = [
    {
      name: 'Coronary Artery Disease',
      description: 'Blockage in the heart\'s blood vessels',
      symptoms: ['Chest pain', 'Shortness of breath', 'Fatigue']
    },
    {
      name: 'Heart Failure',
      description: 'Heart\'s inability to pump blood effectively',
      symptoms: ['Swelling in legs', 'Difficulty breathing', 'Rapid heartbeat']
    },
    {
      name: 'Arrhythmias',
      description: 'Irregular heart rhythms',
      symptoms: ['Palpitations', 'Dizziness', 'Fainting']
    },
    {
      name: 'Hypertension',
      description: 'High blood pressure',
      symptoms: ['Headaches', 'Vision problems', 'Chest pain']
    }
  ];

  const doctors = [
    {
      name: 'Dr. Robert Wilson',
      specialty: 'Interventional Cardiologist',
      experience: '20+ years',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Dr. Lisa Thompson',
      specialty: 'Electrophysiologist',
      experience: '15+ years',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Dr. James Martinez',
      specialty: 'Preventive Cardiologist',
      experience: '12+ years',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-600 to-red-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            alt="Cardiology"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Cardiology
            </h1>
            <p className="mt-6 text-xl text-red-100 max-w-3xl mx-auto">
              Advanced cardiac care with cutting-edge technology. Our cardiology team provides 
              comprehensive diagnosis, treatment, and prevention of heart and vascular diseases.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointment"
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                Book Appointment
              </Link>
              <Link
                to="/doctors?specialty=cardiology"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition duration-300"
              >
                Meet Our Cardiologists
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive Cardiac Care Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From preventive care to advanced interventional procedures, our cardiology department 
            offers the full spectrum of cardiac services with state-of-the-art technology.
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
                    <svg className="w-4 h-4 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <div className="bg-red-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cardiac Conditions We Treat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced cardiologists diagnose and treat a wide range of heart and vascular conditions.
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
                        <svg className="w-3 h-3 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Technology & Equipment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Advanced Technology & Equipment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We utilize the latest cardiac imaging and diagnostic technology to provide accurate diagnoses and effective treatments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">3D Echocardiography</h3>
            <p className="text-gray-600">Advanced heart imaging technology</p>
          </div>
          <div className="text-center">
            <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Cardiac CT</h3>
            <p className="text-gray-600">High-resolution heart imaging</p>
          </div>
          <div className="text-center">
            <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Stress Testing</h3>
            <p className="text-gray-600">Exercise and pharmacological stress</p>
          </div>
          <div className="text-center">
            <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Holter Monitoring</h3>
            <p className="text-gray-600">24/7 heart rhythm monitoring</p>
          </div>
        </div>
      </div>

      {/* Our Doctors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Cardiology Specialists
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Board-certified cardiologists with extensive experience in diagnosing and treating complex cardiac conditions.
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
                <p className="text-red-600 font-medium mb-2">{doctor.specialty}</p>
                <p className="text-gray-600 mb-4">{doctor.experience} experience</p>
                <Link
                  to="/appointment"
                  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Cardiac Care */}
      <div className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            24/7 Emergency Cardiac Care
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Our cardiac team is available around the clock for emergency heart care. 
            Don't wait if you experience chest pain or other cardiac symptoms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Emergency Contact
            </Link>
            <Link
              to="/appointment"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardiology;
