import React, { useState } from 'react'
import TeslaLogo from './Tesla_Logo.svg'
import './Header.css'
import { Squash as Hamburger } from 'hamburger-react'
import SideMenu from '../SideMenu/SideMenu'


const Header = () => {

    const [isOpen, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!isOpen)
    }

    return(
        <header className="site-header">
            <div className="header-logo">
                <a href='https://www.tesla.com'>
                    <img src={TeslaLogo} alt="Tesla Logo" />
                </a>
            </div>
            <ol className="nav-centered">
                <li className="menu-item">
                    <a href="https://www.tesla.com/models" ><span>Model S</span></a>
                </li>
                <li className="menu-item">
                    <a href="https://www.tesla.com/model3" ><span>Model 3</span></a>
                </li>
                <li className="menu-item">
                    <a href="https://www.tesla.com/modelx" ><span>Model X</span></a>
                </li>
                <li className="menu-item">
                    <a href="https://www.tesla.com/modely" ><span>Model Y</span></a>
                </li>
                <li className="menu-item">
                    <a href="https://www.tesla.com/solarroof" ><span>Solar Roof</span></a>
                </li> 
                <li className="menu-item">
                    <a href="https://www.tesla.com/solarpanels"><span>Solar Panels</span></a>
                </li>
            </ol>
            <ol className='git'>
                <li className="menu-item">
                    <a href="https://www.tesla.com/shop"><span>Shop</span></a>
                </li>
                <li className="menu-item">
                    <a href="https://www.tesla.com/models"><span>Account</span></a>
                </li>
                <li className="menu-item" onClick={toggleMenu}>
                    <span>Menu</span>
                </li>
            </ol>  
            <SideMenu className={isOpen?'side-menu':'side-menu sld'}/>
            
        </header>
    )
}

export default Header

