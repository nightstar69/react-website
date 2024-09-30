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

      <PageBanner pageTitle="Virtual Internship Program (Applications Currently Closed)" />

      
      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="Application Form" />

export default ServiceDetailsPage
