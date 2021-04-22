import React from 'react'
import './Footer.css'

const Footer = () => {
    const footerLinks = {
        about: {
            display: 'Tesla © 2021',
            link: 'https://www.tesla.com/about'},
        legal: {
            display: 'Privacy & Legal',
            link: 'https://www.tesla.com/about/legal'},
        contact: {
            display: 'Contact',
            link: 'https://www.tesla.com/contact'},
        careers: {
                display: 'Careers',
                link: 'https://www.tesla.com/careers'},
        newsletter: {
            display: 'Get Newsletter',
            link: 'https://www.tesla.com/updates'},    
        news: {
            display: 'News',
            link: 'https://www.tesla.com/blog'},
        forums: {
            display: 'Forums',
            link: 'https://forums.tesla.com/'},
        locations: {
            display: 'Locations',
            link: 'https://www.tesla.com/findus/list'},            
    }
    return(
        <footer>
            <ul className='footer-list'>
                {Object.keys(footerLinks).map((e, i) => (
                    <li key={e}>
                        <a href={footerLinks[e].link}>{footerLinks[e].display}</a>
                    </li>
                ))}
            </ul>

        </footer>
    )

}

export default Footer