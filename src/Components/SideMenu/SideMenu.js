import React from 'react'
import './SideMenu.css'
import { IoCloseOutline } from 'react-icons/io5';


const SideMenu = (props) => {
    return (
        <div {...props} className='side-menu'>
            <div className='close-menu-section'>
                <IoCloseOutline className='close-icon'/>
            </div>
            <ol className='menu-list'>
                <li><a href="https://www.tesla.com/inventory/new/m3">Existing Inventory</a></li>
                <li><a href="https://www.tesla.com/inventory/used/m3">Used Inventory</a></li>
                <li><a href="https://www.tesla.com/cybertruck">Trade-In</a></li>
                <li><a href="https://www.tesla.com/drive">Test Drive</a></li>
                <li><a href="https://www.w3schools.com">Cybertruck</a></li>
                <li><a href="https://www.tesla.com/roadster">Roadster</a></li>
                <li><a href="https://www.tesla.com/semi">Semi</a></li>
                <li><a href="https://www.tesla.com/charging">Charging</a></li>
                <li><a href="https://www.tesla.com/powerwall">Powerwall</a></li>
                <li><a href="https://www.tesla.com/commercial">Commercial Energy</a></li>
                <li><a href="https://www.tesla.com/utilities">Utilities</a></li>
                <li><a href="https://www.tesla.com/findus">Find Us</a></li>
                <li><a href="https://www.tesla.com/support">Support</a></li>
                <li><a href="https://www.w3schools.com">United States</a></li>
            </ol>

        </div>
    )

}

export default SideMenu