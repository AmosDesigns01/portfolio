import React from 'react';
import data from "../assets/data/PortfolioData"

const Portfolio = () => {
  return (
    <div id='portfolio'>
        <div className='max-w-7xl mx-auto p-4'>
            <div className="flex items-center justify-between flex-wrap">
                <div className="mb-7 sm:mb-0">
                    <h3 className="text-headingColor text-4xl font-bold">My Recent Projects</h3>
                </div>

                <div className="flex gap-3">
                    <button className="text-headingColor border border-solid border-headingColor py-2 px-4 rounded-lg">All</button>
                    <button className="text-headingColor border border-solid border-headingColor py-2 px-4 rounded-lg">Graphic Design</button>
                    <button className="text-headingColor border border-solid border-headingColor py-2 px-4 rounded-lg">Web Design</button>
                </div>

                <div className="flex items-center justify-center gap-4 flex-wrap mt-10">
                    {
                        data?.map((portfolio,index) => {
                            return(
                                <div className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z[1]' key={portfolio.id}>
                                    <figure>
                                        <img className='rounded-[8px]' src={portfolio.imgUrl} alt="" />
                                    </figure>
                                    <div className='w-full h-full bg-headingColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block'>
                                        <div className="w-full h-full flex items-center justify-center">
                                            <button className='text-white bg-primaryColor hover:bg-headingColor py-2 px-4 rounded-lg font-medium ease-in duration-200'>See Details</button>
                                        </div>
                                    </div>
                                    {/* <h2 className='text-headingColor font-bold text-2xl'>{portfolio.title}</h2>
                                    <p>{portfolio.description}</p> */}
                                </div>
                            )
                        })
                    }
                    
                </div>
                <div className='text-center mt-6 mx-auto'>
                    <button className='text-white bg-primaryColor hover:bg-headingColor py-2 px-4 rounded-lg font-medium ease-in duration-200 '>Load More</button>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Portfolio