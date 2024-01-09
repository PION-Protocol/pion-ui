import React from 'react'

const Ecosystem = () => {
  return (
    <div className="w-full bg-gradient-to-tr from-gray-700 via-zinc-700 to-zinc-600 pb-10 md:pb-20 select-none lg:pt-32 md:pt-28">
        <div className='flex flex-col relative z-10 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl lg:px-0 px-8 mx-auto w-full py-5 max-lg:flex-wrap'>
                <div className="font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-balance backdrop-blur-sm text-white">Explore the PION Ecosystem</div>
                {/* <div className="xl:text-xl md:text-lg text-base text-balance font-semibold pt-8 text-white/80">JOIN ECOSYSTEM</div> */}
                <div className="md:text-base text-sm text-balance text-white mt-4">Swap, earn, vote, and more with hundreds of DeFi apps, integrations, and tools built on the PION Protocol.</div>
                <div className="w-full">
                    <label className="relative inline-block pt-5">
                        <span className="sr-only">Search</span>
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" id="search" x="0px" y="0px" viewBox="0 0 24 24" className='size-5 mt-5 fill-slate-300' xmlns="http://www.w3.org/2000/svg"><g><path d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31 c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02 z"></path></g></svg>
                        </span>
                        <input className="placeholder:text-slate-400 block bg-transparent w-full border-2 border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
                    </label>
                </div>
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-10 w-full items-stretch pt-20'>
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
                </div>
        </div>
        
    </div>
  )
}

export default Ecosystem