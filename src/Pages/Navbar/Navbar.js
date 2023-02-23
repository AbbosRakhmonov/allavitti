import React, { useState } from "react";
import './style.css'
import Flags from "../../Components/Flags/Flags";
import {NavLink} from 'react-router-dom'
import { useTranslation } from "react-i18next";

function Navbar(){
    const {t} = useTranslation();
    const [active, setActive] = useState('nav__menu');
    const [toggleIcon, setToggleIcon] = useState('nav__toggler')
    const navToggle = () => {
       active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu');

       //toggleIcon
       toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler');
    }
    return(
      <div className="nav-block">
 <nav className="nav">
            <NavLink to='/' className="nav__brand">Allavitti</NavLink>
            <ul className={active}>
               <li className="nav__item">
                  <NavLink className="nav__link" to='/'>{t('link_home')}</NavLink>
               </li>
               <li className="nav__item">
                  <NavLink className="nav__link" to='/articles'>{t('link_articles')}</NavLink>
               </li>
               <li className="nav__item">
                   <Flags/>
               </li>
            </ul>
            <div className={toggleIcon} onClick={navToggle}>
                 <div className="line1"></div>
                 <div className="line2"></div>
                 <div className="line3"></div>
            </div>
        </nav>
      </div>
       
    )
}

export default Navbar;