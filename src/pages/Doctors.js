import React from 'react';
import { useDoctors } from '../context/DoctorsContext';

const Doctors = () => {
  const { doctors } = useDoctors();

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Doctors</h1>
          <p className="text-xl text-gray-600">Meet our team of experienced medical professionals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="relative h-64">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{doctor.name}</h3>
                  <p className="text-blue-200">{doctor.department}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">Specialization</h4>
                  <p className="text-gray-600">{doctor.specialization}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">Experience</h4>
                  <p className="text-gray-600">{doctor.experience}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">Education</h4>
                  <p className="text-gray-600">{doctor.education}</p>
                </div>
                <div className="flex items-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    doctor.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {doctor.available ? 'Available' : 'Not Available'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors; 