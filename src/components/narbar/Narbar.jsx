import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Narbar.css";
import logo from "../../images/image1.jpg";

const Narbar = () => {
  const location = useLocation();

  return (
    <div className="nav-wrap">
      <div className="image">
        <img src={logo} alt="" />
      </div>
      <ul className="list">
        <li
          className={`item register ${
            location.pathname === "/" ? "active" : ""
          }`}
        >
          <Link className="link registerLink" to="/content">
            <span className="icon">
              <i class="fa-regular fa-user"></i>
            </span>
            <span className="text">List Of Registered</span>
          </Link>
        </li>
        <li
          className={`item log ${
            location.pathname === "/list" ? "active" : ""
          }`}
        >
          <Link className="link logLink" to="/contentlog">
            <span className="icon">
              <i class="fa-solid fa-list"></i>
            </span>
            <span className="text">List Of Log</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Narbar;
