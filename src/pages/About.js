import React from "react";
import Layout from "../components/Layout/Layout";
import aboutUs from "../assets/Aboutus.jpeg";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 text-center ">
          <img src={aboutUs} alt="contactus" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
          {/* <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1> */}
          <p className="text-justify mt-2">
            Amazon.com, Inc. is an American multinational technology company
            focusing on e-commerce, cloud computing, online advertising, digital
            streaming, and artificial intelligence. It has been often referred
            to as "one of the most influential economic and cultural forces in
            the world", and is often regarded as one of the world's most
            valuable brands. It is considered as one of the Big Five American
            technology companies, alongside Alphabet parent company of Google,
            Apple, Meta formerly Facebook Inc. and Microsoft.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
