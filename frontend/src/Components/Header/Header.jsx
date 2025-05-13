import { useEffect, useRef, useContext, useState } from 'react';
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { authContext } from '../../context/AuthContext.jsx';

const navLinks = [
  { path: '/home', display: 'Home' },
  { path: '/doctors', display: 'Search a Doctor!' },
  { path: '/services', display: 'Services' },
  { path: '/contact', display: 'Contact Us' },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header flex items-center bg-white shadow-md transition-all duration-300" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/*======= Logo =======*/}
          <div>
            <img src={logo} alt="Logo" className="w-32" />
          </div>

          {/*======= Menu =======*/}
          <div className={`navigation ${isMenuOpen ? 'block' : 'hidden'} md:block`} ref={menuRef}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? "text-primaryColor text-[18px] leading-7 font-[600] transition-all duration-300" : "text-textColor text-[18px] leading-7 font-[500] hover:text-primaryColor transition-all duration-300"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/*======= Nav Right =======*/}
          <div className="flex items-center gap-4">
            {token && user ? (
              <div>
                <Link to={role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}>
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer overflow-hidden hover:scale-110 transition-transform duration-300">
                    <img src={user?.photo} className="w-full h-full object-cover rounded-full" alt="User" />
                  </figure>
                </Link>
              </div>
            ) : (
              <Link to='/login'>
                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] hover:bg-primaryColorDark transition duration-300">
                  Login
                </button>
              </Link>
            )}

            {/* Mobile Menu Icon */}
            <span className="md:hidden cursor-pointer" onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 text-primaryColor' />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
