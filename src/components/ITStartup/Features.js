import React from "react"
import * as Icon from "react-feather"
import { Link } from "gatsby"

const Features = () => {
  return (
    <>
      <div className="boxes-area">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-box">
                <div className="icon">
                  <Icon.Server />
                </div>

                <h3>
                  <Link to="/feature-details">Simplified Internships</Link>
                </h3>

                <p>
                  Explore virtual internships in Web Dev, App Dev, Full Stack,
                  ML, and Data Science; focused learning
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-box bg-f78acb">
                <div className="icon">
                  <Icon.Code />
                </div>

                <h3>
                  <Link to="/feature-details">Build your Network</Link>
                </h3>

                <p>
                  We believe in networking to connect with other interns who are
                  interested in the same things.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-box bg-c679e3">
                <div className="icon">
                  <Icon.Users />
                </div>

                <h3>
                  <Link to="/feature-details">Building Student Trust</Link>
                </h3>

                <p>
                  We ensures your success and building a trusted platform for
                  valuable learning experiences.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-box bg-eb6b3d">
                <div className="icon">
                  <Icon.GitBranch />
                </div>

                <h3>
                  <Link to="/feature-details">Structured Learning</Link>
                </h3>

                <p>
                  Enjoy growth-oriented internship at Bharat Intern, tailored
                  for maximum skill development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
