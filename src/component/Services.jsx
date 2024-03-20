import React from 'react'

const Services = () => {
  return (
    <div id='services'>
        <div className="max-w-7xl p-4 mx-auto lg:pt-5 mt-11">
            <div className="text-center">
                <h2 className='text-headingColor font-extrabold text-4xl'>My Services</h2>
                <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7 my-5'>Elevating businesses with polished, user-centric digital solutions crafted to meet their individual requirements.</p>
            </div>

            <div className='flex items-center flex-col md:flex-row justify-center my-10'>
                {/* left card */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                    <div className="flex items-center flex-col sm:flex-row">
                        <div className="flex justify-start w-full mx-auto items-center">
                            <div className="w-full sm:1/2 sm:pr-8">
                                <div data-aos="fade-right" data-aos-duration="1200" className="bg-white p-4 shadow group hover:bg-headingColor cursor-pointer ease-in duration-150">
                                    <h3 className='text-headingColor font-bold mb-3 text-xl group-hover:text-white'>Frontend Development</h3>

                                    <p className='text-primaryColor group-hover:text-white group-hover:font-medium'>
                                        Creating captivating user interfaces and seamless experiences utilizing a versatile toolkit 
                                        including HTML, CSS, and JavaScript, alongside popular libraries such as React and Next.js. 
                                        Dedicated to delivering dynamic web applications that prioritize both aesthetics and functionality.
                                    </p>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>

                {/* right slippery */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                    <div className="flex items-center flex-col sm:flex-row">
                        <div className="flex justify-start w-full mx-auto items-center">
                            <div className="w-full sm:1/2 sm:pr-8">
                                <div data-aos="fade-left" data-aos-duration="1200" className="bg-white p-4 shadow group hover:bg-headingColor cursor-pointer ease-in duration-150">
                                    <h3 className='text-headingColor font-bold mb-3 text-xl group-hover:text-white'>Graphic Designer</h3>

                                    <p className='text-primaryColor group-hover:text-white group-hover:font-medium'>
                                        Bringing ideas to life through visually stunning designs that captivate audiences. Proficient 
                                        in Adobe Creative Suite and skilled in crafting logos, brand identities, and marketing materials that leave a 
                                        lasting impression.
                                    </p>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Services
