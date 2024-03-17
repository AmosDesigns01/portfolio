import React from 'react';
import HeroImg from '../../assets/mydp.jpeg';
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <div className='pt-0' id='about'>
        <div className="container max-w-7xl mx-auto pt-14">
            <div className="p-4 md:flex items-center justify-between sm:flex-col md:flex-row">
                {/* hero left content */}
                <div className="w-full md:basis-1/2">
                    <h5 className='text-headingColor font-semibold text-xs' data-aos='fade-right' data-aos-duration='1500'>Hello welcome</h5>
                    <h1 className='text-headingColor font-extrabold text-3xl mt-4' data-aos='fade-up' data-aos-duration='1500'>I'm Abiodun Oluwapelumi Amos <br />Software Developer</h1>

                    <div className="flex items-center gap-6 mt-7" data-aos='fade-up' data-aos-duration='1800' data-aos-delay='200'>
                        <a href="#contact"><button className='bg-headingColor text-white font-medium flex items-center gap-2 hover:bg-primaryColor easse-in duration-300 py-2 px-4 rounded-md'><i className="ri-mail-line"></i>Hire me</button></a>
                        <a className='text-headingColor font-semibold text-base border-b-2 border-solid border-headingColor hover:border-primaryColor ease-in duration-300' href="#portfolio">See Portfolio</a>
                    </div>

                    {/* sm:pl-14 smpr-10 */}
                    <p className="text-headingColor font-medium text-base mt-6 flex gap-2 sm:pl-14 sm:pr-10" data-aos='fade-left' data-aos-duration='1500'>
                        <span><i class="ri-apps-2-line"></i></span>

                        As a passionate front-end developer, I strive to create captivating user experiences through 
                        elegant and efficient code. With a keen eye for design and a commitment to staying updated with 
                        the latest web technologies, I craft visually stunning websites that not only meet but exceed user 
                        expectations. Let's bring your ideas to life!
                    </p>

                    <div className="flex items-center gap-5 mt-14" data-aos='fade-up' data-aos-duration='1800' data-aos-delay='200'>
                        <span className="text-headingColor text-base font-medium">Follow me:</span>
                        <span className='text-headingColor font-medium text-base'><a target='blank' href="https://www.instagram.com/_amosdesigns?igsh=MWFwMTc0dzl1czRiMQ%3D%3D&utm_source=qr"><i class="ri-instagram-line"></i></a></span>
                        <span className='text-headingColor font-medium text-base'><a target='blank' href="https://twitter.com/Pelumi_Amos1"><i class="ri-twitter-x-line"></i></a></span>
                        <span className='text-headingColor font-medium text-base'><a target='blank' href="https://www.linkedin.com/in/abiodun-oluwapelumi-6b340019a/"><i class="ri-linkedin-fill"></i></a></span>
                        <span className='text-headingColor font-medium text-base'><a target='blank' href="https://github.com/AmosDesigns01"><i class="ri-github-fill"></i></a></span>
                        <span className='text-headingColor font-medium text-base'><a target='blank' href="https://www.behance.net/_amosdesigns"><i class="ri-behance-line"></i></a></span>
                        <span className='text-headingColor font-medium text-base'><a target='blank' href="https://medium.com/@Amos-Designs"><i class="ri-medium-line"></i></a></span>
                    </div>
                </div>
                

                
                {/* hero image */}
                <div className='basis-1/3 mt-10 sm-mt-0' data-aos='fade-right' data-aos-duration='1800'>
                    <figure className='border-8 border-solid border-primaryColor rounded-full overflow-hidden'>
                        <img className='rounded-full hover:scale-110 ease-in duration-300' src={HeroImg} alt="hero image" />
                    </figure>
                </div>

                {/* hero right content */}
                <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
                    <div className="mb-10">
                        <h2 className="text-headingColor font-bold text-3xl">
                            <CountUp start={0} end={4} duration={2} suffix='+'/>
                        </h2>
                        <h4 className='text-headingColor font-semibold text-lg'>Years Of Experience</h4>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-headingColor font-bold text-3xl">
                            <CountUp start={0} end={100} duration={2} suffix='%'/>
                        </h2>
                        <h4 className='text-headingColor font-semibold text-lg'>Success Rate</h4>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-headingColor font-bold text-3xl">
                            <CountUp start={0} end={70} duration={2} suffix='+'/>
                        </h2>
                        <h4 className='text-headingColor font-semibold text-lg'>Happy Clients</h4>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-headingColor font-bold text-3xl">
                            <CountUp start={0} end={120} duration={2} suffix='+'/>
                        </h2>
                        <h4 className='text-headingColor font-semibold text-lg'>Project Completed</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero