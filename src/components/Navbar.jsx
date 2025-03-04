import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'

const Navbar = () => {
    return (
        <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
            <nav className='flex w-full screen-max-width '>
                <img src={appleImg} alt='apple image' width={18} height={18}></img>

                <div className='flex flex-1 justify-center max-sm:hidden'>
                    {navLists.map((item) => <div
                        className='px-5 text-sm cursor-pointer text-gray-400 hover:text-white transition-all'
                     key={item}>{item}</div>)}
                </div>


                <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                    <img src={searchImg} width={18} height={18} alt='serach'></img>
                    <img src={bagImg} width={18} height={18} alt='bag'></img>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
