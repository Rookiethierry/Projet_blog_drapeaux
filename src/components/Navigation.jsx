import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation ">
      <NavLink
        className={({ isActive }) => (isActive ? "nav_active" : "")}
        to="/"
      >
        Acceuil
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "nav_active" : "")}
        to="/News"
      >
        News
      </NavLink>
    </div>
  );
};

export default Navigation;
