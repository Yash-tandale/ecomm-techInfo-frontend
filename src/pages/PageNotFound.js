import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout>
      <div className="pnf">
        <h1 className="pnf-error">404</h1>
        <p>PAGE NOT FOUND</p>
        <Link to="/" className="go-back-btn">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
