import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
// import Navbar from "../components/_App/Navbar"
// import Footer from "../components/_App/Footer"
// import PageBanner from "../components/Common/PageBanner"
// // import { Link } from "gatsby"
// import * as Icon from "react-feather"
import { Link } from "gatsby"

const ServicesPage = () => (
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

export default ServicesPage
