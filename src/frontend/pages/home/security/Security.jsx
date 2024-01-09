import React from 'react'
import { Link } from 'react-router-dom'

const Security = () => {
  return (
    <div className="w-full bg-gradient-to-b from-gray-400 to-white md:py-20 select-none relative z-10">
        <div className='flex flex-col relative z-10 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl lg:px-0 px-8 mx-auto w-full py-5 max-sm:flex-wrap gap-14'>
            <div className="w-full font-bold xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-xl text-gray-800 text-balance">Security</div>
            <div className='grid md:grid-cols-2 relative items-stretch gap-20'>
                <div className='grow flex flex-col relative *:z-10 *:md:w-2/3'>
                    <div className="w-full md:text-lg text-base font-bold text-gray-800 text-balance">PION Safety Module</div>
                    <div className="w-full md:text-base text-sm text-gray-700 pb-2 mt-4 text-balance grow">The PION Protocol is secured with a safe backstop for protocol insolvency </div>
                    <div className='grid gap-3 pt-4'>
                        <Link className='text-sm font-bold text-gray-700 inline-flex items-center group/bx'>Learn more
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className='size-3 ml-2 translate-y-[2px] group-hover/bx:md:translate-x-1 duration-300' xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                        </Link>
                    </div>
                </div>
                <div className='grow flex flex-col relative *:z-10 *:md:w-2/3'>
                    <div className="w-full md:text-lg text-base font-bold text-gray-800 text-balance">Bug Bounty</div>
                    <div className="w-full md:text-base text-sm text-gray-700 pb-2 mt-4 text-balance grow">Submit a bug here through our community driven bug bounty program  </div>
                    <div className='grid gap-3 pt-4'>
                        <Link className='text-sm font-bold text-gray-700 inline-flex items-center group/bx'>Learn more
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className='size-3 ml-2 translate-y-[2px] group-hover/bx:md:translate-x-1 duration-300' xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Security