import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

import Logo from "../../images/logo.png"
import MapImg from "../../images/map.png"
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <footer className="footer-area bg-f7fafd">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-footer-widget">
                <div className="logo">
                  <Link to="/">
                    <img src={Logo} alt="logo" width={130} />
                  </Link>
                </div>
                <p>
                  Our goal is to empower the next generation of tech leaders.
                  Our internship program offers hands-on experience in different
                  fields.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-footer-widget pl-5">
                <h3>Find more</h3>
                <ul className="list">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about-1">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/services-5">Apply</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-footer-widget">
                <h3>Follow us</h3>
                <ul className="list">
                  {/* <li>
                    <Link to="/faq">FAQ's</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/term-condition">Terms & Condition</Link>
                  </li>
                  <li>
                    <Link to="/team">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ marginRight: "10px" }}
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      LinkedIn
                    </Link>
                  </li>

                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li> */}

                  <li>
                    <a
                      href="https://www.linkedin.com/company/bharat-intern/"
                      class="linkedin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        style={{marginRight: "10px"
 }}                     >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/bharatintern"
                      class="facebook"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 32 32"
                        fill="none"
                        stroke="#6084a4"
                        stroke-width="1.5"
                        style={{marginRight: "10px"}}
                      >
                        <path d="M24.687,30.163c-0.402,0-0.843-0.132-1.32-0.395l-10.803-7.976c-0.121-0.089-0.195-0.228-0.203-0.378    c-0.007-0.15,0.053-0.295,0.165-0.396L25.322,9.503c0.205-0.185,0.521-0.169,0.706,0.037c0.185,0.205,0.168,0.521-0.037,0.706    l-12.34,11.106l10.254,7.576c0.271,0.145,0.729,0.329,1.055,0.178c0.332-0.152,0.496-0.637,0.576-1.017l4.375-20.617    c0.17-0.681,0.088-1.229-0.215-1.481c-0.231-0.192-0.575-0.206-0.947-0.038L3.033,15.871C2.244,16.188,1.996,16.514,2,16.622    c0.003,0.071,0.173,0.267,0.68,0.422l6.375,1.99l6.999-4.416c0.234-0.146,0.542-0.077,0.689,0.156    c0.147,0.233,0.078,0.542-0.156,0.689l-7.194,4.539C9.269,20.08,9.116,20.1,8.977,20.057l-6.592-2.058    c-1.17-0.358-1.37-0.99-1.384-1.335c-0.02-0.473,0.253-1.157,1.667-1.723l25.695-9.908c0.697-0.318,1.445-0.25,1.974,0.191    c0.613,0.511,0.813,1.413,0.549,2.474l-4.371,20.598c-0.184,0.878-0.566,1.457-1.137,1.719    C25.163,30.114,24.933,30.163,24.687,30.163z" />
                      </svg>
                      Telegram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@BharatIntern"
                      class="linkedin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        width="27"
                        style={{marginRight: '8px'}}
                        height="27"
                        viewBox="0 -0.5 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.168 19.0028C20.4724 19.0867 22.41 17.29 22.5 14.9858V9.01982C22.41 6.71569 20.4724 4.91893 18.168 5.00282H6.832C4.52763 4.91893 2.58998 6.71569 2.5 9.01982V14.9858C2.58998 17.29 4.52763 19.0867 6.832 19.0028H18.168Z"
                          stroke="#6084a4"
                          stroke-width="2.0"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.008 9.17784L15.169 11.3258C15.3738 11.4454 15.4997 11.6647 15.4997 11.9018C15.4997 12.139 15.3738 12.3583 15.169 12.4778L12.008 14.8278C11.408 15.2348 10.5 14.8878 10.5 14.2518V9.75184C10.5 9.11884 11.409 8.77084 12.008 9.17784Z"
                          stroke="#6084a4"
                          stroke-width="2.0"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      YouTube
                    </a>
                  </li>


                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-footer-widget">
                <h3>Address</h3>

                <ul className="footer-contact-info">
                  <li>
                    <Icon.MapPin />
                    Bhopal, Madhya Pradesh,
                    <br /> India
                  </li>
                  <li>
                    <Icon.Mail />
                    Business Inquiries:{" "}
                    <a href="mailto:bharatintern.info@gmail.com">
                      bharatintern.info@gmail.com
                    </a>
                  </li>
<li>
                    <Icon.Mail />
                    Student Support:{" "}
                    <a href="mailto:contact.bharatintern@gmail.com">
                      contact.bharatintern@gmail.com
                    </a>
                  </li>
                  {/* <li>
                    <Icon.PhoneCall />
                    Phone: <a href="tel:321984754">+ (321) 984 754</a>
                  </li> */}
                </ul>

                {/* <ul className="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com"
                      className="facebook"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com"
                      className="twitter"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Youtube />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com"
                      className="instagram"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Instagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com"
                      className="linkedin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                {/* <p>
                  Copyright &copy; {currentYear} Spet. All rights reserved by{" "}
                  <a
                    href="https://envytheme.com"
                    target="_blank"
                    
                  >
                    EnvyTheme
                  </a>
                </p> */}
                <p>
                  Copyright &copy; {currentYear} Bharat Intern. All rights
                  reserved by{" "}
                  <a
                    href="https://bharatintern.live/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    BharatIntern
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <img src={MapImg} className="map" alt="map" height={250}/>

        {/* Shape Images */}
        <div className="shape1">
          <img src={Shape1} alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
      </footer>
    </>
  )
}

export default Footer
