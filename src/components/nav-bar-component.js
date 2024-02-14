import React from 'react'

import PropTypes from 'prop-types'

import NavLinks from './nav-links'
import './nav-bar-component.css'

const NavBarComponent = (props) => {
  return (
    <div className={`nav-bar-component-container ${props.rootClassName} `}>
      <div className="nav-bar-component-navbar">
        <header
          data-thq="thq-navbar"
          className="nav-bar-component-navbar-interactive"
        >
          <div className="nav-bar-component-branding">
            <a
              href="https://orangecloud.info"
              className="nav-bar-component-link"
            >
              {props.text}
            </a>
          </div>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="nav-bar-component-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="nav-bar-component-nav"
            >
              <div className="nav-bar-component-right">
                <NavLinks className=""></NavLinks>
                <a
                  href="https://orangecloud.info/#contact"
                  className="nav-bar-component-link1"
                >
                  <div className="nav-bar-component-button">
                    <button className="nav-bar-component-get-in-contact button">
                      <span className="nav-bar-component-text">
                        {props.text3}
                      </span>
                      <img
                        alt={props.imageAlt}
                        src={props.imageSrc}
                        className="nav-bar-component-image"
                      />
                    </button>
                  </div>
                </a>
              </div>
            </nav>
          </div>
          <div
            data-thq="thq-burger-menu"
            className="nav-bar-component-burger-menu"
          >
            <button className="nav-bar-component-work-with-us button">
              <svg viewBox="0 0 1024 1024" className="nav-bar-component-icon">
                <path
                  d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
                  className=""
                ></path>
              </svg>
            </button>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="nav-bar-component-mobile-menu"
          >
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="nav-bar-component-nav1"
            >
              <div className="nav-bar-component-top">
                <div className="nav-bar-component-branding1">
                  <span className="nav-bar-component-text1">{props.text1}</span>
                </div>
                <div
                  data-thq="thq-close-menu"
                  className="nav-bar-component-menu-close"
                >
                  <div className="nav-bar-component-container1">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="nav-bar-component-icon2"
                    >
                      <path
                        d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                        className=""
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="nav-bar-component-middle"
              >
                <div className="nav-bar-component-links">
                  <a
                    href="https://orangecloud.info/#who-we-are"
                    className="nav-bar-component-link2 navLink"
                  >
                    {props.link}
                  </a>
                  <a
                    href="https://orangecloud.info/#what-we-do"
                    className="nav-bar-component-link3 navLink"
                  >
                    {props.link1}
                  </a>
                  <a
                    href="https://orangecloud.info/#industries"
                    className="nav-bar-component-link4 navLink"
                  >
                    {props.link2}
                  </a>
                </div>
                <a
                  href="https://orangecloud.info/#contact"
                  className="nav-bar-component-work-with-us1 button"
                >
                  <span className="nav-bar-component-text2">{props.text2}</span>
                </a>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}

NavBarComponent.defaultProps = {
  imageSrc: '/hamburger.svg',
  imageAlt: 'image',
  link2: 'industries',
  text1: 'menu',
  text: 'orangeCloud',
  linkText: 'https://orangecloud.info/',
  text3: 'get in contact',
  text2: 'get in contact',
  link: 'about',
  rootClassName: '',
  link1: 'work',
}

NavBarComponent.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  link2: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  linkText: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  link: PropTypes.string,
  rootClassName: PropTypes.string,
  link1: PropTypes.string,
}

export default NavBarComponent
