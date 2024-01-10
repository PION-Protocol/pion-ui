import React from 'react'
import { Link } from 'react-router-dom'

const YourAccount = () => {
  return (
    <div className="w-full flex bg-gradient-to-tr from-gray-800 via-zinc-800 to-zinc-700 pb-10 md:pb-20 select-none lg:pt-32 pt-24 md:pt-28 min-h-[600px] z-10 relative">
        <div className='flex flex-col relative z-10 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl lg:px-0 px-8 mx-auto w-full py-5 max-lg:flex-wrap'>
            <div className="flex justify-between items-center pb-8 mb-8 border-b-2 border-white/10">
                <div className="grow font-bold xl:text-3xl lg:text-2xl md:text-xl text-lg text-balance text-white">Your Account</div>
                <div className="inline-flex items-center gap-3">
                    <Link to="/" className='lg:py-3 py-2 lg:px-5 px-3 bg-transparent rounded-lg text-sm lg:text-base shadow-md text-white/60 ring-2 ring-inset ring-white/50 md:hover:-translate-y-1 inline-flex items-center gap-2 duration-300'>Withdraw <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeiinejoin="round" className='size-4' xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg></Link>
                    <Link to="/" className='lg:py-3 py-2 lg:px-5 px-3 bg-gradient-to-br from-gray-900 via-gray-900 to-zinc-900 rounded-lg text-sm lg:text-base shadow-md text-white ring-2 ring-inset ring-zinc-900 md:hover:-translate-y-1 inline-flex items-center gap-2 duration-300'>Deposit <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeiinejoin="round" className='size-4' xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></Link>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-8 gap-5 pb-8">
                <div className="flex flex-col gap-4 rounded-2xl md:p-10 p-5 border-2 border-white/10 bg-white/5 *:flex *:items-center *:border-b-2 *:border-white/10 *:pb-4">
                    <div className='last:pb-0 last:border-b-0'>
                        <div className="grow md:text-lg text-base text-white/70">Staked Amount (in PION)</div>
                        <div className="grow-0 md:text-2xl text-xl text-white">1000</div>
                    </div>
                    <div className='last:pb-0 last:border-b-0'>
                        <div className="grow md:text-lg text-base text-white/70">Percentage of Pool</div>
                        <div className="grow-0 md:text-2xl text-xl text-white">0.5</div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 rounded-2xl md:p-10 p-5 border-2 border-white/10 bg-white/5 *:flex *:items-center *:border-b-2 *:border-white/10 *:pb-4">
                    <div className='last:pb-0 last:border-b-0'>
                        <div className="grow md:text-lg text-base text-white/70">Rewards (This week)</div>
                        <div className="grow-0 md:text-2xl text-xl text-white">1000 USDT</div>
                    </div>
                    <div className='last:pb-0 last:border-b-0'>
                        <div className="grow md:text-lg text-base text-white/70">Total Rewards</div>
                        <div className="grow-0 md:text-2xl text-xl text-white">2000 USDT</div>
                    </div>
                </div>
            </div>
            <div className="grow font-bold xl:text-3xl lg:text-2xl md:text-xl text-lg text-balance text-white md:pt-8 pt-0">Transaction History</div>
            <div className="grid grid-cols-1 gap-8 pt-4">
                <div className="flex flex-col overflow-x-auto">
                    <table className="table-auto hover:table-fixed border-separate border-spacing-y-4 md:text-base text-sm">
                        <thead>
                            <tr>
                                <th className='text-white/70 md:px-5 px-3 md:font-semibold font-normal text-left first:rounded-l-xl last:rounded-r-xl text-nowrap'>Date/Time</th>
                                <th className='text-white/70 md:px-5 px-3 md:font-semibold font-normal text-left first:rounded-l-xl last:rounded-r-xl text-nowrap'>Contract Address</th>
                                <th className='text-white/70 md:px-5 px-3 md:font-semibold font-normal text-left first:rounded-l-xl last:rounded-r-xl text-nowrap'>Action</th>
                                <th className='text-white/70 md:px-5 px-3 md:font-semibold font-normal text-left first:rounded-l-xl last:rounded-r-xl text-nowrap'>% Share of Pool</th>
                                <th className='text-white/70 md:px-5 px-3 md:font-semibold font-normal text-left first:rounded-l-xl last:rounded-r-xl text-nowrap'>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='group/history invest'>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-white/70 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>20-12-2022</td>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-white/70 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>06x90a...521</td>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-green-400 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>Invest</td>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-white/70 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>0.5%</td>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-white/70 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className='size-4 group-[.invest]/history:inline text-red-400 hidden -mt-1 mr-1' xmlns="http://www.w3.org/2000/svg"><g id="Square_Minus"><g><path d="M18.438,20.938H5.564a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H18.438a2.5,2.5,0,0,1,2.5,2.5V18.438A2.5,2.5,0,0,1,18.438,20.938ZM5.564,4.064a1.5,1.5,0,0,0-1.5,1.5V18.438a1.5,1.5,0,0,0,1.5,1.5H18.438a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z"></path><path d="M9,12.5a.5.5,0,0,1,0-1h6a.5.5,0,0,1,0,1Z"></path></g></g></svg>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className='size-4 group-[.withdraw]/history:inline text-green-400 hidden -mt-1 mr-1' xmlns="http://www.w3.org/2000/svg"><g id="Square_Plus"><g><path d="M18.438,20.938H5.563a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H18.438a2.5,2.5,0,0,1,2.5,2.5V18.438A2.5,2.5,0,0,1,18.438,20.938ZM5.563,4.064a1.5,1.5,0,0,0-1.5,1.5V18.438a1.5,1.5,0,0,0,1.5,1.5H18.438a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z"></path><path d="M15,12.5H12.5V15a.5.5,0,0,1-1,0V12.5H9a.5.5,0,0,1,0-1h2.5V9a.5.5,0,0,1,1,0v2.5H15A.5.5,0,0,1,15,12.5Z"></path></g></g></svg>
                                    5,000</td>
                            </tr>
                            <tr className='group/history withdraw'>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-white/70 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>20-12-2022</td>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-white/70 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>06x90a...521</td>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-green-400 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>Withdraw</td>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-white/70 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>0.5%</td>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-white/70 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className='size-4 group-[.invest]/history:inline text-red-400 hidden -mt-1 mr-1' xmlns="http://www.w3.org/2000/svg"><g id="Square_Minus"><g><path d="M18.438,20.938H5.564a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H18.438a2.5,2.5,0,0,1,2.5,2.5V18.438A2.5,2.5,0,0,1,18.438,20.938ZM5.564,4.064a1.5,1.5,0,0,0-1.5,1.5V18.438a1.5,1.5,0,0,0,1.5,1.5H18.438a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z"></path><path d="M9,12.5a.5.5,0,0,1,0-1h6a.5.5,0,0,1,0,1Z"></path></g></g></svg>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className='size-4 group-[.withdraw]/history:inline text-green-400 hidden -mt-1 mr-1' xmlns="http://www.w3.org/2000/svg"><g id="Square_Plus"><g><path d="M18.438,20.938H5.563a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H18.438a2.5,2.5,0,0,1,2.5,2.5V18.438A2.5,2.5,0,0,1,18.438,20.938ZM5.563,4.064a1.5,1.5,0,0,0-1.5,1.5V18.438a1.5,1.5,0,0,0,1.5,1.5H18.438a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z"></path><path d="M15,12.5H12.5V15a.5.5,0,0,1-1,0V12.5H9a.5.5,0,0,1,0-1h2.5V9a.5.5,0,0,1,1,0v2.5H15A.5.5,0,0,1,15,12.5Z"></path></g></g></svg>
                                    5,000</td>
                            </tr>
                            <tr className='group/history invest'>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-white/70 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>20-12-2022</td>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-white/70 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>06x90a...521</td>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-green-400 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>Invest</td>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-white/70 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>0.5%</td>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-white/70 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className='size-4 group-[.invest]/history:inline text-red-400 hidden -mt-1 mr-1' xmlns="http://www.w3.org/2000/svg"><g id="Square_Minus"><g><path d="M18.438,20.938H5.564a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H18.438a2.5,2.5,0,0,1,2.5,2.5V18.438A2.5,2.5,0,0,1,18.438,20.938ZM5.564,4.064a1.5,1.5,0,0,0-1.5,1.5V18.438a1.5,1.5,0,0,0,1.5,1.5H18.438a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z"></path><path d="M9,12.5a.5.5,0,0,1,0-1h6a.5.5,0,0,1,0,1Z"></path></g></g></svg>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className='size-4 group-[.withdraw]/history:inline text-green-400 hidden -mt-1 mr-1' xmlns="http://www.w3.org/2000/svg"><g id="Square_Plus"><g><path d="M18.438,20.938H5.563a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H18.438a2.5,2.5,0,0,1,2.5,2.5V18.438A2.5,2.5,0,0,1,18.438,20.938ZM5.563,4.064a1.5,1.5,0,0,0-1.5,1.5V18.438a1.5,1.5,0,0,0,1.5,1.5H18.438a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z"></path><path d="M15,12.5H12.5V15a.5.5,0,0,1-1,0V12.5H9a.5.5,0,0,1,0-1h2.5V9a.5.5,0,0,1,1,0v2.5H15A.5.5,0,0,1,15,12.5Z"></path></g></g></svg>
                                    5,000</td>
                            </tr>
                            <tr className='group/history invest'>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-white/70 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>20-12-2022</td>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-white/70 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>06x90a...521</td>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-green-400 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>Invest</td>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-white/70 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>0.5%</td>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-white/70 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className='size-4 group-[.invest]/history:inline text-red-400 hidden -mt-1 mr-1' xmlns="http://www.w3.org/2000/svg"><g id="Square_Minus"><g><path d="M18.438,20.938H5.564a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H18.438a2.5,2.5,0,0,1,2.5,2.5V18.438A2.5,2.5,0,0,1,18.438,20.938ZM5.564,4.064a1.5,1.5,0,0,0-1.5,1.5V18.438a1.5,1.5,0,0,0,1.5,1.5H18.438a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z"></path><path d="M9,12.5a.5.5,0,0,1,0-1h6a.5.5,0,0,1,0,1Z"></path></g></g></svg>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className='size-4 group-[.withdraw]/history:inline text-green-400 hidden -mt-1 mr-1' xmlns="http://www.w3.org/2000/svg"><g id="Square_Plus"><g><path d="M18.438,20.938H5.563a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H18.438a2.5,2.5,0,0,1,2.5,2.5V18.438A2.5,2.5,0,0,1,18.438,20.938ZM5.563,4.064a1.5,1.5,0,0,0-1.5,1.5V18.438a1.5,1.5,0,0,0,1.5,1.5H18.438a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z"></path><path d="M15,12.5H12.5V15a.5.5,0,0,1-1,0V12.5H9a.5.5,0,0,1,0-1h2.5V9a.5.5,0,0,1,1,0v2.5H15A.5.5,0,0,1,15,12.5Z"></path></g></g></svg>
                                    5,000</td>
                            </tr>
                            <tr className='group/history withdraw'>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-white/70 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>20-12-2022</td>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-white/70 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>06x90a...521</td>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-green-400 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>Withdraw</td>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-white/70 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>0.5%</td>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-white/70 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className='size-4 group-[.invest]/history:inline text-red-400 hidden -mt-1 mr-1' xmlns="http://www.w3.org/2000/svg"><g id="Square_Minus"><g><path d="M18.438,20.938H5.564a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H18.438a2.5,2.5,0,0,1,2.5,2.5V18.438A2.5,2.5,0,0,1,18.438,20.938ZM5.564,4.064a1.5,1.5,0,0,0-1.5,1.5V18.438a1.5,1.5,0,0,0,1.5,1.5H18.438a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z"></path><path d="M9,12.5a.5.5,0,0,1,0-1h6a.5.5,0,0,1,0,1Z"></path></g></g></svg>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className='size-4 group-[.withdraw]/history:inline text-green-400 hidden -mt-1 mr-1' xmlns="http://www.w3.org/2000/svg"><g id="Square_Plus"><g><path d="M18.438,20.938H5.563a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H18.438a2.5,2.5,0,0,1,2.5,2.5V18.438A2.5,2.5,0,0,1,18.438,20.938ZM5.563,4.064a1.5,1.5,0,0,0-1.5,1.5V18.438a1.5,1.5,0,0,0,1.5,1.5H18.438a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z"></path><path d="M15,12.5H12.5V15a.5.5,0,0,1-1,0V12.5H9a.5.5,0,0,1,0-1h2.5V9a.5.5,0,0,1,1,0v2.5H15A.5.5,0,0,1,15,12.5Z"></path></g></g></svg>
                                    5,000</td>
                            </tr>
                            <tr className='group/history invest'>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-white/70 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>20-12-2022</td>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-white/70 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>06x90a...521</td>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-green-400 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>Invest</td>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-white/70 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>0.5%</td>
                                <td className='bg-white/5 group-hover/history:bg-white/10 cursor-pointer duration-100 border-y-2 first:border-l-2 last:border-r-2 border-white/10 text-white/70 md:p-5 p-3 text-left first:rounded-l-xl last:rounded-r-xl'>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className='size-4 group-[.invest]/history:inline text-red-400 hidden -mt-1 mr-1' xmlns="http://www.w3.org/2000/svg"><g id="Square_Minus"><g><path d="M18.438,20.938H5.564a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H18.438a2.5,2.5,0,0,1,2.5,2.5V18.438A2.5,2.5,0,0,1,18.438,20.938ZM5.564,4.064a1.5,1.5,0,0,0-1.5,1.5V18.438a1.5,1.5,0,0,0,1.5,1.5H18.438a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z"></path><path d="M9,12.5a.5.5,0,0,1,0-1h6a.5.5,0,0,1,0,1Z"></path></g></g></svg>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className='size-4 group-[.withdraw]/history:inline text-green-400 hidden -mt-1 mr-1' xmlns="http://www.w3.org/2000/svg"><g id="Square_Plus"><g><path d="M18.438,20.938H5.563a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H18.438a2.5,2.5,0,0,1,2.5,2.5V18.438A2.5,2.5,0,0,1,18.438,20.938ZM5.563,4.064a1.5,1.5,0,0,0-1.5,1.5V18.438a1.5,1.5,0,0,0,1.5,1.5H18.438a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z"></path><path d="M15,12.5H12.5V15a.5.5,0,0,1-1,0V12.5H9a.5.5,0,0,1,0-1h2.5V9a.5.5,0,0,1,1,0v2.5H15A.5.5,0,0,1,15,12.5Z"></path></g></g></svg>
                                    5,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default YourAccount