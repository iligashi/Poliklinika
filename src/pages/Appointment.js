import React, { useState } from 'react';
import { useDoctors } from '../context/DoctorsContext';
import AppointmentModal from '../components/modals/AppointmentModal';

const Appointment = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { doctors } = useDoctors();

  const departments = [
    { id: 1, name: 'General Medicine', icon: '🏥' },
    { id: 2, name: 'Cardiology', icon: '❤️' },
    { id: 3, name: 'Neurology', icon: '🧠' },
    { id: 4, name: 'Pediatrics', icon: '👶' },
    { id: 5, name: 'Orthopedics', icon: '🦴' },
    { id: 6, name: 'Dermatology', icon: '🧴' }
  ];

  const handleDepartmentSelect = (department) => {
    setSelectedDepartment(department);
    setSelectedDoctor(null);
  };

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const filteredDoctors = selectedDepartment
    ? doctors.filter(doctor => doctor.department === selectedDepartment)
    : doctors;

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book an Appointment</h1>
          <p className="text-xl text-gray-600">Schedule your visit with our expert medical professionals</p>
        </div>

        {/* Department Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Select Department</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => handleDepartmentSelect(dept.name)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                  selectedDepartment === dept.name
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-400'
                }`}
              >
                <div className="text-3xl mb-2">{dept.icon}</div>
                <div className="text-sm font-medium text-gray-900">{dept.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Doctor Selection */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {selectedDepartment ? `Available Doctors in ${selectedDepartment}` : 'All Available Doctors'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <div className="relative h-48">
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
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-gray-600">4.9 (120 reviews)</span>
                    </div>
                    <span className={`text-sm font-medium ${
                      doctor.available ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {doctor.available ? 'Available Today' : 'Not Available'}
                    </span>
                  </div>
                  <button
                    onClick={() => handleDoctorSelect(doctor)}
                    disabled={!doctor.available}
                    className={`w-full py-2 rounded-md transition duration-300 ${
                      doctor.available
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        doctorName={selectedDoctor?.name}
      />
    </div>
  );
};

export default Appointment; 