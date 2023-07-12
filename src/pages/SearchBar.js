import React from "react";
import { useSearch } from "../context/Search";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="text-center">
        <h1>Search Results</h1>
        <h6>
          {values.results.length < 1
            ? "No products found"
            : `Found ${values.results.length}`}
        </h6>
        <div className="card-container">
          {values.results.map((prod) => (
            <div className="card m-3" style={{ width: "20rem" }}>
              <img
                src={`http://localhost:8080/api/v1/product/get-photo/${prod._id}`}
                className="card-img-top"
                alt={prod.name}
              />
              <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p className="card-text">{prod.description.substring(0, 30)}</p>
                <p className="card-text">${prod.price}</p>
                <div className="d-flex justify-content-between">
                  <button class="btn btn-secondary">More details</button>
                  <button class="btn btn-primary">Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
