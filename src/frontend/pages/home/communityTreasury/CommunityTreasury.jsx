import React from 'react'

const CommunityTreasury = () => {
  return (
    <div className="w-full bg-[url('/src/assets/img/Background.png')] py-10 md:py-20 select-none relative z-10 overflow-hidden before:absolute before:inset-0 before:z-[1] before:bg-gradient-to-tr before:from-gray-800/50 before:to-zinc-800/50 before:mix-blend-multiply *:z-10">
        <div className='flex flex-col relative z-10 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl lg:px-0 px-8 mx-auto w-full py-5 max-sm:flex-wrap'>
            <div className="w-full font-bold xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-xl text-gray-100 text-balance">PION Community Treasury</div>
            <div className="w-full md:text-base text-sm text-gray-300 pb-2 mt-4 text-balance">The treasury is composed of the ecosystem reserve (PION tokens) and treasury collectors which earn fees from: </div>
            <div className='grid relative items-stretch gap-5 pt-12'>
                <div className='flex max-md:flex-col relative gap-x-5'>
                    <div className="w-auto text-nowrap md:text-lg text-base font-bold text-gray-100">Platform fees:</div>
                    <div className="w-full md:text-base text-sm text-gray-300 text-balance grow">A percentage of the platform revenue paid by the borrowing casinos</div>
                </div>
                <div className='flex max-md:flex-col relative gap-x-5'>
                    <div className="w-auto text-nowrap md:text-lg text-base font-bold text-gray-100">Hedging Fees:</div>
                    <div className="w-full md:text-base text-sm text-gray-300 text-balance grow">A percentage of the platform fees paid by casinos utilizing hedging services</div>
                </div>
                <div className='flex max-md:flex-col relative gap-x-5'>
                    <div className="w-auto text-nowrap md:text-lg text-base font-bold text-gray-100">Staking:</div>
                    <div className="w-full md:text-base text-sm text-gray-300 text-balance grow">A percentage of the platform fees paid by people staking to earn rewards</div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default CommunityTreasury