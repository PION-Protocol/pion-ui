import React from 'react'
import { Link } from 'react-router-dom'

const CusinoProcess = () => {
  return (
    <div className="w-full bg-gradient-to-t from-gray-300 to-gray-300 py-10 md:py-20 select-none">
        <div className='flex relative z-10 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl lg:px-0 px-8 mx-auto w-full py-5 max-lg:flex-wrap gap-10'>
            <div className="grow">
                <div className="font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-balance backdrop-blur-sm text-gray-800">Casino On-Boarding Process</div>
                <div className="xl:text-xl md:text-lg text-base text-balance font-semibold pt-8 text-gray-800/80">Join Ecosystem</div>
                <div className="md:text-base text-sm text-balance text-gray-800 mt-4">Submit a proposal bankroll funding and based on approval by the governance forum you can start withdrawing funds immediately</div>
                <Link className='mt-8 lg:py-3 py-2 lg:px-8 px-5 rounded-lg text-base shadow-md font-semibold text-gray-900 ring-2 ring-inset ring-gray-900 md:hover:-translate-y-1 inline-block duration-300'>SUBMIT</Link>
            </div>
            <div className="lg:w-1/2">
                <div className="flex flex-col gap-8 before:w-1 before:h-full before:absolute before:inset-y-0 before:left-[22px] before:bg-zinc-700 relative *:relative *:z-10">
                    <div className="w-full flex gap-4 text-gray-700 md:text-lg text-base group/cp">
                        <div className="size-12 min-w-12 rounded-full bg-zinc-700 text-white items-center flex justify-center font-bold md:text-2xl text-xl group-hover/cp:scale-125 duration-150">1</div>
                        <div className="grow pt-3">What the forms will be- sid has to give final criteria</div>
                    </div>
                    <div className="w-full flex gap-4 text-gray-700 md:text-lg text-base group/cp">
                        <div className="size-12 min-w-12 rounded-full bg-zinc-700 text-white items-center flex justify-center font-bold md:text-2xl text-xl group-hover/cp:scale-125 duration-150">2</div>
                        <div className="grow pt-3">Wait for the DAO to take decision</div>
                    </div>
                    <div className="w-full flex gap-4 text-gray-700 md:text-lg text-base group/cp">
                        <div className="size-12 min-w-12 rounded-full bg-zinc-700 text-white items-center flex justify-center font-bold md:text-2xl text-xl group-hover/cp:scale-125 duration-150">3</div>
                        <div className="grow pt-3">DAO begins integrations</div>
                    </div>
                    <div className="w-full flex gap-4 text-gray-700 md:text-lg text-base group/cp">
                        <div className="size-12 min-w-12 rounded-full bg-zinc-700 text-white items-center flex justify-center font-bold md:text-2xl text-xl group-hover/cp:scale-125 duration-150">4</div>
                        <div className="grow pt-3">You’re live!</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CusinoProcess