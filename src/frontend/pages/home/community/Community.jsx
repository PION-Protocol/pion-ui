import React from 'react'
import { Link } from 'react-router-dom'
import community from '../../../../assets/img/community.svg'

const Community = () => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-800 via-zinc-800 to-gray-800 md:py-20 select-none" id='community'>
        <div className='flex flex-col h-full items-center relative z-10 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl lg:px-0 px-8 mx-auto w-full py-5 max-sm:flex-wrap gap-10'>
            <div className='grow text-center'>
                {/* <div className="w-full text-base font-semibold text-gray-800">Our Ecosystem</div> */}
                <div className="w-full font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-gray-200 text-balance">Governed By The Community</div>
                <div className="md:w-3/4 mx-auto w-full lg:text-lg md:text-base text-sm text-gray-300 pb-2 mt-4 text-balance">PION is a fully decentralized community protocol with 56,000 token holders</div>
                <div className='md:mt-8 mt-4'>
                    <Link className='lg:py-3 py-2 lg:px-8 px-5 rounded-lg text-base shadow-md font-semibold bg-gradient-to-br from-gray-700 via-gray-700 to-gray-900 text-gray-100 ring-2 ring-inset ring-gray-700 md:hover:-translate-y-1 inline-block duration-300'>Governance Forum</Link>
                </div>
            </div>
            <div className='w-2/3'>
                <div className='img'>
                    <img className='size-full [filter:drop-shadow(0px_0px_100px_white)]' src={community} alt="governance" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Community