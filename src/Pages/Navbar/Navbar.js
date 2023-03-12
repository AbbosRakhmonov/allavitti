import React, {useEffect, useState} from 'react'
import './style.css'
import {Link, NavLink} from 'react-router-dom'
import NavLogo from './../../Assets/Images/nav-logo.png'
import Flag1 from './../../Assets/Images/flags/usa.png'
import Flag2 from './../../Assets/Images/flags/uzb.png'
import Flag3 from './../../Assets/Images/flags/tr.png'
import Flag4 from './../../Assets/Images/flags/rus.png'
import {FaMobileAlt} from 'react-icons/fa'
import 'aos/dist/aos.css'

function Navbar({numberView = false, articles}) {
  const [active, setActive] = useState('nav__menu')
  const [toggleIcon, setToggleIcon] = useState('nav__toggler')
  const [fixed, setFixed] = useState(false)
  const navToggle = () => {
    active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu')

    //toggleIcon
    toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler')
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setFixed(true)
      } else {
        setFixed(false)
      }
    })
  }, [])


  return (<div className={`nav-block ${fixed ? 'sticy' : ''}`}>
        <nav className="nav">
          <NavLink to="/" className="nav__brand">
            <img src={NavLogo} alt={'allavitti logo'}/>
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
                    <img src={Flag1} alt={'USA flag'}/>
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink className="nav__img" to="/">
                    <img src={Flag2} alt={'UZBEKISTAN flag'}/>
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink className="nav__img" to="/">
                    <img src={Flag3} alt={'TURKEY flag'}/>
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink className="nav__img" to="/">
                    <img src={Flag4} alt={'RUSSIA flag'}/>
                  </NavLink>
                </li>
              </ul>
              {!numberView && (<div className="flag-bottom-box">
              <span>
                <FaMobileAlt size={`1.5rem`} className="head-phone"/>
              </span>
                <Link to={'tel:998997531757'}>+998 99 753 17 57</Link>
              </div>)}

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
