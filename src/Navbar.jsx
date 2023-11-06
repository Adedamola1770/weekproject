import React from "react";
import image from "../src/assets/Group 2.svg";
import image2 from "../src/assets/Group 3.svg";
import "./styles/Navbar.css";
import image3 from "../src/assets/Group 6.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <Link to="/">
            <img src={image} alt="logo1" />
          </Link>
          <div>
            <ul className="d-flex align-items-center list-unstyled gap-3 ul-1">
              <Link to={`/newtask`}>
                <li className="ul-2">New Task</li>
              </Link>
              <Link to={`/alltask`}>
                <li className="ul-2">All Tasks</li>
              </Link>
              <img src={image3} alt="" />
            </ul>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Navbar;
