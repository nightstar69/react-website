import React, { useState } from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import certificate from "../images/sample_certificate.png"
// import ad from "../images/sample_certificate.png"
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemPanel,
//   AccordionItemButton,
// } from "react-accessible-accordion"

// import ServicesDetails1 from "../images/services-details-image/services-details1.png"
// import ServicesDetails2 from "../images/services-details-image/services-details2.png"

const ServiceDetailsPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phoneNumber: "",
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here before submitting the form
    if (!validateEmail(formData['entry.1982024552'])) {
      alert("Please enter a valid email address");
      return;
    }
  
    if (!validateName(formData['entry.1290233279'])) {
      alert("Please enter a valid name");
      return;
    }
  
    if (!validatePhoneNumber(formData['entry.2111965591'])) {
      alert("Please enter a valid phone number of 10 digits");
      return;
    }
  
    // Proceed with form submission
    // Trigger form submission

    const form = e.target;
    form.submit();
  };

  const validateEmail = email => {
    // Email regex pattern
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const validateName = name => {
    // Name regex pattern (letters only)
    const regex = /^[a-zA-Z\s]+$/
    return regex.test(name)
  }

  const validatePhoneNumber = phoneNumber => {
    // Phone number regex pattern (10 digits)
    const regex = /^\d{10}$/
    return regex.test(phoneNumber)
  }

  // const submitForm = (formData) => {
  //   // Construct the form data
  //   const formDataEntries = Object.entries(formData);
  //   const formDataEncoded = formDataEntries.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');
  
  //   // Submit the form
  //   const url = "https://docs.google.com/forms/u/2/d/e/1FAIpQLSfuU7Nmy2Wbp0w3Er7pyH4CIYDf6N6yaN77X_KBpG-3XwFWmA/formResponse";
  //   fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     body: formDataEncoded,
  //   })
  //   .then(() => {
  //     alert("Form submitted successfully!");
  //     // Optionally reset the form fields
  //     setFormData({
  //       email: "",
  //       name: "",
  //       phoneNumber: "",
  //     });
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //     alert("Form submission failed. Please try again later.");
  //   });
  // };
  

  return (
    <Layout>
      <Navbar />

      <PageBanner pageTitle="Virtual Internship Program (August-September Session)" />

      <div
        className="services-details-area col-lg-12"
        style={{ margin: "auto", padding: "40px 0" }}
      >
        <div
          className="container col-lg-5 "
          style={{
            boxShadow: "0 2px 40px 0 rgba(0, 0, 0, 0.35)",
            padding: "30px 25px",
            backgroundColor: "#fff",
          }}
        >
          <div style={{ margin: "auto", textAlign: "center" }}>
            {/* <h4>( March - April Session )</h4><br /> */}
            <h4>Student Details</h4>
            <br />
            {/* <h6></h6> */}
          </div>
          <form onSubmit={handleSubmit} action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSfuU7Nmy2Wbp0w3Er7pyH4CIYDf6N6yaN77X_KBpG-3XwFWmA/formResponse">
            <div className="row">
              <p
                style={{
                  fontSize: "smaller",
                  padding: "10px 0 20px 20px",
                  margin: "auto",
                }}
              >
                Note: Do not fill out the form multiple times. You will receive an email (possibly in your Spam Folder) before your internship start date. Use different emails for multiple domains.
              </p>

              <div className="col-lg-12 col-md-12 apply-form-input-box ">
                <div className="form-group">
                  <label for="email">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    name="entry.1982024552"
                    value={formData['entry.1982024552']}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12  apply-form-input-box">
                <div className="form-group">
                  <label for="name">
                    Name{" "}
                    <span style={{ fontSize: "smaller", color: "#6685A6" }}>
                      (Enter your first and last name as desired for
                      certificate)
                    </span>
                    <span className="required">*</span>
                  </label>
                  <input
                    className="form-control"
                    required
                    type="text"
                    name="entry.1290233279"
                    value={formData['entry.1290233279']}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 apply-form-input-box">
                <div className="form-group">
                  <label for="phone">
                    WhatsApp Number{" "}
                    <span style={{ fontSize: "smaller", color: "#6685A6" }}>
                      (for updates regarding your internship tasks and certificate)
                    </span><span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    name="entry.2111965591"
                    value={formData['entry.2111965591']}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 apply-form-input-box">
                <div className="form-group">
                  <label>
                    Year <span className="required">*</span>
                  </label>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <input
                      type="radio"
                      name="entry.395787331"
                      id="1st"
                      value="1st Year"
                      style={{ marginRight: "12px" }}
                    />
                    <label htmlFor="1st" style={{ marginBottom: "0" }}>
                      1st Year
                    </label>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <input
                      type="radio"
                      name="entry.395787331"
                      id="2nd"
                      value="2nd Year"
                      style={{ marginRight: "12px" }}
                    />
                    <label htmlFor="2nd" style={{ marginBottom: "0" }}>
                      2nd Year
                    </label>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <input
                      type="radio"
                      name="entry.395787331"
                      id="3rd"
                      value="3rd Year"
                      style={{ marginRight: "12px" }}
                    />
                    <label htmlFor="3rd" style={{ marginBottom: "0" }}>
                      3rd Year
                    </label>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <input
                      type="radio"
                      name="entry.395787331"
                      id="4th"
                      value="4th Year"
                      style={{ marginRight: "12px" }}
                    />
                    <label htmlFor="4th" style={{ marginBottom: "0" }}>
                      4th Year
                    </label>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <input
                      type="radio"
                      name="entry.395787331"
                      id="passed"
                      value="Passed Out"
                      style={{ marginRight: "12px" }}
                    />
                    <label htmlFor="passedOut" style={{ marginBottom: "0" }}>
                      Passed Out
                    </label>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <input
                      type="radio"
                      name="entry.395787331"
                      id="other"
                      value="Other"
                      style={{ marginRight: "12px" }}
                    />
                    <label htmlFor="otherYear" style={{ marginBottom: "0" }}>
                      Other…
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 col-md-12 apply-form-input-box">
                <div className="form-group">
                  <label for="collegeBranch">
                    College Branch <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    name="entry.1706784811"
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 apply-form-input-box">
                <div className="form-group">
                  <label for="collegeName">
                    College Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    name="entry.833567097"
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12 apply-form-input-box">
                <div className="form-group">
                  <label>
                    Domain Of Internship <span className="required">*</span>
                  </label>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <input
                      type="radio"
                      name="entry.1481996660"
                      id="wd"
                      value="Web Development(Basic)"
                      style={{ marginRight: "12px" }}
                    />
                    <label
                      htmlFor="WebDevelopmentBasic"
                      style={{ marginBottom: "0" }}
                    >
                      Web Development Basic
                    </label>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <input
                      type="radio"
                      name="entry.1481996660"
                      id="fs"
                      value="Full Stack Web-Development"
                      style={{ marginRight: "12px" }}
                    />
                    <label
                      htmlFor="FullStackWebDevelopment"
                      style={{ marginBottom: "0" }}
                    >
                      Full Stack Web Development
                    </label>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <input
                      type="radio"
                      name="entry.1481996660"
                      id="ad"
                      value="App Development"
                      style={{ marginRight: "12px" }}
                    />
                    <label
                      htmlFor="AppDevelopment"
                      style={{ marginBottom: "0" }}
                    >
                      App Development
                    </label>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <input
                      type="radio"
                      name="entry.1481996660"
                      id="ml"
                      value="Machine Learning"
                      style={{ marginRight: "12px" }}
                    />
                    <label
                      htmlFor="MachineLearning"
                      style={{ marginBottom: "0" }}
                    >
                      Machine Learning
                    </label>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <input
                      type="radio"
                      name="entry.1481996660"
                      id="ds"
                      value="Data Science"
                      style={{ marginRight: "12px" }}
                    />
                    <label htmlFor="DataScience" style={{ marginBottom: "0" }}>
                      Data Science
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 col-md-12 apply-form-input-box">
                <div className="form-group">
                  <label>
                    I have joined the Telegram group (mandatory for internship updates and project information):{" "}
                    <a
                      href="https://t.me/bharatintern"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "underline" }}
                    >
                      {" "}
                      <strong>LINK</strong>
                    </a>
                    <span className="required">*</span>
                  </label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <input
                      type="radio"
                      value="Yes"
                      style={{ marginRight: "8px" }}
                      id="yes"
                      name="entry.559150970"
                    />
                    <label htmlFor="telegram" style={{ marginBottom: "0" }}>
                      Yes
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 apply-form-input-box">
                <div className="form-group">
                  <label for="collegeName">
                    Sample Certificate of Completion{" "}
                    
                  </label>
                  <img
                    src={certificate}
                    style={{ width: "80%", paddingLeft: "2px" }}
                    alt="sample certificate"
                  />
                </div>
              </div>
              <div
                className=""
                style={{
                  width: "100%",
                  paddingBottom: "10px",
                  paddingTop: "10px",
                  marginTop: "10px",
                }}
              >
                <button
                  aria-current="page"
                  style={{ width: "100%" }}
                  className="btn btn-primary order-btn"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="Application Form" />

export default ServiceDetailsPage
