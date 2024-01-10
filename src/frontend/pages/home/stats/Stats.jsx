import React from 'react'

const Stats = () => {
  return (
    <div className="w-full select-none">
        <div className='max-w-2xl 2xl:max-w-5xl justify-center xl:max-w-4xl lg:max-w-3xl lg:px-0 px-8 max-lg:gap-y-8 *:relative *:z-10 mx-auto flex flex-wrap items-center w-full overflow-hidden rounded-md py-8 relative bg-zinc-300'>
            <div className='lg:w-1/3 w-1/2 text-center'>
                <div className="w-full md:text-2xl text-xl text-gray-700 font-bold">$22M</div>
                <div className="w-full md:text-base text-sm text-gray-800 font-semibold pt-2">Daily Trade Volume</div>
            </div>
            <div className='lg:w-1/3 w-1/2 text-center'>
                <div className="w-full md:text-2xl text-xl text-gray-700 font-bold">$22M</div>
                <div className="w-full md:text-base text-sm text-gray-800 font-semibold pt-2">All Time Trades</div>
            </div>
            <div className='lg:w-1/3 w-1/2 text-center'>
                <div className="w-full md:text-2xl text-xl text-gray-700 font-bold">$22M</div>
                <div className="w-full md:text-base text-sm text-gray-800 font-semibold pt-2">Integrated Casinos</div>
            </div>
            {/* <div className='lg:w-1/4 w-1/2 text-center'>
                <Link className='lg:py-3 py-2 lg:px-5 px-3 bg-gradient-to-br from-theme5 via-theme5 to-theme1 rounded-lg text-base shadow-md text-white ring-2 ring-inset ring-transparent md:hover:ring-theme1 duration-300'>Launch App</Link>
            </div> */}
        </div>
    </div>
  )
}

export default Stats