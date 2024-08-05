import React from "react"
import * as Icon from "react-feather"

// Cloud Hosting Services Images
import CercleShape from "../../images/services-right-image/cercle-shape.png"
import ServiceRightMainPic from "../../images/services-right-image/service-right-main-pic.png"

// Design & Development Images
import ServiceLeftMainPic from "../../images/services-left-image/service-left-main-pic.png"

const ServicesArea = () => {
  return (
    <>
      <div className="services-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div
              className="col-lg-6 col-md-12 services-content"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="section-title">
                <h2>About Us</h2>
                <div className="bar"></div>
                <p>
                At Bharat Intern, we are passionate about empowering innovations that shape a better future for businesses and individuals alike.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div className="box">
                    <span>Connects students with internships:</span> Bharat Intern connects students with internships in a variety of fields. This gives students the opportunity to gain experience, skills, and a network.
                      <br /><br />
                      <span>Gives students experience, skills, and a network:</span> Internships can give students valuable experience in their field. They can also help students develop new skills and build a network of contacts.
                      <br /><br />
                      <span>Is a great way to start your career:</span> Internships can be a great way to start your career. They can help you gain experience, skills, and a network that can help you land your first job.
                  </div>
                </div>

                {/* <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> Website Hosting
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.File /> File Storage
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.TrendingUp /> Forex Trading
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Folder /> File Backups
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Monitor /> Remote Desktop
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Mail /> Email Servers
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Cloud /> Hybrid Cloud
                  </div>
                </div> */}
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="services-right-image">
                <img
                  src={CercleShape}
                  className="bg-image rotateme"
                  alt="shape"
                />

                <img src={ServiceRightMainPic} alt="main-pic" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area ptb-80">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="services-left-image">
                <img
                  src={CercleShape}
                  className="bg-image rotateme"
                  alt="shape"
                />

                <img src={ServiceLeftMainPic} alt="main-pic" />
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12 services-content domains"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="section-title">
                <h2>Get Specialised In These Domains</h2>
                <div className="bar"></div>
                <p>
                At Bharat Intern, we excel in various domains to bring your ideas to life. Our skills include:
                </p>
              </div>

              {/* <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Layout /> Responsive Design
                  </div>
                </div> */}

                <div className="col-lg-8 col-md-6">
                  <div className="box">
                    <Icon.Code /> Web Development Basic
                  </div>
                </div>

                {/* <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Smartphone /> Android Apps Development
                  </div>
                </div> */}

                <div className="col-lg-8 col-md-6">
                  <div className="box">
                    <Icon.Code /> Full Stack Web Development
                  </div>
                </div>

                <div className="col-lg-8 col-md-6">
                  <div className="box">
                    <Icon.Smartphone /> Android Development
                  </div>
                </div>

                

                <div className="col-lg-8 col-md-6">
                  <div className="box">
                    <Icon.Code /> Machine Learning
                  </div>
                </div>

                <div className="col-lg-8 col-md-6">
                  <div className="box">
                    <Icon.Code /> Data Science
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  )
}

export default ServicesArea
