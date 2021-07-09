import React from 'react'

const SideMenu = (props) => {
    return (
        <div {...props}>
            <ol className='menu-list'>
                <li><a href="https://www.tesla.com/inventory/new/m3">EXISTING INVENTORY</a></li>
                <li><a href="https://www.tesla.com/inventory/used/m3">USED INVENTORY</a></li>
                <li><a href="https://www.tesla.com/cybertruck">TRADE-IN</a></li>
                <li><a href="https://www.w3schools.com">CYBERTRUCK</a></li>
                <li><a href="https://www.tesla.com/roadster">ROADSTER</a></li>
                <li><a href="https://www.tesla.com/semi">SEMI</a></li>
                <li><a href="https://www.tesla.com/charging">CHARGING</a></li>
                <li><a href="https://www.tesla.com/powerwall">POWERWALL</a></li>
                <li><a href="https://www.tesla.com/commercial">COMMERCIAL ENERGY</a></li>
                <li><a href="https://www.tesla.com/utilities">UTILITIES</a></li>
                <li><a href="https://www.tesla.com/drive">TEST DRIVE</a></li>
                <li><a href="https://www.tesla.com/findus">FIND US</a></li>
                <li><a href="https://www.tesla.com/support">SUPPORT</a></li>
                <li><a href="https://www.w3schools.com">UNITED STATES</a></li>
            </ol>

        </div>
    )

}

export default SideMenu