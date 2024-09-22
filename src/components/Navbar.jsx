import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import Navlinks from './Navlinks';
import { useEffect, useState } from 'react';
import logo from '../assets/360080291_200675059594451_4048102465236019403_n.jpg'


const themes = {
    winter: 'winter',
    dracula: 'dracula'
}

const getThemeFromLocalStorage = () => {
    return localStorage.getItem('theme') || themes.winter;
}

const Navbar = () => {
    const [theme, setTheme] = useState(getThemeFromLocalStorage)

    const handleTheme = () => {
        const { winter, dracula } = themes;
        const newTheme = theme === winter ? dracula : winter
        document.documentElement.setAttribute('data-theme', theme)
        setTheme(newTheme);
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])
    localStorage.setItem('theme', theme)

    return (
        <nav className='bg-base-200'>
            <div className='navbar align-element '>
                <div className='navbar-start'>
                    {/* Title */}
                    <NavLink
                        to='/'
                        className='hidden lg:flex max-w-[200px] h-[200px]'
                    >
                        <img src={logo}></img>
                    </NavLink>
                    {/* DROPDOWN */}
                    <div className='dropdown'>
                        <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                            <FaBarsStaggered className='h-6 w-6' />
                        </label>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'
                        >
                            <Navlinks></Navlinks>
                        </ul>
                    </div>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className='menu menu-horizontal '><Navlinks></Navlinks></ul>
                </div>
                <div className='navbar-end'>
                    {/* THEME ICONS */}
                    <label className='swap swap-rotate'>
                        <input type='checkbox' onChange={handleTheme} />
                        <BsSunFill className='swap-on'></BsSunFill>
                        <BsMoonFill className='swap-off'></BsMoonFill>
                    </label>

                    {/* CART LINK*/}
                    <NavLink to='cart' className='btn btn-ghost btn-circle btn-md ml-4'>
                        <div className='indicator'>
                            <BsCart3 className='h-6 w-6' />
                            <span className='badge badge-sm badge-primary indicator-item'>
                                8
                            </span>
                        </div>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar