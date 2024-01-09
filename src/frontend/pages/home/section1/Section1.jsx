import React from 'react'
import { Link } from 'react-router-dom'
import apira from '../../../../assets/img/apiary-svgrepo-com.png'
import deshboard from '../../../../assets/img/deshboard.png'

const Section1 = () => {
  return (
    <div className="w-full bg-zinc-400 py-8 md:py-16 select-none">
    <div className='realtive h-full items-center relative z-10 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl lg:px-0 px-8 mx-auto w-full py-5'>
        <div className='bg-gray-800 h-full rounded-md lg:py-16 lg:px-20 md:py-14 py-8 md:px-16 px-9'>

        <ul className="list-none border-b border-gray-600 inline-flex items-center gap-10">
            <li><Link className='pb-3 no-underline flex cursor-pointer items-center text-sm font-semibold text-gray-100 relative after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[2px] after:bg-gray-200'>Lend</Link></li>
            <li><Link className='pb-3 no-underline flex cursor-pointer items-center text-sm font-semibold text-gray-100'>Borrow</Link></li>
            <li><Link className='pb-3 no-underline flex cursor-pointer items-center text-sm font-semibold text-gray-100'>Learn</Link></li>

        </ul>
        <div className='flex items-center flex-wrap '>
            <div className='lg:w-2/5 w-full'>
                <div className='mt-10'>
                    <img className='md:size-20 size-16' src={apira} alt="apira" />
                </div>
                <div className="w-full text-base text-gray-200 pt-5">Lend Protocol</div>
                <div className="w-full lg:text-4xl md:text-3xl text-xl font-bold text-gray-200 text-balance">Lend USDT to our liquidity pools</div>
                <div className="lg:w-3/4 md:w-4/5 w-full lg:text-lg md:text-base text-sm text-gray-300 pb-2 mt-4 text-pretty">This protocol allows investors to lend USDT to our liquidity pools and become liquidity providers for the online casinos.</div>
            </div>
            <div className='lg:w-3/5 w-full'>
            <div className='size-full object-cover'>
                    <img className='size-full object-cover' src={deshboard} alt="deshboard" />
                </div>
            </div>
        </div>
        </div>
        
    </div>
    </div>
  )
}

export default Section1