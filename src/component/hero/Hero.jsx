import React from 'react';
import HeroImg from '../../assets/mydp.jpeg';
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <div className='pt-0' id='about'>
        <div className="container max-w-5xl mx-auto pt-14">
            <div className="p-4 md:flex items-center justify-between sm:flex-col md:flex-row">
                {/* hero left content */}
                <div className="w-full md:basis-1/2">
                    <h5 className='text-headingColor font-semibold text-xs' data-aos='fade-right' data-aos-duration='1500'>Hello welcome</h5>
                    <h1 className='text-headingColor font-extrabold text-3xl mt-4' data-aos='fade-up' data-aos-duration='1500'>I'm Abiodun Oluwapelumi Amos <br />Software Developer</h1>

                    <div className="flex items-center gap-6 mt-7"data-aos='fade-up' data-aos-duration='1800' data-aos-delay='200'>
                        <a href="#contact"><button><i className="ri-mail-line"></i>Hire me</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero