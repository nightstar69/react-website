import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
// import Navbar from "../components/_App/Navbar"
// import Footer from "../components/_App/Footer"
// import PageBanner from "../components/Common/PageBanner"
// // import { Link } from "gatsby"

// // Service Images
// import ServiceImage1 from "../images/services-image/service-image1.png"
// import ServiceImage2 from "../images/services-image/service-image2.png"
// import ServiceImage3 from "../images/services-image/service-image3.png"
// import ServiceImage4 from "../images/services-image/service-image4.png"
// import ServiceImage5 from "../images/services-image/service-image5.png"
// import ServiceImage6 from "../images/services-image/service-image6.png"

// // Shape Images
// import Shape1 from "../images/shape1.png"
// import Shape2 from "../images/shape2.svg"
// import Shape3 from "../images/shape3.svg"
// import Shape4 from "../images/shape4.svg"
import { Link } from "gatsby"

const ServicesPage2 = () => (
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

export const Head = () => <Seo title="Services" />

export default ServicesPage2
