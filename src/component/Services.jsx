import React from 'react'

const Services = () => {
  return (
    <div id='services'>
        <div className="max-w-7xl p-4 mx-auto lg:pt-5">
            <div className="text-center">
                <h2 className='text-headingColor font-extrabold text-4xl'>My Services</h2>
                <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'>Empowering businesses with sleek, user-centric web solutions tailored to their unique needs.</p>
            </div>

            <div className="flex flex-col justify-center sm:py-12">
                <div className='w-full py-3 px-2 sm:max-w-xl sm:max-auto sm:px-0'>
                    <div className='relative text-gray-700 antialiased text-sm font-semibold'>

                        {/* vertical line running through the middle */}
                        <div className='hidden absolute w-1 sm:block bg-smallTextcolor h-full left-1/2 transform -translate-x-1/2'></div>


                        {/* left card */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:1/2 sm:pr-8">
                                        <div data-aos="fade-right" data-aos-duration="1200" className="bg-white p-4 shadow group-hover:bg-headingColor curor-pointer ease-in duration-150">
                                            <h3 className='text-headingColor font-bold mb-3 text-xl group-hover:text-white'>Frontend Development</h3>

                                            <p className=''>Creating captivating user interfaces and seamless experiences utilizing a versatile toolkit 
                                                including HTML, CSS, and JavaScript, alongside popular libraries such as React and Next.js. 
                                                Dedicated to delivering dynamic web applications that prioritize both aesthetics and functionality.
                                            </p>
                                        </div>
                                    </div>
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
