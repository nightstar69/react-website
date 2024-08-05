import React from "react"
import { Link } from "gatsby"

import MapImg from "../../images/map.png"

const FunFactsArea = () => {
  return (
    <>
      <div className="funfacts-area ptb-80">
        
        <div className="container">
          <div className="section-title">
            <h2>Our Flourishing Online Community</h2>
            <div className="bar"></div>
            <p>
              Join a network of like-minded individuals, unlock new
              possibilities, and experience growth on your journey to success.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-4">
              <div className="funfact">
                <h3>250K+</h3>
                <p>LinkedIn community</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-4">
              <div className="funfact">
                <h3>120K+</h3>
                <p>Telegram community</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-4">
              <div className="funfact">
                <h3>23k+</h3>
                <p>Youtube community</p>
              </div>
            </div>

          </div>

          <div className="contact-cta-box">
            <h3>Have Any Questions About Us?</h3>
            <p>Don't hesitate to contact us</p>

            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>

          <div className="map-bg">
            <img src={MapImg} alt="map" />
          </div>
        </div>
      </div>
    </>
  )
}

export default FunFactsArea
