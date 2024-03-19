import React, { useState } from "react";
import Logo1 from '../assets/logo1.png';
import Logo from '../assets/logo.png';



const Header = () => {
// declare a state to handle the toggling of the navbar
const [isOpen, setIsOpen] = useState(false);

// function to set the toggling
const toggleNavbar = () => {
  setIsOpen(!isOpen)
};

  return (
    <header className='md:bg-white bg-headingColor  sticky top-0 z-10 text-primaryColor'>
      {/* Desktop Navbar */}
      <section className='max-w-7xl mx-auto p-4 flex justify-between items-center'>
        {/* Mobile logo */}
        <div className="logo md:hidden"> 
          <img className="w-20 h-11" src={Logo1} alt="company_logo"/>
        </div>

        {/* Desktop logo */}
        <div className="logo hidden md:block">
          <img className="w-20 h-11" src={Logo} alt="company_logo"/>
        </div>

        {/* hamburger */}
        <button className='harmburger md:hidden text-3xl cursor-pointer text-white' onClick={toggleNavbar}>&#9776;</button>

        <nav className='hidden md:block text-base space-x-12 text-headingColor font-semibold'>
          <a href="#about" className='hover:opacity-90'>About</a>
          <a href="#services" className='hover:opacity-90'>Services</a>
          <a href="#portfolio" className='hover:opacity-90'>Portfolio</a>
          <a href="#contact" className='hover:opacity-90'>Contact</a>
        </nav>

        {/* lets talk button */}
        <button className="md:max-h-10 md:text-headingColor hidden text-base font-semibold md:flex md:items-center md:gap-2 md:border md:border-solid md:border-headingColor py-2 px-4 rounded-md md:hover:bg-headingColor md:hover:border-none md:hover:text-white ease-in duration-300"><i className="ri-send-plane-line"></i>Let's Talk</button>
        
      </section>


      {/* Mobile Navbar */}
      <section className={`absolute text-white top-0 bg-headingColor w-full text-4xl flex-col justify-center origin-top animate-open-menu ${isOpen ? 'flex' : 'hidden'}`}>
          <button className={`px-6 text-white mt-4 text-4xl self-end ${isOpen ? 'flex' : 'hidden'}`} onClick={toggleNavbar}>&times;</button>
          <nav className='flex flex-col min-h-screen items-center py-8'>
            <a href="#about" className={`w-full text-center py-8 hover:opacity-90 ${isOpen ? 'block' : 'hidden'}`} onClick={toggleNavbar}>About</a>
            <a href="#services" className={`w-full text-center py-8 hover:opacity-90 ${isOpen ? 'block' : 'hidden'}`} onClick={toggleNavbar}>Services</a>
            <a href="#portfolio" className={`w-full text-center py-8 hover:opacity-90 ${isOpen ? 'block' : 'hidden'}`} onClick={toggleNavbar}>Portfolio</a>
            <a href="#contact" className={`w-full text-center py-8 hover:opacity-90 ${isOpen ? 'block' : 'hidden'}`} onClick={toggleNavbar}>Contact</a>
          </nav>
      </section>
    </header>
  )
}

export default Header
