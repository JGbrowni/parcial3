import React from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../assets/img/Logodelfin.png";

const Navigation = () => {
  return (
    <>
      <div className="header-fondo">
        <div className="logo">
          <img src={Logo} alt="" href="#" />
        </div>
      </div>
      <nav>
        <div className="nav-bar">
          <div className="secciones flex flex-row justify-center">
            <div className="seccionesbar col-sm-2 p-2">
              <Link to="/">
                <i className="fa-solid fa-house fa-lg"></i>
              </Link>
            </div>
            <div className="seccionesbar col-sm-2 p-2">
              <Link to="/products">Productos</Link>
            </div>
            <div className="seccionesbar col-sm-2 p-2">
              <Link to="/carrito">
                <i className="fa-solid fa-cart-shopping fa-lg"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navigation;

