import React, { useState, useEffect } from 'react';
import doctorImg from '../../assets/images/doctor-img02.png';
import starIcon from '../../assets/images/star.png';
import DoctorAbout from './DoctorAbout';
import Feedback from './Feedback';
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const DoctorsDetails = () => {
    const [tab, setTab] = useState('about');
    const [isLoading, setIsLoading] = useState(true);
    const [showScroll, setShowScroll] = useState(false);

    const rating = 4.5;
    const totalReviews = 272;

    // Sample feedback data (can be dynamic)
    const feedbackData = [
        {
            comment: 'Dr. Aman was amazing! Highly recommend!',
            rating: 5
        },
        {
            comment: 'Great surgeon, very professional.',
            rating: 4
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        const handleScroll = () => {
            setShowScroll(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating - fullStars >= 0.5;
        const totalStars = 5;

        return [...Array(totalStars)].map((_, i) => {
            if (i < fullStars) {
                return <img key={i} src={starIcon} alt="star" className="w-4 h-4" />;
            } else if (i === fullStars && hasHalfStar) {
                return (
                    <img key={i} src={starIcon} alt="half star" className="w-4 h-4 opacity-50" />
                );
            } else {
                return <img key={i} src={starIcon} alt="empty star" className="w-4 h-4 grayscale" />;
            }
        });
    };

    return (
        <section className="py-10 bg-[#f4f4f9]">
            <div className="max-w-[1170px] px-5 mx-auto">
                <div className="grid md:grid-cols-3 gap-[50px]">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-5 mb-8">
                            <figure className="max-w-[200px] max-h-[200px] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
                                <img src={doctorImg} alt="Doctor" className="w-full h-full object-cover" />
                            </figure>

                            <div>
                                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 text-sm lg:text-base font-semibold rounded">
                                    Surgeon
                                </span>
                                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                                    Dr. Aman Gupta
                                </h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <div className="flex items-center gap-1">
                                        {renderStars(rating)}
                                    </div>
                                    <span className="text-[14px] text-textColor">({totalReviews})</span>
                                </div>
                                <p className="text__para text-[14px] leading-5 md:text-[15px] mt-3 max-w-md">
                                    A surgeon is a medical professional specializing in performing surgical procedures to treat injuries, diseases, or conditions.
                                </p>

                                {/* Contact and Social Media */}
                                <div className="mt-6">
                                    <div className="flex items-center gap-3">
                                        <FaPhoneAlt className="text-primaryColor" />
                                        <a href="tel:+1234567890" className="text-headingColor">+1 234 567 890</a>
                                    </div>
                                    <div className="flex items-center gap-3 mt-2">
                                        <FaEnvelope className="text-primaryColor" />
                                        <a href="mailto:doctor@hospital.com" className="text-headingColor">doctor@hospital.com</a>
                                    </div>
                                    <div className="flex gap-5 mt-5">
                                        <a href="#" aria-label="Facebook" className="text-primaryColor hover:text-irisBlueColor text-xl"><FaFacebook /></a>
                                        <a href="#" aria-label="Twitter" className="text-primaryColor hover:text-irisBlueColor text-xl"><FaTwitter /></a>
                                        <a href="#" aria-label="Instagram" className="text-primaryColor hover:text-irisBlueColor text-xl"><FaInstagram /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tab Navigation */}
                        <div className="mt-10 border-b border-solid border-[#0066ff34]">
                            {['about', 'feedback'].map(tabName => (
                                <button
                                    key={tabName}
                                    onClick={() => setTab(tabName)}
                                    className={`${
                                        tab === tabName && 'border-b-2 border-primaryColor text-primaryColor'
                                    } py-2 px-5 mr-5 text-[16px] font-semibold transition-all`}
                                >
                                    {tabName.charAt(0).toUpperCase() + tabName.slice(1)}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="mt-8">
                            {isLoading ? (
                                <div className="flex justify-center items-center py-20">
                                    <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
                                </div>
                            ) : (
                                <>
                                    {tab === 'about' && <DoctorAbout />}
                                    {tab === 'feedback' && feedbackData.map((fb, index) => (
                                        <Feedback key={index} feedback={fb} />
                                    ))}
                                </>
                            )}
                        </div>
                    </div>

                    {/* Right Sidebar (Optional Info) */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h4 className="text-headingColor font-semibold text-lg mb-4">Available Hours</h4>
                        <ul className="text-[14px] text-textColor space-y-2">
                            <li>Mon-Fri: 9:00 AM - 5:00 PM</li>
                            <li>Saturday: 10:00 AM - 2:00 PM</li>
                            <li>Sunday: Closed</li>
                        </ul>

                        <h4 className="text-headingColor font-semibold text-lg mt-6 mb-4">Clinic Location</h4>
                        <p className="text-[14px] text-textColor">123 Health Street, Wellness City, USA</p>
                    </div>
                </div>
            </div>

            {/* Scroll To Top */}
            {showScroll && (
                <button
                    className="fixed bottom-10 right-10 bg-primaryColor text-white p-4 rounded-full shadow-lg hover:bg-irisBlueColor transition-all"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    aria-label="Scroll to Top"
                >
                    ↑
                </button>
            )}
        </section>
    );
};

export default DoctorsDetails;
