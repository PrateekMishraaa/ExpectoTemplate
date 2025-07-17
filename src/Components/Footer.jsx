import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMediumM,
  FaPinterestP,
  FaYoutube,
  FaGoogle,
} from 'react-icons/fa';
import Regis from "../assets/regis.webp"
import Software from "../assets/soft.png"
import Custom from "../assets/top.svg"
import Clutch from "../assets/clutch.png"
import Logo from "../assets/logo.png"

const Footer = () => {
  return (
   <>
    <footer className="bg-[#0c0a3e] text-white py-10 px-6 md:px-16">
  
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Xpecto<sup>®</sup> IT Solutions Pvt Ltd
        </h2>
        <p className="text-cyan-400 mt-1 text-sm">A Reference Based Company</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm text-gray-300 mb-10">
   
        <div>
          <h3 className="font-semibold text-white mb-2 border-b-2 border-cyan-400 w-fit cursor-pointer">Expertise</h3>
          <ul className="space-y-1">
            <li className='hover:text-blue-500 transition cursor-pointer'>Website Development</li>
            <li className='hover:text-blue-500 transition cursor-pointer'>Web Applications</li>
            <li className='hover:text-blue-500 transition cursor-pointer'>Custom Applications</li>
            <li className='hover:text-blue-500 transition cursor-pointer'>Mobile Applications</li>
            <li className='hover:text-blue-500 transition cursor-pointer'>Digital Marketing</li>
            <li className='hover:text-blue-500 transition cursor-pointer'>Cloud / Hosting</li>
            <li className='hover:text-blue-500 transition cursor-pointer'>Email Solutions</li>
            <li className='hover:text-blue-500 transition cursor-pointer'>Web / Mobile Maintenance</li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold text-white mb-2 border-b-2 border-cyan-400 w-fit">Consulting</h3>
          <ul className="space-y-1">
            <li className='hover:text-blue-500 transition cursor-pointer'>Blockchain</li>
            <li className='hover:text-blue-500 transition cursor-pointer'>Artificial Intelligence</li>
            <li className='hover:text-blue-500 transition cursor-pointer'>Information of Technology (IoT)</li>
            <li className='hover:text-blue-500 transition cursor-pointer'>NFT</li>
            <li className='hover:text-blue-500 transition cursor-pointer'>Digital Transformation</li>
            <li className='hover:text-blue-500 transition cursor-pointer'>ChatBot</li>
            <li className='hover:text-blue-500 transition cursor-pointer'>Web 3.0</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-2 border-b-2 border-cyan-400 w-fit">Hire</h3>
          <ul className="space-y-1">
            <li className='hover:text-blue-500 transition cursor-pointer'>Full Stack Developers</li>
            <li className='hover:text-blue-500 transition cursor-pointer'>Web Developers</li>
            <li className='hover:text-blue-500 transition cursor-pointer'>MERN Stack Developers</li>
            <li className='hover:text-blue-500 transition cursor-pointer'>UI/UX Designers</li>
            <li className='hover:text-blue-500 transition cursor-pointer'>Others</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-2 border-b-2 border-cyan-400 w-fit">Informations</h3>
          <ul className="space-y-1">
            <li className='hover:text-blue-500 transition cursor-pointer'>Who We Are</li>
            <li className='hover:text-blue-500 transition cursor-pointer'>Clients</li>
            <li className='hover:text-blue-500 transition cursor-pointer'>We Work In</li>
            <li className='hover:text-blue-500 transition cursor-pointer'>Contact Us</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center gap-6 flex-wrap mb-10">
        <img src={Regis} alt="Clutch" className="h-12" />
        <img src={Software} alt="Top Software" className="h-12" />
        <img src={Custom} alt="Custom Dev" className="h-12" />
         <img src={Clutch} alt="Custom Dev" className="h-12" />
      </div>

      <div className="text-center text-gray-400 mb-4">
        <p className="mb-2 text-sm font-medium">Follow Us On:</p>
        <div className="flex justify-center gap-4 text-xl">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaInstagram />
          <FaMediumM />
          <FaPinterestP />
          <FaYoutube />
          <FaGoogle />
        </div>
      </div>

      {/* Country Flags */}
      <div className="text-center mt-6 text-sm">
        <p className="mb-2 font-medium">We Work In:</p>
        <div className="flex justify-center flex-wrap gap-1">
          {[
            'in', 'us', 'ca', 'gb', 'de', 'se', 'ch', 'fr',
            'ng', 'ae', 'lk', 'cn', 'jp', 'au',
            'ar', 'gh', 'tz',
          ].map((code) => (
            <img
              key={code}
              src={`https://flagcdn.com/h20/${code}.png`}
              alt={code}
              className="h-4 w-6 object-cover"
            />
          ))}
        </div>
      </div>
    
    </footer>
      <div className="bg-[#0b0b4e] py-4 text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Xpecto Logo" className="h-6" />
        </div>

        {/* Center - Policies */}
        <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-400">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Trademark Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white">GDPR Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Cookie Policy</a>
        </div>

      
        <div className="flex flex-col md:items-end items-center text-xs text-gray-400">
          <span>Copyright © 2013-2024 Xpecto® IT Solutions Pvt Ltd. All rights reserved.</span>
          <div className="flex items-center gap-2 mt-1">
            <img src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=someID" alt="DMCA" className="h-5" />
            <img src="https://images.dmca.com/Badges/copyscape.png" alt="Copyscape" className="h-5" />
          </div>
        </div>

      </div>
    </div>
   </>
  );
};

export default Footer;
