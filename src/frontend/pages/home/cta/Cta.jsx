import React from 'react'
import { Link } from 'react-router-dom'
import Champions from '../../../../assets/img/champions.png'

const Cta = () => {
  return (
    <div className="w-full bg-zinc-300 py-10 md:py-20 select-none bg-[url('/src/assets/img/Background.png')] relative z-10 overflow-hidden before:absolute before:inset-0 before:z-[1] before:bg-gradient-to-tr before:from-gray-800/50 before:to-zinc-800/50 before:mix-blend-multiply *:z-10">
        <div className='flex max-sm:flex-col items-center relative z-10 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl lg:px-0 px-8 mx-auto w-full py-5 flex-wrap gap-10'>
            <div className='w-full text-center'>
                <div className="w-full text-base font-semibold text-gray-200">Our Ecosystem</div>
                <div className="w-full lg:text-4xl md:text-3xl text-xl font-bold text-gray-200 text-balance">A growing network of 300+ Integrations.</div>
                <div className="w-full lg:text-lg md:text-base text-sm text-gray-300 pb-2 mt-4 text-balance">Developers, traders, and liquidity providers participate together in a financial marketplace that is open and accessible to all.</div>
                {/* <div className='mt-4'>
                    <Link className='text-base font-semibold text-gray-300 md:hover:translate-x-1 inline-block duration-300'>Explore All</Link>
                </div> */}
            </div>
            <div className="grid gap-10 w-full">
                <img className='lg:w-1/2 md:w-2/3 w-10/12 mx-auto' src={Champions} alt="" />
            </div>
            <div className='w-full text-center'>
                {/* <div className="w-full text-base font-semibold text-gray-200">Our Ecosystem</div> */}
                <div className="w-full lg:text-3xl md:text-2xl text-xl font-bold text-gray-200 text-balance">A crypto casino and sportsbook powered by the PION protcol</div>
                {/* <div className="w-full lg:text-lg md:text-base text-sm text-gray-300 pb-2 mt-4 text-balance">Developers, traders, and liquidity providers participate together in a financial marketplace that is open and accessible to all.</div> */}
                {/* <div className='mt-4'>
                    <Link className='text-base font-semibold text-gray-300 md:hover:translate-x-1 inline-block duration-300'>Explore All</Link>
                </div> */}
            </div>
            {/* <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 w-full items-stretch'>
                <div className="grow">
                    <div className="w-full grid rounded-xl lg:p-10 p-5 bg-gradient-to-tr from-gray-800 via-zinc-800 to-zinc-700 h-full relative hover:bg-gradient-to-tl cursor-pointer hover:-translate-y-1 duration-200">
                        <span className='inline-block absolute md:top-10 top-5 md:right-10 right-5 md:text-sm text-xs text-white bg-zinc-100/10 py-1 px-2 rounded-md'>Wallet</span>
                        <div className="size-20 mb-5">
                            <img className='size-full' src="https://uniswap.org/cdn-cgi/image/width=256/ecosystem/Coin98%20Wallet.png" alt="" />
                        </div>
                        <div className="w-full md:text-lg text-base font-semibold text-white">Coin98 Wallet</div>
                        <div className="w-full md:text-base text-xs text-white">All in one DeFi solution.</div>
                    </div>
                </div>
                <div className="grow">
                    <div className="w-full grid rounded-xl lg:p-10 p-5 bg-gradient-to-tr from-gray-800 via-zinc-800 to-zinc-700 h-full relative hover:bg-gradient-to-tl cursor-pointer hover:-translate-y-1 duration-200">
                        <span className='inline-block absolute md:top-10 top-5 md:right-10 right-5 md:text-sm text-xs text-white bg-zinc-100/10 py-1 px-2 rounded-md'>Wallet</span>
                        <div className="size-20 mb-5">
                            <img className='size-full' src="https://uniswap.org/cdn-cgi/image/width=256/ecosystem/Coin98%20Wallet.png" alt="" />
                        </div>
                        <div className="w-full md:text-lg text-base font-semibold text-white">Coin98 Wallet</div>
                        <div className="w-full md:text-base text-xs text-white">All in one DeFi solution.</div>
                    </div>
                </div>
                <div className="grow">
                    <div className="w-full grid rounded-xl lg:p-10 p-5 bg-gradient-to-tr from-gray-800 via-zinc-800 to-zinc-700 h-full relative hover:bg-gradient-to-tl cursor-pointer hover:-translate-y-1 duration-200">
                        <span className='inline-block absolute md:top-10 top-5 md:right-10 right-5 md:text-sm text-xs text-white bg-zinc-100/10 py-1 px-2 rounded-md'>Wallet</span>
                        <div className="size-20 mb-5">
                            <img className='size-full' src="https://uniswap.org/cdn-cgi/image/width=256/ecosystem/Coin98%20Wallet.png" alt="" />
                        </div>
                        <div className="w-full md:text-lg text-base font-semibold text-white">Coin98 Wallet</div>
                        <div className="w-full md:text-base text-xs text-white">All in one DeFi solution.</div>
                    </div>
                </div>
            </div> */}

            {/* <div className='sm:mb-0 mb-5'>
                <div className='img lg:size-80 sm:size-72 size-44'>
                    <img className='sm:ms-auto size-full' src={governance} alt="governance" />
                </div>
            </div> */}

        </div>
    </div>
  )
}

export default Cta