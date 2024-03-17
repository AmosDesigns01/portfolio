import React, { useState } from "react";
import Logo1 from '../../assets/logo1.png';
import Logo from '../../assets/logo.png';



const Header = () => {
// declare a state to handle the toggling of the navbar
const [isOpen, setIsOpen] = useState(false);

// function to set the toggling
const toggleNavbar = () => {
  setIsOpen(!isOpen)
};

  return (
    <header className='md:bg-white bg-headingColor  sticky top-0 z-10 text-primaryColor'>
      <section className='max-w-5xl mx-auto p-4 flex justify-between items-center'>
        {/* first logo */}
        <div className="logo md:hidden"> 
          <img className="w-20 h-11" src={Logo1} alt="company_logo"/>
        </div>

        {/* second logo */}
        <div className="logo hidden md:block">
          <img className="w-20 h-11" src={Logo} alt="company_logo"/>
        </div>

        <button className='harmburger md:hidden text-3xl cursor-pointer text-white' onClick={toggleNavbar}>&#9776;</button>

        {/* Desktop Navbar */}
        <nav className='hidden md:block text-lg space-x-8 text-headingColor font-semibold'>
          <a href="#about" className='hover:opacity-90'>About</a>
          <a href="#services" className='hover:opacity-90'>Services</a>
          <a href="#portfolio" className='hover:opacity-90'>Portfolio</a>
          <a href="#contact" className='hover:opacity-90'>Contact</a>
        </nav>
      </section>

      {/* Mobile Navbar */}
      <section className={`absolute text-white top-0 bg-headingColor w-full text-4xl flex-col justify-center origin-top animate-open-menu ${isOpen ? 'flex' : 'hidden'}`}>
          <button className={`px-6 text-white mt-4 text-4xl self-end ${isOpen ? 'flex' : 'hidden'}`} onClick={toggleNavbar}>&times;</button>
          <nav className='flex flex-col min-h-screen items-center py-8'>
            <a href="#about" className='w-full text-center py-8 hover:opacity-90'>About</a>
            <a href="#services" className='w-full text-center py-8 hover:opacity-90'>Services</a>
            <a href="#portfolio" className='w-full text-center py-8 hover:opacity-90'>Portfolio</a>
            <a href="#contact" className='w-full text-center py-8 hover:opacity-90'>Contact</a>
          </nav>
      </section>
    </header>
  )
}

export default Header
