import React, { useState } from 'react'
import TeslaLogo from './Tesla_Logo.svg'
import './Header.css'
import { Squash as Hamburger } from 'hamburger-react'
import SideMenu from '../SideMenu/SideMenu'


const Header = () => {

    const [isOpen, setOpen] = useState(false)

    return(
        <header className="site-header">
            <div className="header-logo">
                <a href='https://www.tesla.com'>
                    <img src={TeslaLogo} alt="Tesla Logo" />
                </a>
            </div>
            <ol className="nav-centered">
                <li className="menu-item">
                    <a href="https://www.tesla.com/models" 
                        >MODEL S</a>
                </li>
                <li className="menu-item">
                    <a href="https://www.tesla.com/model3" 
                        >MODEL 3</a>
                </li>
                <li className="menu-item">
                    <a href="https://www.tesla.com/modelx" 
                        >MODEL X</a>
                </li>
                <li className="menu-item">
                    <a href="https://www.tesla.com/modely" 
                        >MODEL Y</a>
                </li>
                <li className="menu-item">
                    <a href="https://www.tesla.com/solarroof" 
                        >SOLAR ROOF</a>
                </li> 
                <li className="menu-item">
                    <a href="https://www.tesla.com/solarpanels"
                        >SOLAR PANELS</a>
                </li>
            </ol>
            <ol className='git'>
                <li className="menu-item">
                    <a href="https://www.tesla.com/shop"
                        >SHOP</a>
                </li>
                <li className="menu-item">
                    <a href="https://www.tesla.com/models"
                        >TESLA ACCOUNT</a>
                </li>
                <li className="menu-item menu-fixed"><Hamburger toggled={isOpen} toggle={setOpen} />
                </li>
            </ol>  
            {/* <SideMenu className='side-menu'/> */}
            <SideMenu className={isOpen?'side-menu':'side-menu sld'}/>
            
        </header>
    )
}

export default Header

