import React from 'react'

import { Helmet } from 'react-helmet'

import NavBarComponent from '../components/nav-bar-component'
import FooterComponent from '../components/footer-component'
import './page.css'

const Page = (props) => {
  return (
    <div id="home" className="page-container">
      <Helmet>
        <title>Page - orangeCloud</title>
        <meta
          name="description"
          content="Developing digital solutions. Deep dive into tech &amp; data to create high quality products on point."
        />
        <meta property="og:title" content="Page - orangeCloud" />
        <meta
          property="og:description"
          content="Developing digital solutions. Deep dive into tech &amp; data to create high quality products on point."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/10837bef-8822-4aed-8088-0226b5c92010/6a8cf579-cddc-4a9b-986d-f28753549135?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <NavBarComponent rootClassName="nav-bar-component-root-class-name2"></NavBarComponent>
      <div id="hero" className="page-hero">
        <div className="page-header">
          <h1 className="page-text">
            <span>404</span>
            <br></br>
          </h1>
        </div>
      </div>
      <div id="about" className="page-our-dna">
        <div className="page-header1">
          <div className="page-heading">
            <h2 className="page-text3">
              Ooops. We couldn&apos;t find the page you are looking for.
            </h2>
            <a
              href="https://orangecloud.info"
              className="page-link button-outline-darkgreen"
            >
              Go to Homepage
            </a>
          </div>
        </div>
      </div>
      <FooterComponent rootClassName="footer-component-root-class-name2"></FooterComponent>
    </div>
  )
}

export default Page
