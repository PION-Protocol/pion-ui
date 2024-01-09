import React from 'react'
import { Link } from 'react-router-dom'

const StakePION = () => {
  return (
    <div className="w-full flex items-center bg-gradient-to-tr from-gray-800 via-zinc-800 to-zinc-700 pb-10 md:pb-20 select-none lg:pt-32 md:pt-28 justify-center h-dvh min-h-[600px]">
        <div className='flex flex-col relative z-10 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl lg:px-0 px-8 mx-auto w-full py-5 max-lg:flex-wrap'>
            <div className="xl:w-2/5 lg:w-3/6 p-8 border-2 border-gray-500 rounded-2xl mx-auto shadow-lg shadow-gray-700 bg-gradient-to-tr from-gray-800 via-zinc-800 to-gray-700">
                <div className="font-bold xl:text-3xl lg:text-2xl text-xl text-balance backdrop-blur-sm text-white text-center">Stake PION today and start earning rewards weekly</div>
                
                <div className='py-10 relative text-center'>
                    <div className="relative md:w-2/3 mx-auto">
                        <input type="text" id="floating_filled" class="block text-center rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " />
                        <label for="floating_filled" class="absolute left-0 text-sm text-gray-300 duration-300 w-full -translate-y-4 scale-75 top-4 z-10 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Staking Amount (in PION)</label>
                    </div>
                </div>
                <Link className='md:w-2/3 text-center lg:py-3 py-2 lg:px-5 px-3 bg-gradient-to-br from-gray-600 via-gray-600 to-gray-900 rounded-lg text-sm lg:text-base shadow-md text-white ring-2 ring-inset ring-transparent md:hover:-translate-y-1 block duration-300 font-bold mx-auto'>Stake Now</Link>
            </div>
        </div>
    </div>
  )
}

export default StakePION