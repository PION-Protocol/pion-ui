import React from 'react'
import { Link } from 'react-router-dom'

const HowItWorks = () => {
  return (
    <div className="w-full bg-gradient-to-tr from-gray-800 via-zinc-800 to-gray-900 py-10 md:py-20 select-none">
        <div className='flex flex-col relative z-10 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl lg:px-0 px-8 mx-auto w-full py-5 max-sm:flex-wrap md:gap-14 gap-8'>
            <div className="w-full font-bold xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-xl text-gray-200 text-balance text-center">How it Works</div>
            <div className='grid md:grid-cols-3 relative items-stretch gap-x-20 after:absolute after:inset-0 after:w-full after:h-1 after:bg-gray-700 after:m-auto after:z-0 *:z-10'>
                <div className='grow bg-gray-700 rounded-2xl p-10 flex overflow-hidden flex-col relative ring-4 ring-gray-800 *:z-10'>
                    <div className='absolute inset-y-0 m-auto -right-4 h-28 lg:text-8xl md:text-7xl text-6xl font-bold text-gray-600 z-0'>01</div>
                    <div className="w-full md:text-lg text-base font-bold text-gray-200 text-balance">Submit PION request for comment</div>
                    <div className="w-full md:text-base text-sm text-gray-300 pb-2 mt-4 text-balance grow">Discuss with community members and receive feedback.</div>
                    <div className='grid gap-3 pt-4'>
                        <Link className='text-sm font-bold text-gray-300 inline-flex items-center group/bx'>Visit Docs
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className='size-3 ml-2 translate-y-[2px] group-hover/bx:md:translate-x-1 duration-300' xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                        </Link>
                    </div>
                </div>
                <div className='grow bg-gray-700 rounded-2xl p-10 flex overflow-hidden flex-col relative ring-4 ring-gray-800 *:z-10'>
                    <div className='absolute inset-y-0 m-auto -right-4 h-28 lg:text-8xl md:text-7xl text-6xl font-bold text-gray-600 z-0'>02</div>
                    <div className="w-full md:text-lg text-base font-bold text-gray-200 text-balance">Create a Snapshot</div>
                    <div className="w-full md:text-base text-sm text-gray-300 pb-2 mt-4 text-balance grow">Gauge community sentiment on a new proposal through a Snapshot.</div>
                    <div className='grid gap-3 pt-4'>
                        <Link className='text-sm font-bold text-gray-300 inline-flex items-center group/bx'>How to create Snapshot
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className='size-3 ml-2 translate-y-[2px] group-hover/bx:md:translate-x-1 duration-300' xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                        </Link>
                    </div>
                </div>
                <div className='grow bg-gray-700 rounded-2xl p-10 flex overflow-hidden flex-col relative ring-4 ring-gray-800 *:z-10'>
                    <div className='absolute inset-y-0 m-auto -right-4 h-28 lg:text-8xl md:text-7xl text-6xl font-bold text-gray-600 z-0'>03</div>
                    <div className="w-full md:text-lg text-base font-bold text-gray-200 text-balance">Submit PION request for improvement </div>
                    <div className="w-full md:text-base text-sm text-gray-300 pb-2 mt-4 text-balance grow">The proposal is submitted through a GitHub pull request, and the community votes on approvals</div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default HowItWorks