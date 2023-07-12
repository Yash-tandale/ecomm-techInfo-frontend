import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (params.slug) getOneProduct();
  }, [params.slug]);

  //get all products
  const getOneProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/product/getOne-product/:${params.slug}`
      );
      setProduct(response.data.product);
    } catch (error) {
      console.log("Error in get all products", error);
    }
  };

  return (
    <Layout>
      <h1>Product details</h1>
      {JSON.stringify(product, null, 4)}
    </Layout>
  );
};

export default ProductDetails;
