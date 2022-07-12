import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Nav = () => {

    const navList = [
        {
            name: "Home",
            href: "#"
        },
        {
            name: "Projects",
            href: "#projects"
        },
        {
            name: "Contacts",
            href: "#contacts"
        },        {
            name: "About",
            href: "#about"
        }
    ]


    return (
        <div className='Nav'>
            <div className="logo">RA</div>
            <div className="hamburger">X</div>
            <div className="navLinks">
               {navList.map((link) => {
                   return(
                       <Link smooth className="link" to={link.href}>{link.name}</Link>
                   )
               })}
            </div>
        </div>
    )
}

export default Nav
