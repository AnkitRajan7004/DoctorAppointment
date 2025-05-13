import React, { useState } from 'react';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const DoctorAbout = ({ doctor }) => {
    const [readMore, setReadMore] = useState(false);

    const toggleReadMore = () => setReadMore(!readMore);

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 max-w-3xl mx-auto">
            {/* Header Section with Image */}
            <div className="flex items-center gap-5 mb-6">
                <img
                    src={doctor.image || "/default-doctor.png"}
                    alt={doctor.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-primary"
                />
                <div>
                    <h3 className="text-xl font-bold text-headingColor">Dr. {doctor.name}</h3>
                    <p className="text-sm text-gray-500">{doctor.specialization}</p>
                </div>
            </div>

            {/* Description with Read More */}
            <div className="mb-4 text-textColor text-[16px] leading-7">
                {readMore ? doctor.description : `${doctor.description.slice(0, 150)}...`}
                {doctor.description.length > 150 && (
                    <button
                        onClick={toggleReadMore}
                        className="text-blue-500 font-medium ml-2 hover:underline"
                    >
                        {readMore ? 'Read Less' : 'Read More'}
                    </button>
                )}
            </div>

            {/* Education and Experience */}
            <div className="space-y-3 mb-6">
                <div className="flex gap-4 items-center">
                    <span className="font-semibold text-headingColor">🎓 Education:</span>
                    <p className="text-textColor">{doctor.education}</p>
                </div>
                <div className="flex gap-4 items-center">
                    <span className="font-semibold text-headingColor">🩺 Experience:</span>
                    <p className="text-textColor">{doctor.experience}</p>
                </div>
            </div>

            {/* Specializations */}
            {doctor.specializations && doctor.specializations.length > 0 && (
                <div className="mb-4">
                    <h4 className="text-headingColor font-semibold mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                        {doctor.specializations.map((spec, idx) => (
                            <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                                {spec}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Social Media */}
            <div className="mt-4 flex gap-4 text-xl text-gray-500">
                {doctor.linkedin && (
                    <a href={doctor.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                        <FaLinkedin />
                    </a>
                )}
                {doctor.twitter && (
                    <a href={doctor.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                        <FaTwitter />
                    </a>
                )}
                {doctor.facebook && (
                    <a href={doctor.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        <FaFacebook />
                    </a>
                )}
            </div>
        </div>
    );
};

export default DoctorAbout;
