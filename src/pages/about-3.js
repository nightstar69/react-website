import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
// import Navbar from "../components/_App/Navbar"
// import Team from "../components/Common/Team"
// import FunFactsArea from "../components/Common/FunFactsArea"
// import Footer from "../components/_App/Footer"
// import PageBanner from "../components/Common/PageBanner"
// import FeedbackStyleThree from "../components/Common/FeedbackStyleThree"
// import Partner from "../components/MachineLearning/Partner"
// import { Link } from "gatsby"

// import AboutImg from "../images/agency-image/agency-about-img.jpg"

// // Shape Images
// import Shape2 from "../images/shape2.svg"
// import Shape3 from "../images/shape3.svg"
// import Shape4 from "../images/shape4.svg"
import { Link } from "gatsby"

const AboutUsPage3 = () => (
  <Layout>
    <div className="error-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="error-content">
              <div className="notfound-404">
                <h1>Oops!</h1>
              </div>
              <h3>404 - Page not found</h3>
              <p>
                The page you are looking for might have been removed had its
                name changed or is temporarily unavailable.
              </p>

              <Link href="/" className="btn btn-primary">
                Go to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="About Us" />

export default AboutUsPage3
