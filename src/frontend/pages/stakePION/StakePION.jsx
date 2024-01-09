import React from 'react'
import { Link } from 'react-router-dom'

const StakePION = () => {
  return (
    <div className="w-full bg-gradient-to-tr from-gray-800 via-zinc-800 to-zinc-700 pb-10 md:pb-20 select-none lg:pt-32 md:pt-28 justify-center h-dvh">
        <div className='flex flex-col relative z-10 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl lg:px-0 px-8 mx-auto w-full py-5 max-lg:flex-wrap'>
            <div className="w-1/2 p-10 rounded-2xl mx-auto shadow-lg shadow-gray-700 bg-gradient-to-tr from-gray-800 via-zinc-800 to-gray-700">
                <div className="font-bold xl:text-3xl lg:text-2xl text-xl text-balance backdrop-blur-sm text-white text-center">Stake PION today and start earning rewards weekly</div>
                
                <div className='py-10 relative text-center'>
                    <label htmlFor="price" className="block text-base font-medium leading-6 text-gray-200">Staking Amount (in PION)</label>
                    <div className="relative mt-2 rounded-lg shadow-sm">
                        <input type="text" name="price" id="price" className="block text-lg bg-transparent text-center w-full rounded-lg border-0 py-4 px-7 text-gray-100 ring-2 ring-inset ring-gray-500 placeholder:text-gray-200 focus:ring-2 focus:ring-inset focus:ring-zinc-300 sm:text-sm sm:leading-6" placeholder="Enter Number of PION tokens" />
                    </div>
                </div>
                <Link className='md:w-1/2 text-center lg:py-3 py-2 lg:px-5 px-3 bg-gradient-to-br from-gray-600 via-gray-600 to-gray-900 rounded-lg text-sm lg:text-base shadow-md text-white ring-2 ring-inset ring-transparent md:hover:-translate-y-1 block duration-300 font-bold mx-auto'>Stake Now</Link>
            </div>
        </div>
    </div>
  )
}

export default StakePION