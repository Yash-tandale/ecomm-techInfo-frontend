import React from "react";
import Layout from "../components/Layout/Layout";
import privacy from "../assets/privacy.jpg";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 text-center ">
          <img src={privacy} alt="contactus" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
          {/* <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1> */}
          <p className="text-justify mt-2">
            A privacy policy is a statement or legal document in privacy law
            that discloses some or all of the ways a party gathers, uses,
            discloses, and manages a customer or client's data. Personal
            information can be anything that can be used to identify an
            individual, not limited to the person's name, address, date of
            birth, marital status, contact information, ID issue, and expiry
            date, financial records, credit information, medical history, where
            one travels, and intentions to acquire goods and services. In the
            case of a business, it is often a statement that declares a party's
            policy on how it collects, stores, and releases personal information
            it collects.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
