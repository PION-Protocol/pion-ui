import React from 'react'
import { Link } from 'react-router-dom'
import kraken from '../../../../assets/img/kraken-svgrepo-com.svg'

const Cta2 = () => {
  return (
    <div className="w-full bg-gradient-to-b from-zinc-300 md:py-12 py-5 select-none">
        <div className='flex h-full items-center relative z-10 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl lg:px-0 px-8 mx-auto w-full lg:py-16 md:py-12 py-5 flex-wrap'>
                <div className='sm:w-1/2 w-full'>
                    <div className=''>
                        <img className='md:size-20 size-16' src={kraken} alt="kraken" />
                    </div>
                    <div className="w-full text-base text-gray-800 pt-5">Protocol Governance</div>
                    <div className="w-full lg:text-4xl md:text-3xl text-xl font-bold text-gray-800 text-balance ">Superpowers for <br className='sm:block hidden' /> DeFi developers.</div>
            
                </div>
                <div className='sm:w-1/2 w-full '>
                    <div className="lg:w-3/4 md:w-4/5 w-full lg:text-lg md:text-base text-sm text-gray-700 pb-2 mt-4 text-pretty">We are soon launching the PION DAO community led 
to fund people building apps, tools and activity on the 
PION protocol</div>
                    <div className='pt-3'>
                        <div className='grid gap-3 pb-5'>
                            <Link className='text-sm font-bold text-gray-700 inline-flex items-center group/bx'>Apply for a Grant
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className='size-3 ml-2 translate-y-[2px] group-hover/bx:md:translate-x-1 duration-300' xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                            </Link>
                        </div>
                        <Link className='lg:py-3 py-2 lg:px-8 px-5 rounded-lg text-base shadow-md font-semibold text-gray-700 ring-2 ring-inset ring-gray-700 md:hover:-translate-y-1 inline-block duration-300'>Learn More</Link>
                    </div>
                </div>

        </div>
    </div>
  )
}

export default Cta2