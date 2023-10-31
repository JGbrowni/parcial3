import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="text-white py-4 bg-dark">
        <div className="container">
          <nav className="row align-item-center justify-content-center">
            <div className="col-12 d-flex align-item-center justify-content-center">
              <p>
                Todos los productos estan sujetos a restricciones y otros
                términos.
              </p>
            </div>

            <div className="col-12 linea"></div>

            <div className="col-12 p-2 d-flex align-item-center justify-content-center">
              <Link to="./Homepage">
                <a>Página de Inicio </a>
              </Link>
            </div>
            <div className="col-12 p-2 d-flex align-item-center justify-content-center">
              <Link to="/products">Productos</Link>
            </div>

            <div className="col-12 linea"></div>

            <div className="col-12 p-1 d-flex align-item-center justify-content-center">
              <p>&copy; 2023 DolphinDate. Todos los derechos reservados</p>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Footer;
