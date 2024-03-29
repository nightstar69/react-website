import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

const OurFeatures = () => {
  return (
    <>
      <div className="features-area pt-80 pb-50 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>Our Features</h2>
            <div className="bar"></div>
            <p>
              These are just some of the our features. By providing these
              features, We can make a valuable resource for students looking for
              internships.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-features">
                <div className="icon">
                  <Icon.Settings />
                </div>
                <h3>
                  <Link to="/feature-details">Email Notifications</Link>
                </h3>
                <p>
                  The email notifications about important events, such as
                  upcoming deadlines, new assignments, and changes to your
                  schedule.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-features">
                <div className="icon">
                  <Icon.Mail />
                </div>
                <h3>
                  <Link to="/feature-details">Simple Interface</Link>
                </h3>
                <p>
                  The simplicity of the interface makes it easy to use and
                  navigate. The information is presented in a clear and concise
                  way.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-features">
                <div className="icon bg-c679e3">
                  <Icon.Grid />
                </div>
                <h3>
                  <Link to="/feature-details">Large Community</Link>
                </h3>
                <p>
                  We believe in networking to connect with other interns who are
                  interested in the same things.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-features">
                <div className="icon bg-c679e3">
                  <Icon.Info />
                </div>
                <h3>
                  <Link to="/feature-details">Deadline Reminders</Link>
                </h3>
                <p>
                  The reminders are sent to you in advance in our telegram
                  channel and your email, so you have plenty of time to get your
                  tasks done.
                </p>
              </div>
            </div>

            {/* <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-features">
                <div className="icon bg-eb6b3d">
                  <Icon.Box />
                </div>
                <h3>
                  <Link to="/feature-details">Drag & Drop Functionality</Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-features">
                <div className="icon bg-eb6b3d">
                  <Icon.Bell />
                </div>
                <h3>
                  <Link to="/feature-details">Deadline Reminders</Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default OurFeatures
