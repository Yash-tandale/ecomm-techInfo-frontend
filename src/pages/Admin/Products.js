import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/product/getAll-product"
      );
      console.log(response);
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-7 text-center">
            <h1>All products</h1>
            <div className="d-flex">
              {products.map((prod) => (
                <Link
                  to={`/dashboard/admin/product/${prod.slug}`}
                  key={prod._id}
                  className="product-link"
                >
                  <div className="card m-3" style={{ width: "18rem" }}>
                    <img
                      src={`http://localhost:8080/api/v1/product/get-photo/${prod._id}`}
                      className="card-img-top"
                      alt={prod.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{prod.name}</h5>
                      <p className="card-text">{prod.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
