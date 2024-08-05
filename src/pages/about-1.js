import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
// import Team from "../components/Common/Team"
import FunFactsArea from "../components/Common/FunFactsArea"
// import Partner from "../components/Common/Partner"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"

import AboutOne from "../images/about-one.png"

const AboutUsPage = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="About Us" />

    <div className="about-area ptb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-11">
            <div
              className="about-image"
              style={{ paddingLeft: "50px", paddingRight: "50px" }}
            >
              <img src={AboutOne} alt="About" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <div className="section-title">
                <h2>About Us</h2>
                <div className="bar"></div>
                <p>
                  At Bharat Intern, we are passionate about empowering
                  innovations that shape a better future for businesses and
                  individuals alike.
                </p>
              </div>

              <p>
                Connects students with internships: Bharat Intern connects
                students with internships in a variety of fields. This gives
                students the opportunity to gain experience, skills, and a
                network.
              </p>

              <p>
                Gives students experience, skills, and a network: Internships
                can give students valuable experience in their field. They can
                also help students develop new skills and build a network of
                contacts.
              </p>

              <p>
                Is a great way to start your career: Internships can be a great
                way to start your career. They can help you gain experience,
                skills, and a network that can help you land your first job
              </p>
            </div>
          </div>
        </div>

        <div className="about-inner-area">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>Simplified Internships</h3>
                <p>
                  Explore virtual internships in Web Dev, App Dev, Full Stack,
                  ML, and Data Science; focused learning
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>Our Mission</h3>
                <p>
                  We ensures your success and building a trusted platform for
                  valuable learning experiences.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>Structured Learning</h3>
                <p>
                  Enjoy growth-oriented internship at Bharat Intern, tailored
                  for maximum skill development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <Team />

    <Partner /> */}

    <FunFactsArea />

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="About Us" />

export default AboutUsPage
