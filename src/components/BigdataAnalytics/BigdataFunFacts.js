import React from "react"
import { Link } from "gatsby"

const BigdataFunFacts = () => {
  return (
    <div className="funfacts-area bg-image ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>Our Flourishing Online Community</h2>
          <div className="bar"></div>
          <p>
            Join a network of like-minded individuals, unlock new possibilities,
            and experience growth on your journey to success.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-3 col-6 col-sm-6">
            <div className="single-funfact">
              <h3>180K</h3>
              <p>LinkedIn community</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-6 col-sm-6">
            <div className="single-funfact">
              <h3>100K</h3>
              <p>Telegram community</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-6 col-sm-6">
            <div className="single-funfact">
              <h3>15k</h3>
              <p>Youtube community</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-6 col-sm-6">
            <div className="single-funfact">
              <h3>1M</h3>
              <p>Website Traffic per month</p>
            </div>
          </div>
        </div>

        <div className="contact-cta-box">
          <h3>Have any question about us?</h3>
          <p>Don't hesitate to contact us</p>

          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BigdataFunFacts
