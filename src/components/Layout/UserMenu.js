import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className="text-center">
      <h4>Dashboard</h4>
      <ul className="list-group">
        <li className="list-group-item">
          <NavLink className="admin-panel-li" to="/dashboard/user/profile">
            Profile
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink className="admin-panel-li" to="/dashboard/user/orders">
            Orders
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
