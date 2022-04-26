import { MenuIcon } from '@heroicons/react/outline'
import { ReactComponent as AvianLogo } from '../assets/svg/Avian_Logo.svg'
import { NavLink } from 'react-router-dom'
import React from 'react'

export const navList: NavList = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'product', name: 'Product' },
    { id: 'services', name: 'Services' },
    { id: 'chatter', name: 'Chatter' },
]

function Navbar(): JSX.Element {
    return (
        <nav className="relative">
            <div className="bg-themeBlue py-1">
                <div className="max-w-screen-3xl px-5 md:px-10 xl:px-12 3xl:px-20 py-2.5 md:py-3.5 xl:py-4 3xl:py-5 mx-auto">
                    {/* For mobile screen */}
                    <div className="md:hidden flex items-center justify-between">
                        <div className="cursor-pointer">
                            <MenuIcon className='h-6 w-6 text-white' />
                        </div>
                        <NavLink to='/' className="h-8 w-fit mr-1">
                            <AvianLogo className="h-8 w-auto" />
                        </NavLink>
                    </div>

                    {/* For Desktop screens */}
                    <div className="hidden md:block relative">
                        <div className="flex items-center space-x-10 xl:space-x-16 3xl:space-x-20">
                            <NavLink to={'/'} className="w-12 xl:w-14 3xl:w-16">
                                <AvianLogo className="w-inherit h-auto" />
                            </NavLink>
                            <div className="flex-grow text-white flex justify-between text-sm xl:text-base 3xl:text-xl">
                                <div className="flex-grow flex justify-between max-w-lg lg:max-w-2xl 3xl:max-w-4xl font-light 2xl:font-normal">
                                    {
                                        navList.map((item) => (
                                            <NavLink key={item.id} to={`/${item.id === 'home' ? '' : item.id}`} className={({ isActive }) => `transition-all duration-100 ${isActive ? 'font-medium 2xl:font-semibold' : 'text-gray-200/80 hover:text-white duration-300'}`}>{item.name}</NavLink>
                                        ))
                                    }
                                </div>
                                <a className="ml-10" target='_blank' rel="noreferrer" href='https://dashboard.aviandesign.in'>
                                    Login
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default React.memo(Navbar)