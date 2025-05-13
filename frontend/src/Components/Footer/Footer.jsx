import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { AiFillYoutube, AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

const socialLinks = [
  {
    path: 'https://youtube.com', // Replace with actual link
    icon: <AiFillYoutube className="w-5 h-5 group-hover:text-white transition-colors duration-300" />,
  },
  {
    path: 'https://instagram.com', // Replace with actual link
    icon: <AiFillInstagram className="w-5 h-5 group-hover:text-white transition-colors duration-300" />,
  },
  {
    path: 'https://github.com', // Replace with actual link
    icon: <AiFillGithub className="w-5 h-5 group-hover:text-white transition-colors duration-300" />,
  },
  {
    path: 'https://www.linkedin.com/in/ankitrajan19', // Replace with actual link
    icon: <AiFillLinkedin className="w-5 h-5 group-hover:text-white transition-colors duration-300" />,
  },
];

const quickLinks01 = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/',
    display: 'About Us',
  },
  {
    path: '/doctors',
    display: 'Services',
  },
  {
    path: '/contact',
    display: 'Contact Us',
  },
  {
    path: '/',
    display: 'Blog',
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10 bg-gradient-to-r from-[#f3f4f6] to-[#e5e7eb] dark:from-[#1f2937] dark:to-[#111827] animate-fadeIn">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-10">
          {/* Logo + Contact Info */}
          <div className="w-full md:w-1/3">
            <img src={logo} alt="e-doctor logo" className="w-32" />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              Copyright © {year} developed by e-doctor [AnkitRajan]
            </p>
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-2">
              Medicare45@gmail.com, +91 7004189931
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={link.path || index}  // Use path as a key if available
                  className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none transition-all duration-300 hover:scale-110"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul className="space-y-3">
              {quickLinks01.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-primaryColor hover:after:w-full after:transition-all after:duration-300 hover:text-primaryColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
