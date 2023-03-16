import React, {useEffect, useState} from 'react'
import './style.css'
import {Link, NavLink} from 'react-router-dom'
import NavLogo from './../../Assets/Images/nav-logo.png'
import engIcon from './../../Assets/Images/flags/usa.png'
import uzbIcon from './../../Assets/Images/flags/uzb.png'
import turkIcon from './../../Assets/Images/flags/tr.png'
import rusIcon from './../../Assets/Images/flags/rus.png'
import {FaMobileAlt} from 'react-icons/fa'
import 'aos/dist/aos.css'
import i18next from 'i18next'
import cookie from 'js-cookie'
import {useTranslation} from 'react-i18next'
import {useDispatch} from 'react-redux'
import {changeLanguage} from './navbarSlice'

function Navbar({numberView = false, articles}) {
  const dispatch = useDispatch()
  const language = [
    {
      code: 'uz',
      name: 'Узбек',
      country_code: 'tc',
      country_img: uzbIcon
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
      country_img: engIcon
    },
    {
      code: "ru",
      name: "Русский",
      country_code: "mc",
      country_img: rusIcon,
    },
    {
      code: 'tr',
      name: 'Türkiye',
      country_code: 'th',
      country_img: turkIcon
    },
  ];

  const {t} = useTranslation()
  const currentLanguageCode = cookie.get('i18next') || 'en'

  const [active, setActive] = useState('nav__menu')
  const [toggleIcon, setToggleIcon] = useState('nav__toggler')
  const [fixed, setFixed] = useState(false)
  const navToggle = () => {
    active === 'nav__menu'
        ? setActive('nav__menu nav__active')
        : setActive('nav__menu')

    //toggleIcon
    toggleIcon === 'nav__toggler'
        ? setToggleIcon('nav__toggler toggle')
        : setToggleIcon('nav__toggler')
  }

  const changeLang = (code) => {
    i18next.changeLanguage(code)
    localStorage.setItem('lang', code)
    dispatch(changeLanguage(code))
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

  return (
    <div className={`nav-block ${fixed ? "sticy" : ""}`}>
      <nav className="nav">
        <NavLink to="/" className="nav__brand">
          <img src={NavLogo} alt={"allavitti logo"} />
          <div>
            <h2>Allavitti</h2>
            <span>By vitiligo</span>
          </div>
        </NavLink>
        <ul className={active}>
          <li className="nav__item">
            <NavLink className="nav__link" to="/">
              {t('link_home')}
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" to="/articles">
            {t('link_articles')}
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" to="/dashboard">
            {t('link_admin')}
            </NavLink>
          </li>
          <div className="flag-bottom-number">
            <ul className="flag-img-ul">
              {language.map(({ code, name, country_code, country_img }) => (
                <li key={country_code}>
                  <NavLink
                      className={`nav__img ${
                          code === currentLanguageCode ? 'nav__img__active' : ''
                      }`}
                      to="/"
                      onClick={(e) => {
                        e.preventDefault()
                        changeLang(code)
                      }
                      }
                  >
                    <img src={country_img} alt={name}/>
                  </NavLink>
                </li>
              ))}
            </ul>
            {!numberView && (
              <div className="flag-bottom-box">
                <span>
                  <FaMobileAlt size={`1.5rem`} className="head-phone" />
                </span>
                <Link to={"tel:998946534884"}>+998 94 653 48 84</Link>
              </div>
            )}
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
