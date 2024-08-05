import React, { useEffect } from "react";
import { useLocation } from "@reach/router";
import Layout from "../components/_App/layout";
import Seo from "../components/_App/seo";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from "../components/Common/PageBanner";

const Redirect = () => {
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const redirectUrl = queryParams.get("url");

    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  }, [location]);

  return (
    <Layout>
      <Navbar />
      <PageBanner pageTitle="Virtual Internship Program (August-September Session)" />
      <Footer />
    </Layout>
  );
};

export const Head = () => <Seo title="Redirect" />;

export default Redirect;
