import React from 'react'

import PropTypes from 'prop-types'

import './footer-component.css'

const FooterComponent = (props) => {
  return (
    <div className={`footer-component-container ${props.rootClassName} `}>
      <div id="footer" className="footer-component-footer">
        <footer className="footer-component-inner">
          <div className="footer-component-header">
            <a
              href="https://orangecloud.info/#home"
              className="footer-component-branding"
            >
              {props.branding}
            </a>
          </div>
          <div className="footer-component-content">
            <div className="footer-component-contact">
              <span className="footer-component-email">{props.email}</span>
              <span className="footer-component-number">{props.number}</span>
              <a
                href="https://www.linkedin.com/in/mariusni/"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-component-link"
              >
                <svg viewBox="0 0 1024 1024" className="footer-component-icon">
                  <path
                    d="M928 0h-832c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM384 832h-128v-448h128v448zM320 320c-35.4 0-64-28.6-64-64s28.6-64 64-64c35.4 0 64 28.6 64 64s-28.6 64-64 64zM832 832h-128v-256c0-35.4-28.6-64-64-64s-64 28.6-64 64v256h-128v-448h128v79.4c26.4-36.2 66.8-79.4 112-79.4 79.6 0 144 71.6 144 160v288z"
                    className=""
                  ></path>
                </svg>
              </a>
            </div>
            <div className="footer-component-links-row">
              <div className="footer-component-links-column">
                <a
                  href="https://orangecloud.info/#about"
                  className="footer-component-link1"
                >
                  {props.link}
                </a>
                <a
                  href="https://orangecloud.info/#who-we-are"
                  className="footer-component-link2"
                >
                  {props.link1}
                </a>
                <a
                  href="https://orangecloud.info/#what-we-do"
                  className="footer-component-link3"
                >
                  {props.link2}
                </a>
                <a
                  href="https://orangecloud.info/#fields-of-work"
                  className="footer-component-link4"
                >
                  {props.link3}
                </a>
                <a
                  href="https://orangecloud.info/#industries"
                  className="footer-component-link5"
                >
                  {props.link4}
                </a>
                <a
                  href="https://orangecloud.info/#contact"
                  className="footer-component-link6"
                >
                  {props.link5}
                </a>
              </div>
            </div>
          </div>
          <div className="footer-component-locations">
            <div className="footer-component-location">
              <div className="footer-component-links-column1">
                <a
                  href="https://orangecloud.info/legal-terms"
                  className="footer-component-link7"
                >
                  {props.link6}
                </a>
                <a
                  href="https://orangecloud.info/privacy-policy"
                  className="footer-component-link8"
                >
                  {props.link7}
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

FooterComponent.defaultProps = {
  link7: 'Privacy Policy',
  number: '+49 176 5768 3215',
  link6: 'Legal Terms',
  link1: 'who we are',
  link71: 'Privacy Policy',
  email: 'mail[at]orangecloud.info',
  link3: 'fields of work',
  branding: 'orangeCloud',
  link: 'our dna',
  link2: 'what we do',
  link4: 'industries',
  rootClassName: '',
  link5: 'contact',
}

FooterComponent.propTypes = {
  link7: PropTypes.string,
  number: PropTypes.string,
  link6: PropTypes.string,
  link1: PropTypes.string,
  link71: PropTypes.string,
  email: PropTypes.string,
  link3: PropTypes.string,
  branding: PropTypes.string,
  link: PropTypes.string,
  link2: PropTypes.string,
  link4: PropTypes.string,
  rootClassName: PropTypes.string,
  link5: PropTypes.string,
}

export default FooterComponent
