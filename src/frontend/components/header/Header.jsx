import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/logo/png/colorLogoNoBackground.png';
import { CgMenuRight } from "react-icons/cg";

const Header = () => {
  return (
    <>
    <header className='flex items-center fixed z-50 left-0 right-0 top-0 font-manrope py-5 px-8 duration-300 group-[]/ns:bg-gray-800 select-none after:pointer-events-none after:inset-x-0 after:absolute after:-z-[1] after:top-0 md:after:-bottom-8 after:bottom-0 after:block after:bg-gradient-to-b after:from-gray-900 group-[]/ns:after:opacity-0'>
      <div className="md:mr-20 md:w-16">
        <img className='lg:size-16 size-12 duration-200 mx-auto' src={Logo} alt="logo" />
      </div>
      <div className="flex items-center lg:gap-12 gap-4 max-lg:ml-auto lg:grow">
        <div className='hidden lg:inline-flex items-center mx-auto gap-12 *:text-gray-300 *:font-bold *:text-base *:duration-300 grow-0 *:grow *:text-center'>
          <Link to="" className='md:hover:text-gray-400'>PION Protocol</Link>
          <Link to="#community" className='md:hover:text-gray-400'>Governance</Link>
          <Link to="ecosystem" className='md:hover:text-gray-400'>Ecosystem</Link>
          <Link className='md:hover:text-gray-400'>Docs</Link>
          <Link className='md:hover:text-gray-400'>Security</Link>
          <Link className='md:hover:text-gray-400'>FAQ</Link>
          <Link className='md:hover:text-gray-400'>Community</Link>
        </div>
        <div>
          <Link to="launch" className='lg:py-3 py-2 lg:px-5 px-3 bg-gradient-to-br from-gray-700 via-gray-700 to-gray-900 rounded-lg text-sm lg:text-base shadow-md text-white ring-2 ring-inset ring-transparent md:hover:-translate-y-1 block duration-300'>Launch App</Link>
        </div>
        <div className='lg:hidden block'>
          <Link className='text-white'><CgMenuRight className='size-8' /></Link>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header