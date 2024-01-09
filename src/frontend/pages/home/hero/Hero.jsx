import React from 'react'
import { Link } from 'react-router-dom'
import Twitter from '../../../../assets/img/Group932.svg'
import Git from '../../../../assets/img/Group933.svg'
import Reddit from '../../../../assets/img/Group934.svg'
import Globe from '../../../../assets/img/Vector_2648-ai.svg'
import Stats from '../stats/Stats'
// import Stats2 from '../stats/Stats2'

const Hero = () => {
  return (
    <div className='select-none relative z-0 bg-gradient-to-br from-zinc-600 via-zinc-300 to-zinc-100 before:pointer-events-none before:opacity-30 before:bg-[url("/src/assets/img/Subtraction4.svg")] before:bg-no-repeat before:bg-contain before:absolute before:inset-0 before:bottom-auto before:aspect-video before:z-[1]'>
      <div className="min-h-[600px] md:pb-20 pb-10 flex flex-wrap max-md:flex-col-reverse max-md:gap-8 items-center relative z-10 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl lg:px-0 px-8 mx-auto w-full">
        <div className="md:w-2/3 *:text-gray-800 md:*:w-10/12 gap-4 flex flex-col max-md:text-center lg:pt-32 md:pt-28">
          <div className="font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-balance backdrop-blur-sm"><span className='text-zinc-900 md:block'>PION</span> liquidity Protocol for online casinos</div>
          <div className="xl:text-xl md:text-lg text-base text-balance font-semibold pt-5">Finance for online casinos</div>
          <div className="md:text-base text-sm text-balance">A unique opportunity for investors to invest in a high-growth industry and online casinos on the other hand gain access to essential bankroll funding powered by a revenue-sharing model that aligns with their success</div>
          <div>
            <div className="inline-flex items-center gap-5 pt-4">
              <Link className='md:size-8 size-5 duration-150 rounded-xl'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
              </Link>
              <Link className='md:size-8 size-5 duration-150 rounded-xl'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 480 512" xmlns="http://www.w3.org/2000/svg"><path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path></svg>
              </Link>
              <Link className='md:size-8 size-5 duration-150 rounded-xl'>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z"></path></svg>
              </Link>
            </div>
          </div>
          {/* <Stats2/> */}
        </div>
        <div className='md:w-1/3 sm:w-2/3 w-9/12 md:h-dvh lg:pt-32 md:pt-28 pt-28 flex items-center'>
          <img className='w-full mx-auto invert' src={Globe} alt="Globe" />
        </div>
        <div className='w-full max-md:order-first'>
          <Stats/>
        </div>
      </div>
    </div>

  )
}

export default Hero