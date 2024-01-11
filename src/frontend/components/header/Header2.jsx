import React from 'react'
import { Link } from 'react-router-dom'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Logo from '../../../assets/img/logo/png/colorLogoNoBackground.png';
import { CgMenuRight } from "react-icons/cg";

const Header2 = () => {
  return (
    <header className='flex items-center fixed z-50 left-0 right-0 top-0 font-manrope py-5 px-8 duration-300 backdrop-blur-xl bg-zinc-800/50 select-none border-b border-zinc-700/50'>
      <Link to="/" className="md:mr-20 md:w-16">
        <img className='lg:size-16 size-12 duration-200 mx-auto' src={Logo} alt="logo" />
      </Link>
      <div className="flex items-center lg:gap-12 gap-4 max-lg:ml-auto lg:grow">
        <div className='ml-auto'>
          {/* <div className='lg:py-3 py-2 lg:px-5 px-3 bg-gradient-to-br from-gray-700 via-gray-700 to-gray-900 rounded-lg text-sm lg:text-base shadow-md text-white ring-2 ring-inset ring-transparent md:hover:-translate-y-1 block duration-300'> */}
            <ConnectButton />
          {/* </div> */}
        </div>
        <div className='lg:hidden block'>
          <Link className='text-white'><CgMenuRight className='size-8' /></Link>
        </div>
      </div>
    </header>
  )
}

export default Header2;