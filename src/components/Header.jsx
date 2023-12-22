import React, { useContext } from 'react';

import Logo from '../assets/logo.png'
import { SideBarContext } from '../store/sideBarContext';
const Header = () => {
    const { sidebarOpen, setSidebarOpen } = useContext(SideBarContext);
    return (
        <nav className='main-header flex justify-end items-center'>
            <div className={`header-main-logo-container duration-500`}>
                <div className="header-main-logo-corner duration-500 z-10 max-lg:hidden max-lg:-translate-x-[100%]"></div>
                <div className={`header-main-logo  z-20 max-lg:bg-transparent`}>
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className=""></div>
            <div className="justify-self-end p-4 flex gap-2">
                <button className='bg-white p-1 rounded-sm text-xs'>xyz Private Limited</button>
                <button className='bg-white p-1 rounded-sm text-xs'> V</button>
            </div>
            <button className='bg-[#115653] text-white p-1 rounded-sm text-lg m-4 md:hidden'  onClick={() => setSidebarOpen(!sidebarOpen)}>MENU</button>

        </nav>
    );
}

export default Header;
