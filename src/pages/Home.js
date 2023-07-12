import React, { useEffect, useState } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getTotal = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/product/product-count"
      );
      // console.log("PRODUCT COUNT", response);
      setTotal(response.data.total);
    } catch (error) {
      console.log("Error in getTotal", error);
    }
  };

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8080/api/v1/product/product-list/${page}`
      );
      setLoading(false);

      setProducts(response.data.products);
    } catch (error) {
      setLoading(false);
      console.log("Error in GetAllProducts:", error);
    }
  };

  const getAllCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/category/getAll-category"
      );

      setCategories(response.data.categories);
    } catch (error) {
      console.log("Error in GetAllProducts: ", error);
    }
  };

  useEffect(() => {
    getAllCategories();
    getAllProducts();
    getTotal();
  }, []);

  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  //load more
  const loadMore = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/product-list/${page}`
      );
      setProducts([...products, ...data.products]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  const handleFilter = async (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  const getFilteredProducts = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/product/product-filters",
        { checked, radio }
      );
      setProducts(response.data.products);
    } catch (error) {
      console.log("Error in getFilteredProducts", error);
    }
  };

  useEffect(() => {
    if (checked.length || radio.length) getFilteredProducts();
  }, [checked.length, radio.length]);

  return (
    <Layout>
      <div className="row mt-3">
        <div className="col-md-2">
          <h3 className="text-center">Categories</h3>
          <div className="d-flex flex-column align-items-center">
            {categories.map((c) => (
              <Checkbox
                onChange={(e) => handleFilter(e.target.checked, c._id)}
                key={c._id}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
          <h3 className="text-center mt-4">Prices</h3>
          <div className="d-flex flex-column align-items-center">
            <Radio.Group
              onChange={(e) => (
                setRadio(e.target.value), console.log(e.target.value)
              )}
            >
              {Prices.map((p) => (
                <div className="d-block" key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column align-items-center">
            <button
              className="btn btn-danger mt-3"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>
        <div className="col-md-9">
          <h3 className="text-center">Products</h3>
          <div className="card-container">
            {products.map((prod) => (
              <div className="card m-3" style={{ width: "20rem" }}>
                <img
                  src={`http://localhost:8080/api/v1/product/get-photo/${prod._id}`}
                  className="card-img-top"
                  alt={prod.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{prod.name}</h5>
                  <p className="card-text">
                    {prod.description.substring(0, 30)}
                  </p>
                  <p className="card-text">${prod.price}</p>
                  <div className="d-flex justify-content-between">
                    <button
                      class="btn btn-secondary"
                      onClick={() => navigate(`/product/${prod.slug}`)}
                    >
                      More details
                    </button>
                    <button class="btn btn-primary">Add to cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn btn-warning"
                onClick={(e) => (e.preventDefault(), setPage(page + 1))}
              >
                {loading ? "Loading..." : "Load more"}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
