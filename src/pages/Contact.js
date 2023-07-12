import React from "react";
import Layout from "../components/Layout/Layout";
import contactImg from "../assets/contact.jpg";
// import { FiMessageSquare } from "react-icons/fi";
import { BiPhoneCall, BiMailSend, BiSupport } from "react-icons/bi";
// import { BsHeadset } from "react-icons/bs";

const Contact = () => {
  return (
    <Layout>
      {/* <div className="container">
        <div className="img-container">
          <img src={contactImg} alt="contact-img" />
        </div>
        <div className="data-container">
          <div className="heading">Contact</div>
          <div className="contact-info">
            <p>Any query about product feel free to call anytime</p>

            <p>
              <FiMessageSquare /> : www.help@ecommerceapp.com
            </p>
            <p>
              <BiPhoneCall /> : +919619988998
            </p>
            <p>
              <BsHeadset /> : 1800-0000-000
            </p>
          </div>
        </div>
      </div> */}
      <div className="row contactus ">
        <div className="col-md-6 text-center ">
          <img src={contactImg} alt="contactus" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
