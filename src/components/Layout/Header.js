import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { useAuth } from "../../context/Auth";
import SearchInput from "../Form/SearchInput";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const tokenData = localStorage.getItem("auth");
  const navigate = useNavigate();

  const logoutHandler = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link
              className="navbar-brand text-decoration-none"
              style={{ textDecoration: "none" }}
            >
              <HiShoppingCart /> Ecommerce
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <SearchInput />
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/category"
                  className="nav-link"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  Category
                </NavLink>
              </li>
              {tokenData ? (
                <>
                  <button
                    className="nav-link"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    {auth?.user?.name}
                  </button>
                  {showDropdown ? (
                    <div className="dropDown-box">
                      <ul>
                        <li>
                          <NavLink
                            className="dropDown-li"
                            to={`/dashboard/${
                              auth?.user?.role === 1 ? "admin" : "user"
                            }`}
                          >
                            Dashboard
                          </NavLink>
                          <NavLink
                            className="dropDown-li"
                            onClick={logoutHandler}
                            to="/logout"
                          >
                            Logout
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  ) : null}
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/register"
                      className="nav-link"
                      style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className="nav-link"
                      style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              )}

              <li className="nav-item">
                <NavLink
                  to="/cart"
                  className="nav-link"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  Cart(0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
