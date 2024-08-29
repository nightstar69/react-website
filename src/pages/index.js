import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"

// Lazy load components
const MainBanner = React.lazy(() => import("../components/ITStartup/MainBanner"))
const Features = React.lazy(() => import("../components/ITStartup/Features"))
const ServicesArea = React.lazy(() => import("../components/ITStartup/ServicesArea"))
const OurFeatures = React.lazy(() => import("../components/ITStartup/OurFeatures"))
const FunFactsArea = React.lazy(() => import("../components/Common/FunFactsArea"))
const Footer = React.lazy(() => import("../components/_App/Footer"))

import aicteLogo from "../images/aicteLogo.png"
import mca from "../images/mca.png"
import { Script } from "gatsby"

const IndexPage = () => (
  <Layout>
    <Script 
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7614767999716149"
      crossOrigin="anonymous"
    />
    <Navbar />

    {/* Wrap lazy-loaded components with Suspense */}
    <React.Suspense fallback={<div>Loading...</div>}>
      <MainBanner />
      <Features />

      {/* Aicte */}
      <div className="pt-40 pb-80 mb-0 aicte">
        <div className="aicteDiv">
          <img
            src={aicteLogo}
            alt="AICTE Logo"
            className="aicteImg"
            loading="lazy" // Lazy load images
          />
        </div>
        <div className="aicteDiv">
          <img
            src={mca}
            alt="MCA Logo"
            className="aicteImg"
            loading="lazy" // Lazy load images
          />
        </div>
      </div>

      <ServicesArea />
      <OurFeatures />
      <FunFactsArea />
      <Footer />
    </React.Suspense>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
