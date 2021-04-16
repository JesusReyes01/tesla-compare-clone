import React from 'react'
import TeslaLogo from './Tesla_Logo.svg'
import './Header.css'


const Header = () => {
    return(
        <header className="site-header">
            <div className="header-logo">
                <img src={TeslaLogo} alt="Tesla Logo" />
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
            <ol>
                <li className="menu-item">
                    <a href="https://www.tesla.com/shop"
                        >SHOP</a>
                </li>
                <li className="menu-item">
                    <a href="https://www.tesla.com/models"
                        >TESLA ACCOUNT</a>
                </li>
                <li className="menu-item">HAM-MENU
                </li>
            </ol>
        </header>
    )
}

export default Header