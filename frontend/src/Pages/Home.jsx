import React from 'react'; 

import heroImg01 from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-Img02.png";
import heroImg03 from "../assets/images/hero-Img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import videoIcon from "../assets/images/video-icon.png";
import featureImg from "../assets/images/feature-img.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import faqImg from "../assets/images/faq-img.png";

import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import About from '../Components/About/About';
import ServiceList from '../Components/Services/ServiceList';
import DoctorList from '../Components/Doctors/DoctorList';
import FaqList from '../Components/Faq/FaqList';

const Home = () => {
    return (
        <>
            {/*======hero section========*/}
            <section className="hero__section pt-[60px] 2xl:h-[800px]">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
                        {/*====hero content=====*/}
                        <div>
                            <div className="lg:w-[570px]">
                                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] 
                                md:leading-[70px]">
                                    We help patients to live a healthy and longer life.
                                </h1>
                                <p className="text__para"> 
                                    Available online doctor consultations, e-clinic, health record monitoring, and appointment booking.
                                    Providing online doctor consultations, lab tests, medicine delivery, and various healthcare services. 
                                    Allowing patients to book appointments online, consult doctors via video calls, and access digital prescriptions.
                                </p>
                                <button className="btn hover:bg-primaryColor hover:text-white transition duration-300 ease-in-out">
                                    Request an Appointment
                                </button>
                            </div>

                            {/*=====hero counter======*/}
                            <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                                <div className="hero-counter">
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading[54px] font-[700]
                                    text-headingColor">
                                        5+
                                    </h2>
                                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                                    <p className="text__para">Years of Experience</p>
                                </div>
                                <div className="hero-counter">
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading[54px] font-[700]
                                    text-headingColor">
                                        10+
                                    </h2>
                                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                                    <p className="text__para">Clinics</p>
                                </div>
                                <div className="hero-counter">
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading[54px] font-[700]
                                    text-headingColor">
                                        100%
                                    </h2>
                                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                                    <p className="text__para">Patient Satisfaction</p>
                                </div>                     
                            </div>
                        </div>
                        {/*=====hero content======= */}

                        <div className="flex gap-[30px] justify-end">
                            <div className="img-wrapper hover:scale-105 transition-transform duration-300 ease-in-out">
                                <img className="w-full" src={heroImg01} alt=""/>
                            </div>
                            <div className="img-wrapper hover:scale-105 transition-transform duration-300 ease-in-out"> 
                                <img src={heroImg02} alt='' className="w-full mb-[30px]"/>
                                <img src={heroImg03} alt='' className="w-full"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*======hero section end========*/}

            <section>
                <div className="container">
                    <div className="lg:w-[470px] mx-auto">
                        <h2 className="headings text-center">
                            Providing the best medical services
                        </h2>
                        <p className="text__para text-center">
                            World-class care for everyone. Our health system offers
                            unmatched, expert healthcare
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] 
                    lg:mt-[55px]">
                        <div className="service-card py-[30px] px-5 transition-all duration-300 ease-in-out hover:scale-105">
                            <div className="flex items-center justify-center">
                                <img src={icon01} alt=""/>
                            </div>
                            <div className="mt-[30]">
                                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                    Search a Doctor!
                                </h2>
                                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                    World-class care for everyone. Our health system offers
                                    unmatched, expert healthcare. From lab to clinic.
                                </p>
                                <Link to='/doctors'
                                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] 
                                  mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor 
                                 hover:border-none transition duration-300 ease-in-out">
                                    <BsArrowRight className="group-hover:text-white w-6 h-5"/>                     
                                 </Link>                            
                            </div>  
                        </div>

                        <div className="service-card py-[30px] px-5 transition-all duration-300 ease-in-out hover:scale-105">
                            <div className="flex items-center justify-center">
                                <img src={icon02} alt=""/>
                            </div>
                            <div className="mt-[30]">
                                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                    Find a Location
                                </h2>
                                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                    World-class care for everyone. Our health system offers
                                    unmatched, expert healthcare. From lab to clinic.
                                </p>
                                 <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-
                                 [#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor 
                                 hover:border-none transition duration-300 ease-in-out">
                                    <BsArrowRight className="group-hover:text-white w-6 h-5"/>                     
                                 </Link>  
                            </div>
                        </div>

                        <div className="service-card py-[30px] px-5 transition-all duration-300 ease-in-out hover:scale-105">
                            <div className="flex items-center justify-center">
                                <img src={icon03} alt=""/>
                            </div>
                            <div className="mt-[30]">
                                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                    Book Appointment
                                </h2>
                                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                    World-class care for everyone. Our health system offers
                                    unmatched, expert healthcare. From lab to clinic.
                                </p>
                                 <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-
                                 [#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor 
                                 hover:border-none transition duration-300 ease-in-out">
                                    <BsArrowRight className="group-hover:text-white w-6 h-5"/>                     
                                 </Link>
                            </div>                                     
                        </div>             
                    </div>
                </div>        
            </section> 

            <About />

            {/*====feature section ====== */} 
            <section>
                <div className="container">
                    <div className="flex items-center justify-between flex-col lg:flex-row">
                        {/*===feature content===*/} 
                        <div className="xl:w-[670px]">
                            <h2 className="headings">
                                Get Virtual Treatment <br /> Anytime.
                            </h2>
                            <ul className="pl-4">
                                <li className="text__para">
                                    1. Schedule the appointment directly.
                                </li>
                                <li className="text__para">
                                    2. Search for your physician here, and contact their office.
                                </li>
                                <li className="text__para">
                                    3. View our physicians who are accepting new patients, use the 
                                    online scheduling tool to select an appointment.
                                </li>
                            </ul>
                            <Link to='/'><button className="btn hover:bg-primaryColor hover:text-white transition duration-300 ease-in-out">Learn More</button></Link>                    
                        </div>

                        {/*==== feature img ======*/} 
                        <div className="relative lg:w-[380px] mt-10 lg:mt-0">
                            <img src={featureImg} alt="" className="hover:scale-105 transition-transform duration-300 ease-in-out"/>

                            <div className="absolute top-[15%] left-[17%] xl:left-[20%]">
                                <img src={videoIcon} alt="" className="hover:scale-105 transition-transform duration-300 ease-in-out"/>
                            </div>
                        </div> 
                    </div> 
                </div> 
            </section>
            {/*====feature section end ====== */} 

            {/*==== Doctor List Section =====*/} 
            <section className="doctor-list-container overflow-x-auto">
                <div className="container">
                    <div className="flex justify-center">
                        <DoctorList />
                    </div>
                </div>
            </section>
            {/*==== Doctor List Section end =====*/}

            <FaqList />
        </>
    );
}

export default Home;
