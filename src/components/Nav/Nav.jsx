import React from 'react'
import { NavLink as Link } from 'react-router-dom'

const Nav = () => {

    const navList = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "About",
            href: "/"
        },
        {
            name: "FAQ",
            href: "/"
        }
    ]


    return (
        <div className='Nav'>
            <div className="logo">RA</div>
            <div className="hamburger">X</div>
            <div className="navLinks">
               {navList.map((link) => {
                   return(
                       <Link className="link" to={link.href}>{link.name}</Link>
                   )
               })}
            </div>
        </div>
    )
}

export default Nav
