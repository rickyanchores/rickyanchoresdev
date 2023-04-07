import React,{useState} from 'react'
import { HashLink as Link } from 'react-router-hash-link';
//
import { Icon } from 'react-icons-kit';
import {menu} from 'react-icons-kit/feather/menu';
import {x} from 'react-icons-kit/feather/x'

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
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle)
    }


    return (
        <div className={`Nav ${toggle ? "expanded" : ""} `}>
            <div className="logo">R I C K Y</div>
            <button className="hamburger" onClick={handleToggle}>
                {toggle?<Icon icon={x} size={"28px"}/>:<Icon icon={menu} size={"28px"}></Icon>}
            </button>
            <div className="navLinks">
               {navList.map((link) => {
                   return(
                       <Link data-aos="fade-in" smooth className="link" to={link.href} onClick={handleToggle}>{link.name}</Link>
                   )
               })}
            </div>
        </div>
    )
}

export default Nav
