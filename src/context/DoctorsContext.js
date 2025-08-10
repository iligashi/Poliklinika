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
  },
  {
    id: 5,
    name: 'Dr. Arlind Hoxha',
    department: 'Dermatology',
    image: 'https://images.unsplash.com/photo-1551601651-bc60f254d532?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: true,
    specialization: 'Skin Disorders',
    experience: '14 years',
    education: 'MD, Dermatology'
  },
  {
    id: 6,
    name: 'Dr. Elona Berisha',
    department: 'Gynecology',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: true,
    specialization: 'Women\'s Health',
    experience: '16 years',
    education: 'MD, Gynecology'
  },
  {
    id: 7,
    name: 'Dr. Besnik Krasniqi',
    department: 'Urology',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: true,
    specialization: 'Urological Surgery',
    experience: '13 years',
    education: 'MD, Urology'
  },
  {
    id: 8,
    name: 'Dr. Valbona Gashi',
    department: 'Psychiatry',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: true,
    specialization: 'Mental Health',
    experience: '11 years',
    education: 'MD, Psychiatry'
  },
  {
    id: 9,
    name: 'Dr. Dardan Rexhepi',
    department: 'Ophthalmology',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: true,
    specialization: 'Eye Surgery',
    experience: '17 years',
    education: 'MD, Ophthalmology'
  },
  {
    id: 10,
    name: 'Dr. Albana Shala',
    department: 'Endocrinology',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: true,
    specialization: 'Diabetes & Hormones',
    experience: '12 years',
    education: 'MD, Endocrinology'
  },
  {
    id: 11,
    name: 'Dr. Gentian Bajraktari',
    department: 'Gastroenterology',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: true,
    specialization: 'Digestive Health',
    experience: '15 years',
    education: 'MD, Gastroenterology'
  },
  {
    id: 12,
    name: 'Dr. Lindita Tahiri',
    department: 'Rheumatology',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: true,
    specialization: 'Joint & Autoimmune Diseases',
    experience: '13 years',
    education: 'MD, Rheumatology'
  },
  {
    id: 13,
    name: 'Dr. Blerim Osmani',
    department: 'Pulmonology',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: true,
    specialization: 'Lung & Respiratory Health',
    experience: '14 years',
    education: 'MD, Pulmonology'
  },
  {
    id: 14,
    name: 'Dr. Teuta Demiri',
    department: 'Oncology',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: true,
    specialization: 'Cancer Treatment',
    experience: '19 years',
    education: 'MD, Oncology'
  },
  {
    id: 15,
    name: 'Dr. Kreshnik Morina',
    department: 'Emergency Medicine',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: true,
    specialization: 'Emergency Care',
    experience: '16 years',
    education: 'MD, Emergency Medicine'
  },
  {
    id: 16,
    name: 'Dr. Donika Kastrati',
    department: 'Radiology',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: true,
    specialization: 'Medical Imaging',
    experience: '12 years',
    education: 'MD, Radiology'
  }
];

export const DoctorsProvider = ({ children }) => {
  const [doctors, setDoctors] = useState(() => {
    const savedDoctors = localStorage.getItem('doctors');
    console.log('Loading doctors from localStorage:', savedDoctors ? 'found' : 'not found');
    return savedDoctors ? JSON.parse(savedDoctors) : initialDoctors;
  });

  // Save doctors to localStorage whenever they change
  useEffect(() => {
    console.log('Saving doctors to localStorage:', doctors.length, 'doctors');
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