import React, { useState } from 'react';
import { FaEnvelope, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../assets/logo.png"


const IndiaFlag = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjgiIGZpbGw9IiNGRjk5MzMiLz4KPHJlY3QgeT0iOCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjgiIGZpbGw9IiNGRkZGRkYiLz4KPHJlY3QgeT0iMTYiIHdpZHRoPSIyNCIgaGVpZ2h0PSI4IiBmaWxsPSIjMTM4ODA4Ii8+CjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMiIHN0cm9rZT0iIzAwMDA4MCIgc3Ryb2tlLXdpZHRoPSIwLjUiIGZpbGw9Im5vbmUiLz4KPC9zdmc+";
const MexicoFlag = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgiIGhlaWdodD0iMjQiIGZpbGw9IiMwMDZBNEUiLz4KPHJlY3QgeD0iOCIgd2lkdGg9IjgiIGhlaWdodD0iMjQiIGZpbGw9IiNGRkZGRkYiLz4KPHJlY3QgeD0iMTYiIHdpZHRoPSI4IiBoZWlnaHQ9IjI0IiBmaWxsPSIjQ0UxMTI2Ii8+Cjwvc3ZnPg==";
// const Logo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTI4IDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjQwIiBmaWxsPSIjMDA3NEQ5Ii8+Cjx0ZXh0IHg9IjY0IiB5PSIyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiPlhwZWN0bzwvdGV4dD4KPC9zdmc+";

const Dropdown = ({ title, items, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 hover:text-blue-500 transition ${isMobile ? 'w-full text-left justify-between py-2' : ''}`}
      >
        {title}
        <FaChevronDown className={`transform transition duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <ul className={`${isMobile 
          ? 'static w-full bg-[#1d263c] mt-1 rounded' 
          : 'absolute top-full left-0 mt-2 w-52 bg-white text-black shadow-md rounded z-20'
        }`}>
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className={`block px-4 py-2 transition ${isMobile 
                  ? 'text-gray-300 hover:text-blue-500 hover:bg-[#0f1829]' 
                  : 'hover:bg-blue-100'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#030d26] text-white w-full">

      <div className="border-b border-[#1d263c] text-xs sm:text-sm px-4 lg:px-10 py-2">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 lg:gap-8 items-center">
            <span className="flex items-center gap-1 font-semibold">
              <img src={IndiaFlag} alt="IN" className="w-4 h-4" />
              <span className="hidden sm:inline">Sales:</span>
              <a href="tel:+919971392828" className="hover:text-blue-500 transition">+91 997-139-2828</a>
            </span>
            <span className="flex items-center gap-1 font-semibold">
              <img src={IndiaFlag} alt="IN" className="w-4 h-4" />
              <span className="hidden sm:inline">Support:</span>
              <a href="tel:+919971888346" className="hover:text-blue-500 transition">+91 997-188-8346</a>
            </span>
            <span className="flex items-center gap-1 font-semibold">
              <img src={MexicoFlag} alt="MX" className="w-4 h-4" />
              <a href="tel:+529842788753" className="hover:text-blue-500 transition">+52-984-278-8753</a>
            </span>
          </div>

          {/* Right side links */}
          <div className="flex items-center gap-3 sm:gap-6">
            <a href="#" className="flex items-center gap-1 text-gray-300 font-semibold hover:text-blue-500 transition">
              <FaEnvelope className="text-xs" /> 
              <span className="hidden sm:inline">Internship</span>
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-blue-500 transition text-gray-300">
              <FaEnvelope className="text-xs" /> 
              <span className="hidden sm:inline">Support</span>
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-blue-500 transition text-gray-300">
              <FaEnvelope className="text-xs" /> 
              <span className="hidden sm:inline">Client Login</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="px-4 lg:px-10 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <img src={Logo} alt="Xpecto Logo" className="w-24 sm:w-32 h-auto" />

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-8 text-sm font-semibold">
            <li><a href="#" className="hover:text-blue-500 transition">Home</a></li>

            <Dropdown
              title="About Us"
              items={[
                { label: 'Company Profile', link: '#' },
                { label: 'Our Team', link: '#' },
                { label: 'Vision & Mission', link: '#' },
              ]}
            />

            <Dropdown
              title="Services"
              items={[
                { label: 'Web Development', link: '#' },
                { label: 'Mobile App Development', link: '#' },
                { label: 'UI/UX Design', link: '#' },
                { label: 'SEO Services', link: '#' },
              ]}
            />

            <Dropdown
              title="Technology"
              items={[
                { label: 'React.js', link: '#' },
                { label: 'Node.js', link: '#' },
                { label: 'MongoDB', link: '#' },
                { label: 'AWS Cloud', link: '#' },
              ]}
            />

            <Dropdown
              title="Industry"
              items={[
                { label: 'Healthcare', link: '#' },
                { label: 'Real Estate', link: '#' },
                { label: 'E-Commerce', link: '#' },
                { label: 'Finance', link: '#' },
              ]}
            />

            <li><a href="#" className="hover:text-blue-500 transition">Career</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Blogs</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Contact Us</a></li>
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md hover:bg-[#1d263c] transition"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 border-t border-[#1d263c] pt-4">
            <ul className="flex flex-col gap-2 text-sm font-semibold">
              <li><a href="#" className="block py-2 hover:text-blue-500 transition">Home</a></li>

              <Dropdown
                title="About Us"
                items={[
                  { label: 'Company Profile', link: '#' },
                  { label: 'Our Team', link: '#' },
                  { label: 'Vision & Mission', link: '#' },
                ]}
                isMobile={true}
              />

              <Dropdown
                title="Services"
                items={[
                  { label: 'Web Development', link: '#' },
                  { label: 'Mobile App Development', link: '#' },
                  { label: 'UI/UX Design', link: '#' },
                  { label: 'SEO Services', link: '#' },
                ]}
                isMobile={true}
              />

              <Dropdown
                title="Technology"
                items={[
                  { label: 'React.js', link: '#' },
                  { label: 'Node.js', link: '#' },
                  { label: 'MongoDB', link: '#' },
                  { label: 'AWS Cloud', link: '#' },
                ]}
                isMobile={true}
              />

              <Dropdown
                title="Industry"
                items={[
                  { label: 'Healthcare', link: '#' },
                  { label: 'Real Estate', link: '#' },
                  { label: 'E-Commerce', link: '#' },
                  { label: 'Finance', link: '#' },
                ]}
                isMobile={true}
              />

              <li><a href="#" className="block py-2 hover:text-blue-500 transition">Career</a></li>
              <li><a href="#" className="block py-2 hover:text-blue-500 transition">Blogs</a></li>
              <li><a href="#" className="block py-2 hover:text-blue-500 transition">Contact Us</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;