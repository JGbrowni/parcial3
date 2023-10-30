import React from "react";
import { Link } from "react-router-dom";
import Celularicono from "../assets/img/celularpeque.png";
import Celularicono1 from "../assets/img/celularpeque2.png";
import Celularicono3 from "../assets/img/celularpeque3.png";

const ProductPage = () => {
  return (
    <>
      <section className="container">
        <div className="row pt-3 pb-3">
          <span className="col-12"></span>
        </div>

        <div className="row cuadrado">
          <div className="col-md-2 col-sm-0 col-0"></div>
          <div className="col-md-8 col-sm-12 col-12">
            <div className="row">
              <div className="col-md-3 col-sm-4 col-5">
                <img src={Celularicono} alt="" href="" />
              </div>
              <div className="col-md-9 col-sm-8 col-6">
                <Link to="/productDetail">
                  <h4>Samsung Galaxy A53 5G</h4>
                </Link>
                <p>
                  Telefono desbloqueado de fabrica, bateria de larga duracion
                </p>
                <h5 className="fw-bold">US$284.31</h5>
              </div>
              <div className="col-md-3 col-sm-4 col-5">
                <img src={Celularicono1} alt="" href="" />
              </div>
              <div className="col-md-9 col-sm-8 col-6">
                <Link to="/productDetail2">
                  <h4>Samsung Galaxy A14 5G</h4>
                </Link>
                <p>
                  Camara triple de 6.6 pulgadas de 50MP, desbloqueado en todo el
                  mundo
                </p>
                <h5 className="fw-bold">US$132.31</h5>
              </div>
              <div className="col-md-3 col-sm-4 col-5">
                <img src={Celularicono3} alt="" href="" />
              </div>
              <div className="col-md-9 col-sm-8 col-6">
                <Link to="/productDetail3">
                  <h4>Motorola Moto E40 4G</h4>
                </Link>
                <p>
                  Pantalla ultra ancha Max Vision HD+ y sistema de cuatro
                  cámaras con 48 MP.
                </p>
                <h5 className="fw-bold">US$133.99</h5>
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
