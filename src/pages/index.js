import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import MainBanner from "../components/ITStartup/MainBanner"
import Features from "../components/ITStartup/Features"
import ServicesArea from "../components/ITStartup/ServicesArea"
import OurFeatures from "../components/ITStartup/OurFeatures"
// import Team from "../components/Common/Team"
import FunFactsArea from "../components/Common/FunFactsArea"
// import RecentWorks from "../components/Common/RecentWorks"
// import PricingStyleOne from "../components/PricingPlans/PricingStyleOne"
// import Feedback from "../components/Common/Feedback"
// import Partner from "../components/Common/Partner"
// import BlogPost from "../components/Common/BlogPost"
import aicteLogo from "../images/aicteLogo.png"

import msme from "../images/msme.png"

import mca from "../images/mca.png"
import Footer from "../components/_App/Footer"
import { Script } from "gatsby"

const IndexPage = () => (
  
  <Layout>
    <Script  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7614767999716149"
     crossOrigin="anonymous"></Script>
    <Navbar />

    <MainBanner />

    <Features />
{/* Aicte---------- */}
    <div className="pt-40 pb-80 mb-0 aicte" >
        <div className="aicteDiv">
          <img
            src={msme}
            alt="logo"
           
            className="aicteImg"
          />
        </div>
        <div  className="aicteDiv">
          <img
            src={aicteLogo}
            alt="logo"
         
            className="aicteImg"
          />
        </div><div className="aicteDiv"  >
          <img
            src={mca}
            alt="logo"
         
            className="aicteImg"
          />
        </div>
    </div>
    <ServicesArea />

    <OurFeatures />

    {/* <Team /> */}

    {/* Youtube---------- */}
    // <div className="pricing-area youtube-div pt-80 pb-80 mb-0 bg-f9f6f6">
    //   <div className="video-box" style={{ textAlign: "center" }}>
    //     <div className="section-title">
    //       <h2>YouTube Channel</h2>
    //       <div className="bar"></div>
    //     </div>
    //     <iframe title="Descriptive title"
    //       id="youtube-iframe"
    //       style={{ }}
    //       src="https://www.youtube.com/embed/YjjCuRJGWpg?autoplay=0"
    //       frameborder="0"
    //       allowfullscreen
    //     ></iframe>
    //     {/* <!-- <div class="video-container" style="text-align: center">
    //         </div> --> */}
    //   </div>
    // </div>

    <FunFactsArea />

    {/* <RecentWorks /> */}

    {/* <PricingStyleOne />

    <Feedback />

    <Partner />

    <BlogPost /> */}
 
    <Footer />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
