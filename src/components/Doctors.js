import React, { useState } from 'react';
import { useDoctors } from '../context/DoctorsContext';
import AppointmentModal from './modals/AppointmentModal';

const Doctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { doctors, resetDoctors } = useDoctors();

  // Debug logging
  console.log('Doctors loaded:', doctors.length, doctors);

  const handleBookAppointment = (doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleResetDoctors = () => {
    resetDoctors();
  };

  return (
    <section id="doctors" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Doctors</h2>
          <p className="text-lg text-gray-600">Meet our team of experienced medical professionals</p>
          <p className="text-sm text-gray-500 mt-2">Total Doctors: {doctors.length}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                <p className="text-blue-600 mb-2">{doctor.department}</p>
                <p className="text-gray-600 mb-2">{doctor.specialization}</p>
                <p className="text-gray-500 text-sm mb-2">Experience: {doctor.experience}</p>
                <p className="text-gray-500 text-sm mb-4">Education: {doctor.education}</p>
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    doctor.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {doctor.available ? 'Available' : 'Not Available'}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleBookAppointment(doctor)}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    Book Appointment
                  </button>
                  <button
                    className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition duration-300"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 mr-4">
            View All Doctors
          </button>
          <button 
            onClick={handleResetDoctors}
            className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition duration-300"
          >
            Reset Doctors
          </button>
        </div>
      </div>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        doctorName={selectedDoctor?.name}
      />
    </section>
  );
};

export default Doctors; 