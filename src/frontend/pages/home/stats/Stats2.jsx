import React from 'react'

const Stats2 = () => {
  return (
    <div className="!w-10/12 py-12 max-md:px-8 select-none">
        <div className='max-w-2xl 2xl:max-w-5xl xl:max-w-4xl lg:max-w-3xl lg:px-0 px-8 max-lg:gap-y-8 *:relative *:z-10 mx-auto flex flex-wrap items-center w-full overflow-hidden rounded-md py-8 relative before:z-[1] before:w-56 before:h-56 before:absolute before:inset-0 max-lg:before:top-auto before:left-auto bg-zinc-300 before:bg-gradient-to-tl before:from-zinc-400 before:via-zinc-300 before:to-zinc-300 lg:before:-translate-y-[35%]'>
            <div className='lg:w-1/3 w-1/2 text-center'>
                <div className="w-full text-sm text-gray-600 font-semibold pb-2">Total Volume Locked</div>
                <div className="w-full text-2xl text-gray-900 font-bold">$5M</div>
            </div>
            <div className='lg:w-1/3 w-1/2 text-center'>
                <div className="w-full text-sm text-gray-600 font-semibold pb-2">Total Investors</div>
                <div className="w-full text-2xl text-gray-900 font-bold">1K <sup>+</sup></div>
            </div>
            <div className='lg:w-1/3 w-1/2 text-center'>
                <div className="w-full text-sm text-gray-600 font-semibold pb-2">Total Integrations</div>
                <div className="w-full text-2xl text-gray-900 font-bold">100<sup>+</sup></div>
            </div>
        </div>
    </div>
  )
}

export default Stats2