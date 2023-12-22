import React, { useContext } from 'react';
import MenuIcon from '../assets/icons/menu.png'
import { SideBarContext } from '../store/sideBarContext';

const image = "https://www.stockvault.net/data/2023/06/25/300288/preview16.jpg"
const SideBar = () => {
    const {sidebarOpen,setSidebarOpen} = useContext(SideBarContext)
    return (
        <aside className={`sidebar-main duration-500  ${sidebarOpen ? '':'max-md:-translate-x-[100%]'}`}>
            <div className="profile-box-sidebar ">
                <img src={image} className='w-4/12 rounded-full' alt="" />
                <p>Ram mohan</p>
                <p>rammohan@gmail.com</p>
            </div>
            <div className="sidebar-options-main-container">
                <button className="sidebar-option">Dashboard</button>
                <button className="sidebar-option">Perks</button>
                <button className="sidebar-option">Addons</button>
                <button className="sidebar-option">Faqs</button>
                <button className="sidebar-option md:hidden" onClick={()=>setSidebarOpen(false)}>Close</button>
            </div>
            <div className=" sidebar-logout-option "> Logout</div>
        </aside>
    );
}

export default SideBar;
