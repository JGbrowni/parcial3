import React from "react";
import { Link } from "react-router-dom";

const ProductPage = () => {
  return (
    <>
      <section className="container">
        <div className="row pt-3 pb-3">
          <h2 className="col-12 text-center">Productos</h2>
          <span className="col-12"></span>
        </div>

        <div className="row cuadrado">
          <div className="col-md-2 col-sm-0 col-0"></div>
          <div className="col-md-8 col-sm-12 col-12">
            <div className="row">
              <div className="col-md-3 col-sm-4 col-5">
                <img src="" alt="" href="celular1.html" />
              </div>
              <div className="col-md-9 col-sm-8 col-6">
                <Link to="/productDetail">
                  <h4>
                    Sony ZV-1F Cámara de Vlog para Creadores de Contenido y
                    Vloggers Negro
                  </h4>
                </Link>

                <h5 className="fw-bold">US$498.00</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-3 pb-3">
          <span className="col-12"></span>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
