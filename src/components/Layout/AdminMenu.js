import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div className="text-center">
      <h4>Admin Panel</h4>
      <ul className="list-group">
        <li className="list-group-item">
          <NavLink
            className="admin-panel-li"
            to="/dashboard/admin/create-category"
          >
            Create category
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink
            className="admin-panel-li"
            to="/dashboard/admin/create-product"
          >
            Create product
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink className="admin-panel-li" to="/dashboard/admin/products">
            Products
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink className="admin-panel-li" to="/dashboard/admin/users">
            Users
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminMenu;
