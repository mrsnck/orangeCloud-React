import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavBarComponent from '../components/nav-bar-component'
import FooterComponent from '../components/footer-component'
import './home.css'

const Home = (props) => {
  return (
    <div id="home" className="home-container">
      <Helmet>
        <title>orangeCloud</title>
        <meta
          name="description"
          content="Developing digital solutions. Deep dive into tech &amp; data to create high quality products on point."
        />
        <meta property="og:title" content="orangeCloud" />
        <meta
          property="og:description"
          content="Developing digital solutions. Deep dive into tech &amp; data to create high quality products on point."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/10837bef-8822-4aed-8088-0226b5c92010/6a8cf579-cddc-4a9b-986d-f28753549135?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <NavBarComponent rootClassName="nav-bar-component-root-class-name"></NavBarComponent>
      <div id="hero" className="home-hero">
        <div className="home-header">
          <h1 className="home-text">
            <span>
              Pushing sustainable change by building digital products people
              fall in love with.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
          </h1>
        </div>
        <div className="home-hero-image">
          <img alt="image" src="/computer.svg" className="home-image" />
        </div>
      </div>
      <div id="about" className="home-our-dna">
        <div className="home-header1">
          <span className="caption">our DNA</span>
          <div className="home-heading">
            <h2 className="home-text03">
              We are a technology-driven product studio.
            </h2>
            <span className="home-text04">
              <span className="home-text05">
                We love data, design and users. 
              </span>
              <span>
                With years of experience in product management and development,
                we are more hungry than ever to build solutions for users to
                fall in love with.
              </span>
              <br></br>
              <span>
                We develop digital products for good. Our values drive us to
                make use of technology to push sustainable change.
              </span>
              <br></br>
            </span>
          </div>
          <a href="#who-we-are" className="home-link button-outline-darkgreen">
            who we are
          </a>
        </div>
        <div className="home-preview">
          <div className="home-image1">
            <img alt="image" src="/preview.svg" className="home-image2" />
          </div>
          <div className="home-image3">
            <img
              alt="Every software project should be watched at least by one cat"
              src="/cat.svg"
              className="home-image4"
            />
          </div>
        </div>
      </div>
      <div id="who-we-are" className="home-who-we-are">
        <div className="home-about-us">
          <div className="home-header2">
            <span className="caption">Who we are</span>
            <h2 className="home-description">
              We are a team of product managers, software developers and UX
              designers. We build reliable, sustainable digital solutions people
              want to use.
            </h2>
          </div>
          <div className="home-statistics">
            <div className="home-statistic">
              <span className="home-text10">10+</span>
              <span className="home-text11">Years of Experience</span>
            </div>
            <div className="home-statistic1">
              <span className="home-text12">&lt;--&gt;</span>
              <span className="home-text13">Wide Range of Expertise</span>
            </div>
            <div className="home-statistic2">
              <span className="home-text14">-&gt;&lt;-</span>
              <span className="home-text15">Solution in Focus</span>
            </div>
            <div className="home-statistic3">
              <span className="home-text16">☉</span>
              <span className="home-text17">Products on Point</span>
            </div>
          </div>
          <div className="home-description1">
            <span className="home-description2">
              Creating digital solutions in an outcome-focused way, without
              losing attention to detail and with full dedication to quality.
              With our combined expertise, we bring a range of skills and deep
              understanding to the table. The goal is to deliver products that
              fully cater to the needs and desires of our users.
            </span>
            <span className="home-description3">
              We are a team that thrives on the challenges of product
              development. We love what we do, and our commitment to excellence
              drives us to create exceptional digital solutions that make a
              difference. Join us as we continue to innovate and build products
              in the digital landscape.
            </span>
            <a
              href="#what-we-do"
              className="home-link1 button-outline-brightgreen"
            >
              <span className="home-text18">
                <span>what we do</span>
                <br></br>
              </span>
            </a>
          </div>
          <div className="home-gallery">
            <div className="home-container1"></div>
            <img
              alt="image"
              src="/clark-van-der-beken-900px-1300w.jpg"
              className="home-image5"
            />
          </div>
        </div>
      </div>
      <div id="what-we-do" className="home-what-we-do">
        <div className="home-purpose">
          <span className="caption">What we do</span>
          <span className="home-description4">
            We arrive at business-reflective decisions by integrating strategic
            thinking with mature design and top-notch functionality. From
            helping transform the image of a legacy brand to creating an
            ultra-modern identity to building SaaS products from ground up –
            we’re always ready for a fresh challenge.
          </span>
        </div>
      </div>
      <div id="fields-of-work" className="home-fields-of-work">
        <div className="home-inner">
          <div className="home-fields">
            <span className="home-caption3 caption">Fields of Work</span>
            <div className="home-list">
              <div data-role="accordion-container" className="accordion-item">
                <div className="accordion-trigger accordion-trigger-active">
                  <span className="home-title headlines-fields">Product</span>
                </div>
                <div
                  data-role="accordion-content"
                  className="accordion-content accordion-content-active"
                >
                  <span className="home-text21">
                    Discovery &amp; Validation
                  </span>
                  <span className="home-text22">Data Driven Decisions</span>
                  <span className="home-text23">Agile Development</span>
                  <span className="home-text24">Customer Feedback</span>
                </div>
              </div>
              <div data-role="accordion-container" className="accordion-item">
                <div
                  data-role="accordion-trigger"
                  className="home-trigger1 accordion-trigger accordion-trigger-active"
                >
                  <span className="home-title1 headlines-fields">SaaS</span>
                </div>
                <div
                  data-role="accordion-content"
                  className="accordion-content accordion-content-active"
                >
                  <span className="home-text25">Business Automation</span>
                  <span className="home-text26">AI Development</span>
                </div>
              </div>
              <div data-role="accordion-container" className="accordion-item">
                <div
                  data-role="accordion-trigger"
                  className="home-trigger2 accordion-trigger accordion-trigger-active"
                >
                  <span className="home-title2 headlines-fields">
                    Tech Startup
                  </span>
                </div>
                <div
                  data-role="accordion-content"
                  className="accordion-content accordion-content-active home-details1"
                >
                  <span className="home-text27">Entrepreneurship</span>
                  <span className="home-text28">Lean Thinking</span>
                  <span className="home-text29">Max. Outcome</span>
                </div>
              </div>
              <div data-role="accordion-container" className="accordion-item">
                <div
                  data-role="accordion-trigger"
                  className="home-trigger3 accordion-trigger accordion-trigger-active"
                >
                  <span className="home-title3 headlines-fields">
                    Prototypes &amp; MVP
                  </span>
                </div>
                <div
                  data-role="accordion-content"
                  className="accordion-content accordion-content-active"
                >
                  <span className="home-text30">Low-Code Development</span>
                  <span className="home-text31">Testing &amp; Discovery</span>
                </div>
              </div>
              <div data-role="accordion-container" className="accordion-item">
                <div
                  data-role="accordion-trigger"
                  className="accordion-trigger accordion-trigger-active"
                >
                  <span className="home-title4 headlines-fields">
                    Data Analytics
                  </span>
                </div>
                <div
                  data-role="accordion-content"
                  className="accordion-content accordion-content-active"
                >
                  <span className="home-text32">
                    Big-Data Analytics &amp; Insights
                  </span>
                </div>
              </div>
              <div data-role="accordion-container" className="accordion-item">
                <div
                  data-role="accordion-trigger"
                  className="home-trigger5 accordion-trigger accordion-trigger-active"
                >
                  <span className="headlines-fields">Influencer Marketing</span>
                </div>
                <div
                  data-role="accordion-content"
                  className="accordion-content accordion-content-active"
                >
                  <span className="home-text33">AI Discovery Processes</span>
                  <span className="home-text34">Content Creator Analysis</span>
                  <span className="home-text35">Campaign Automation</span>
                </div>
              </div>
              <div data-role="accordion-container" className="accordion-item">
                <div
                  data-role="accordion-trigger"
                  className="home-trigger6 accordion-trigger accordion-trigger-active"
                >
                  <span className="home-title6 headlines-fields">Web</span>
                </div>
                <div
                  data-role="accordion-content"
                  className="accordion-content accordion-content-active"
                >
                  <span className="home-text36">Modern Web Development</span>
                </div>
              </div>
              <div data-role="accordion-container" className="accordion-item">
                <div
                  data-role="accordion-trigger"
                  className="home-trigger7 accordion-trigger accordion-trigger-active"
                >
                  <span className="home-title7 headlines-fields">SEO/SEA</span>
                </div>
                <div
                  data-role="accordion-content"
                  className="accordion-content accordion-content-active"
                >
                  <span className="home-text37">Campaign Planing</span>
                  <span className="home-text38">Extended Tracking</span>
                </div>
              </div>
              <div data-role="accordion-container" className="accordion-item">
                <div
                  data-role="accordion-trigger"
                  className="home-trigger8 accordion-trigger accordion-trigger-active"
                >
                  <span className="home-title8 headlines-fields">Media</span>
                </div>
                <div
                  data-role="accordion-content"
                  className="accordion-content accordion-content-active"
                >
                  <span className="home-text39">Web-Optimized Content</span>
                </div>
              </div>
            </div>
            <div>
              <div className="home-container3">
                <Script
                  html={`<script>
      /*
  Accordion - Code Embed
  */

  /* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
  the Accordions will still work*/

  const listenForUrlChangesAccordion = () => {
        let url = location.href;
        document.body.addEventListener(
          "click",
          () => {
            requestAnimationFrame(() => {
              if (url !== location.href) {
                runAccordionCodeEmbed();
                url = location.href;
              }
            });
          },
          true
        );
      };


  const runAccordionCodeEmbed = () => {
      const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
      const allTriggers = document.querySelectorAll('[data-role="accordion-trigger"]'); // All accordion triggers
      const allContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content

      accordionContainers.forEach((container) => {
        const accordionTrigger = container.querySelector('[data-role="accordion-trigger"]'); // Scopped accordion trigger
        const accordionContent = container.querySelector('[data-role="accordion-content"]'); // Scopped accordion content

        accordionTrigger.addEventListener("click", ()=>{
          /*
          Uncomment the code bellow to make all the other sections
          collapse when clicking on one of them.

          allTriggers.forEach(trigger => trigger.classList.remove("accordion-trigger-active"))
          allContents.forEach(content => content.classList.remove("accordion-content-active"))
          */
          if(accordionContent.classList.contains("accordion-content-active")){
            accordionContent.classList.remove("accordion-content-active");
            accordionTrigger.classList.remove("accordion-trigger-active")
          } else {
            accordionContent.classList.add("accordion-content-active");
            accordionTrigger.classList.add("accordion-trigger-active")
          }
        })

      });
  }

  runAccordionCodeEmbed()
  listenForUrlChangesAccordion()

  /*
  Here's what the above is doing:
      1. Selects all accordion containers, contents, and icons
      2. Hides all accordion contents
      3. Adds an event listener to each accordion container
      4. When an accordion container is clicked, it:
          - Hides all accordion contents
          - Resets all icon transforms to 0deg (default)
          - Checks if this container has class "accordion-open"
              - If it does, it removes class "accordion-open"
              - If it doesn't, it:
                  - Removes class "accordion-open" from all containers
                  - Adds class "accordion-open" to this container
                  - Shows accordion content
                  - Rotates accordion icon 180deg
  */
</script>
`}
                ></Script>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="industries" className="home-industries">
        <div className="home-inner1">
          <div className="home-industries1">
            <span className="home-caption4 caption">Industries</span>
            <div className="home-sections">
              <div className="section-4col">
                <span className="home-text40">Tax, Audit &amp; Consulting</span>
                <span className="home-text41">
                  Understanding the industry&apos;s need to transform. New work
                  &amp; employer branding in focus.
                </span>
                <a
                  href="https://www.mazars.de"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link2 inlineLink"
                >
                  mazars.de -&gt;
                </a>
              </div>
              <div className="section-4col">
                <span className="home-text42">Influencer Marketing</span>
                <span className="home-text43">
                  <span>
                    Deep dive into data analytics, influencer discovery and
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    campaign planing. Explore ReachOut for more information.
                  </span>
                </span>
                <a
                  href="https://reachout.digital"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inlineLink"
                >
                  reachout.digital -&gt;
                </a>
              </div>
              <div className="section-4col">
                <span className="home-text46">Startup &amp; Agency</span>
                <span className="home-text47">
                  Data-driven decisions that speed up product development and
                  bring projects to a happy end.
                </span>
                <a
                  href="https://emmora.de"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link4 inlineLink"
                >
                  emmora.de -&gt;
                </a>
                <a
                  href="https://www.bildundernte.de"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link5 inlineLink"
                >
                  bildundernte.de -&gt;
                </a>
              </div>
              <div className="section-4col">
                <span className="home-text48">Law &amp; Notaries</span>
                <span className="home-text49">
                  Carry strong values into modern times. Understanding the
                  industry and see it&apos;s opportunities.
                </span>
                <a
                  href="https://www.kuemmerlein.de"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link6 inlineLink"
                >
                  kuemmerlein.de -&gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="home-cta-contact">
        <div className="home-content1">
          <div className="home-left">
            <span className="caption">Contact</span>
            <h2 className="home-text50">
              Book a 20 minutes consultation to check how can we help you
            </h2>
            <a
              href="https://calendly.com/mariusni/20min"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link7 button-outline-darkgreen"
            >
              <span className="home-text51">book a call</span>
            </a>
          </div>
          <div className="home-right">
            <img alt="image" src="/message.svg" className="home-image6" />
          </div>
        </div>
      </div>
      <FooterComponent rootClassName="footer-component-root-class-name"></FooterComponent>
    </div>
  )
}

export default Home
