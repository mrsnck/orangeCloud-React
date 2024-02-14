import React from 'react'

import PropTypes from 'prop-types'

import './nav-links.css'

const NavLinks = (props) => {
  return (
    <div className="nav-links-links">
      <a
        href="https://orangecloud.info/#who-we-are"
        className="nav-links-link navLink"
      >
        {props.link2}
      </a>
      <a
        href="https://orangecloud.info/#what-we-do"
        className="nav-links-link1 navLink"
      >
        {props.link}
      </a>
      <a
        href="https://orangecloud.info/#industries"
        className="nav-links-link2 navLink"
      >
        {props.link3}
      </a>
    </div>
  )
}

NavLinks.defaultProps = {
  link3: 'industries',
  link: 'work',
  link2: 'about',
}

NavLinks.propTypes = {
  link3: PropTypes.string,
  link: PropTypes.string,
  link2: PropTypes.string,
}

export default NavLinks
