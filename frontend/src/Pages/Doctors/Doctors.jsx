import { useEffect, useState } from 'react';
import { doctors } from './../../assets/data/doctors';
import DoctorCard from './../../Components/Doctors/DoctorCard';

const Doctors = () => {
    const [search, setSearch] = useState('');
    const [filteredDoctors, setFilteredDoctors] = useState(doctors);
    const [specialization, setSpecialization] = useState('All');

    useEffect(() => {
        let result = doctors;

        if (search.trim() !== '') {
            result = result.filter(doctor =>
                doctor.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (specialization !== 'All') {
            result = result.filter(doctor =>
                doctor.specialization?.toLowerCase() === specialization.toLowerCase()
            );
        }

        setFilteredDoctors(result);
    }, [search, specialization]);

    const specializations = ['All', ...new Set(doctors.map(doc => doc.specialization))];

    return (
        <>
            <section className="bg-[#fff9ea] py-10">
                <div className="container text-center">
                    <h2 className="headings mb-6">Search for a Doctor! 🩺</h2>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-3xl mx-auto">
                        {/* Search Bar */}
                        <input
                            type="search"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="py-3 px-4 w-full md:w-2/3 bg-white rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500"
                            placeholder="Search by doctor's name"
                        />

                        {/* Specialization Dropdown */}
                        <select
                            value={specialization}
                            onChange={e => setSpecialization(e.target.value)}
                            className="py-3 px-4 w-full md:w-1/3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
                        >
                            {specializations.map((spec, idx) => (
                                <option key={idx} value={spec}>
                                    {spec}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </section>

            <section className="py-10">
                <div className="container">
                    {filteredDoctors.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {filteredDoctors.map(doctor => (
                                <DoctorCard key={doctor.id} doctor={doctor} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-red-500 text-lg font-semibold">
                            No doctors found matching your search.
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Doctors;
