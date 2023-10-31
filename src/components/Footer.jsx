import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/Logodelfin.png";

const Footer = () => {
  return (
    <>
      <div className="text-white py-4 bg-dark">
        <div className="container">
          <nav className="row">
            <Link
              to="/"
              className="col-12 col-md-3 d-flex align-item-center justify-content-center"
            >
              <img src={Logo} className="mx-2" />
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Footer;
