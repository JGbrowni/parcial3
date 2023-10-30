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
          <div className="secciones d-flex flex-row justify-content-between">
            <div className="seccionesbar col-sm-2 p-2">
              <Link to="/">
                <i className="fa-solid fa-house fa-lg"></i>
              </Link>
            </div>
            <div className="seccionesbar col-sm-2 p-2">
              <Link to="/products">Productos</Link>
            </div>
            <div className="seccionesbar col-sm-2 p-2">
              <Link to="">Tendencia</Link>
            </div>
            <div className="seccionesbar col-sm-2 p-2">
              <Link to="">Contactos</Link>
            </div>
            <div className="seccionesbar col-sm-2 p-2">
              <Link to="">FAQ</Link>
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

