import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import {FaBars} from "react-icons/fa"

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
            name: "About",
            href: "#about"
        },
        {
            name: "Contacts",
            href: "#contacts"
        }
    ]


    //RESPONSIVE



    return (
        <div className='Nav'>
            <div className="logo">RA</div>
            <button className="hamburger">
                <FaBars className='FaBars'/>
            </button>
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
