import React, { useState, useRef} from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
// import {useTranslation} from 'react-i18next'
import NavLogo from "./../../Assets/Images/nav-logo.png";
import Flag1 from "./../../Assets/Images/flags/usa.png";
import Flag2 from "./../../Assets/Images/flags/uzb.png";
import Flag3 from "./../../Assets/Images/flags/tr.png";
import Flag4 from "./../../Assets/Images/flags/rus.png";
import { FaMobileAlt } from "react-icons/fa";
import 'aos/dist/aos.css';
function Navbar({numberView=false}) {

  //  const {t} = useTranslation()
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const [navBlock, setNavBlock] = useState("nav-block");
  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

    //toggleIcon
    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  const headerRef = useRef(null);
     window.addEventListener("scroll",function(){
        headerRef.current.classList.toggle("sticy",window.scrollY>0)         
     })

  return (
    <div className={navBlock} ref={headerRef}>
      <nav className="nav">
        <NavLink to="/" className="nav__brand" >
          <img src={NavLogo} />
          <div>
            <h2>Allavitti</h2>
            <span>By vitiligo</span>
          </div>
        </NavLink>
        <ul className={active}>
          <li className="nav__item">
            <NavLink className="nav__link" to="/">
              Bosh Sahifa
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" to="/articles">
            Maqolalar
            </NavLink>
          </li>
          <div className="flag-bottom-number">
            <ul className="flag-img-ul">
              <li>
                <NavLink className="nav__img" to="/">
                  <img src={Flag1} />
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink className="nav__img" to="/">
                  <img src={Flag2} />
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink className="nav__img" to="/">
                  <img src={Flag3} />
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink className="nav__img" to="/">
                  <img src={Flag4} />
                </NavLink>
              </li>
            </ul>
            {
              numberView === false ? (
            <div className="flag-bottom-box">
              <span>
                <FaMobileAlt size={`1.5rem`} className="head-phone" />
              </span>
              <p>+998 99 753 17 57</p>
            </div>
              ):""
            }
            
          </div>
        </ul>
        <div className={toggleIcon} onClick={navToggle}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
