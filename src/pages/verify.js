import React, { useState } from "react"
import axios from "axios"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import { toast, ToastContainer } from "react-toastify"
import loadingImg from "../images/loading.svg"
import "react-toastify/dist/ReactToastify.css"

const Verify = () => {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)
  const verifyCertificate = async event => {
    event.preventDefault()
    const email = event.target.email.value

    try {
      setLoading(true)

      const response = await axios.post(
        "https://verify-api.onrender.com/verify",
        // "http://localhost:3000/verify",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      if (!response.data[0] || response.status !== 200) {
        throw new Error("Failed to verify certificate")
      }

      const data = response.data
      console.log(data)
      setLoading(false)
      toast.success("Certificate verified!")
      setUserData(data) // Update state with user data
    } catch (error) {
      setLoading(false)
      setUserData(null)
      toast.error("Failed to verify certificate") // Show toast notification
      console.error("Error:", error.message)
    }
  }

  return (
    <Layout>
      <Navbar />
      <PageBanner pageTitle="Verify your Certificate" />
      <div
        className="services-details-area col-lg-12"
        style={{ margin: "auto", padding: "40px 0", borderRadius: "20px" }}
      >
        <div
          className="container col-lg-5 "
          style={{
            boxShadow: "0 2px 40px 0 rgba(0, 0, 0, 0.35)",
            padding: "30px 25px",
            backgroundColor: "#fff",
            borderRadius: "10px",
          }}
        >
          <form action="#!" onSubmit={verifyCertificate} method="post">
            <div className="row">
              <div className="col-lg-12 col-md-12  apply-form-input-box">
                <div className="form-group">
                  <input
                    className="form-control"
                    required
                    type="text"
                    name="email"
                    placeholder="Enter Certificate Code or Email Id"
                  />
                </div>
              </div>
              <div
                className=""
                style={{
                  width: "100%",
                  paddingBottom: "10px",
                  paddingTop: "10px",
                  marginTop: "0px",
                }}
              >
                <button
                  aria-current="page"
                  style={{ width: "100%" }}
                  className="btn btn-primary order-btn"
                  type="submit"
                >
                  {!loading && <span>Search</span>}
                  {loading && (
                    <>
                      <span>Searching </span>{" "}
                      <img
                        src={loadingImg}
                        style={{ width: "30px", height: "30px" }}
                        alt="loading"
                      />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Display user data if available */}
        {userData && (
          <div
            className="container col-lg-5"
            style={{
              boxShadow: "0 2px 40px 0 rgba(0, 0, 0, 0.35)",
              padding: "30px 25px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              marginTop: "30px",
            }}
          >
            <div style={{ margin: "auto", textAlign: "center" }}>
              <h5 style={{ margin: "0" }}>Student Details</h5>
              <br />
            </div>
            <div style={{ lineHeight: "2", fontSize: "16px" }}>
              {userData.map((user, index) => (
                <div key={index} style={{ marginBottom: "30px" }}>
                  <p style={{ fontSize: "16px", color: "#1DB44C" }}>
                    <span style={{ textDecorationLine: "underline" }}>
                      Internship
                    </span>
                    : {index + 1}
                  </p>
                  <h6
                    style={{
                      padding: "10px",
                      backgroundColor: "#fff",
                      border: "1px solid #1DB44C",
                      borderRadius: "6px",
                      marginBottom: "10px",
                    }}
                  >
                    Name: <span style={{ color: "#6788AC" }}>{user.name}</span>
                  </h6>
                      <h6
                    style={{
                      padding: "10px",
                      backgroundColor: "#fff",
                      border: "1px solid #1DB44C",
                      borderRadius: "6px",
                      marginBottom: "10px",
                    }}
                  >
                    Certificate Code:{" "}
                    <span style={{ color: "#6788AC" }}>{user.code}</span>
                  </h6>
                  <h6
                    style={{
                      padding: "10px",
                      backgroundColor: "#fff",
                      border: "1px solid #1DB44C",
                      borderRadius: "6px",
                      marginBottom: "10px",
                    }}
                  >
                    Domain:{" "}
                    <span style={{ color: "#6788AC" }}>{user.domain}</span>
                  </h6>
                  <h6
                    style={{
                      padding: "10px",
                      backgroundColor: "#fff",
                      border: "1px solid #1DB44C",
                      borderRadius: "6px",
                      marginBottom: "10px",
                    }}
                  >
                    Duration: <span style={{ color: "#6788AC" }}>4 weeks</span>
                  </h6>
                  <h6
                    style={{
                      padding: "10px",
                      backgroundColor: "#fff",
                      border: "1px solid #1DB44C",
                      borderRadius: "6px",
                      marginBottom: "10px",
                    }}
                  >
                    Starting Date:{" "}
                    <span style={{ color: "#6788AC" }}>{user.start}</span>
                  </h6>
                  <h6
                    style={{
                      padding: "10px",
                      backgroundColor: "#fff",
                      border: "1px solid #1DB44C",
                      borderRadius: "6px",
                      marginBottom: "10px",
                    }}
                  >
                    Ending Date:{" "}
                    <span style={{ color: "#6788AC" }}>{user.end}</span>
                  </h6>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
      <ToastContainer />
    </Layout>
  )
}

export const Head = () => <Seo title="Verify Certificate" />

export default Verify
