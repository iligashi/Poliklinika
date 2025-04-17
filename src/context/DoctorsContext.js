import React, { createContext, useState, useContext, useEffect } from 'react';

const DoctorsContext = createContext();

const initialDoctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    department: 'Cardiology',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: true,
    specialization: 'Cardiac Surgery',
    experience: '15 years',
    education: 'MD, PhD'
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    department: 'Neurology',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: true,
    specialization: 'Neurological Disorders',
    experience: '12 years',
    education: 'MD, Neurology'
  },
  {
    id: 3,
    name: 'Dr. Emily Martinez',
    department: 'Pediatrics',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: true,
    specialization: 'Child Care',
    experience: '10 years',
    education: 'MD, Pediatrics'
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    department: 'Orthopedics',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: true,
    specialization: 'Bone Surgery',
    experience: '18 years',
    education: 'MD, Orthopedics'
  }
];

export const DoctorsProvider = ({ children }) => {
  const [doctors, setDoctors] = useState(() => {
    const savedDoctors = localStorage.getItem('doctors');
    return savedDoctors ? JSON.parse(savedDoctors) : initialDoctors;
  });

  // Save doctors to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('doctors', JSON.stringify(doctors));
  }, [doctors]);

  const addDoctor = (doctor) => {
    const newDoctor = {
      ...doctor,
      id: Date.now(),
      available: true
    };
    setDoctors([...doctors, newDoctor]);
  };

  const updateDoctor = (updatedDoctor) => {
    setDoctors(doctors.map(doc => 
      doc.id === updatedDoctor.id ? updatedDoctor : doc
    ));
  };

  const deleteDoctor = (id) => {
    setDoctors(doctors.filter(doctor => doctor.id !== id));
  };

  const toggleAvailability = (id) => {
    setDoctors(doctors.map(doctor => 
      doctor.id === id ? { ...doctor, available: !doctor.available } : doctor
    ));
  };

  return (
    <DoctorsContext.Provider value={{
      doctors,
      addDoctor,
      updateDoctor,
      deleteDoctor,
      toggleAvailability
    }}>
      {children}
    </DoctorsContext.Provider>
  );
};

export const useDoctors = () => {
  const context = useContext(DoctorsContext);
  if (!context) {
    throw new Error('useDoctors must be used within a DoctorsProvider');
  }
  return context;
}; 