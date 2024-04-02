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

    <ServicesArea />

    <OurFeatures />

    {/* <Team /> */}

    {/* Youtube---------- */}
    <div className="pricing-area youtube-div pt-80 pb-80 mb-0 bg-f9f6f6">
      <div className="video-box" style={{ textAlign: "center" }}>
        <div className="section-title">
          <h2>YouTube Channel</h2>
          <div className="bar"></div>
        </div>
        <iframe
          id="youtube-iframe"
          style={{ }}
          src="https://www.youtube.com/embed/YjjCuRJGWpg?autoplay=0"
          frameborder="0"
          allowfullscreen
        ></iframe>
        {/* <!-- <div class="video-container" style="text-align: center">
            </div> --> */}
      </div>
    </div>

    <FunFactsArea />

    {/* <RecentWorks /> */}

    {/* <PricingStyleOne />

    <Feedback />

    <Partner />

    <BlogPost /> */}
 {/* Aicte---------- */}
{/*
    <div className="pt-50 pb-80 mb-0 aicte">
        <div style={{backgroundColor:"#ffffff", borderRadius:"8px", width:"170px",height:"170px", display:"flex",justifyContent:"center",textAlign:"center", margin:"10px 70px" ,  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"}}>
          <img
            src={msme}
            alt="logo"
            style={{ margin:"auto",width:"120px",height:"120px" }}
          />
        </div>
        <div style={{backgroundColor:"#ffffff", borderRadius:"8px", width:"170px",height:"170px", display:"flex",justifyContent:"center",textAlign:"center", margin:"10px 70px" ,  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"}}>
          <img
            src={aicteLogo}
            alt="logo"
            style={{ margin:"auto",width:"120px",height:"120px" }}
          />
        </div><div style={{backgroundColor:"#ffffff", borderRadius:"8px", width:"170px",height:"170px", display:"flex",justifyContent:"center",textAlign:"center", margin:"10px 70px" ,  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"}}>
          <img
            src={mca}
            alt="logo"
            style={{ margin:"auto",width:"140px",height:"140px" }}
          />
        </div>
    </div>
    */}
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
