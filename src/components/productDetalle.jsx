import React from "react";
import Celular from "../assets/img/celularventa1.png";

const ProductDetalle = () => {
  return (
    <>
      <div className="d-flex flex-row my-5 py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-7 col-12">
              <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={Celular}
                      className="d-block w-100"
                      alt="Imagen 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={Celular}
                      className="d-block w-100"
                      alt="Imagen 2"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-5 col-sm-4 col-12">
              <h2>Samsung Galaxy A53 5G</h2>
              <h3 className="fw-bold">US$284.31</h3>
              <p>
                <span className="fw-bold">Almacenamiento:</span>
                128 GB
              </p>
              <p>
                <span className="fw-bold">SIM: </span>
                doble SIM
              </p>
              <p>
                <span className="fw-bold">Pantalla: </span>
                FHD Super AMOLED de 6.5 pulgadas
              </p>
              <p>
                <span className="fw-bold">Camara inteligente</span>
              </p>
              <ul>
                <span className="fw-bold">Sobre este artículo</span>
                <li>
                  <p>
                    Privacidad y seguridad: Protege tus datos con Knox Security
                    multicapa.
                  </p>
                </li>
                <li>
                  <p>
                    Diseño moderno: La vida sucede, pero el Galaxy A53 5G
                    proporciona un diseño delgado de primera calidad que está
                    diseñado para durar esos momentos impredecibles.
                  </p>
                </li>
              </ul>
              <p>
                <span className="fw-bold">Nota: </span>Los productos con
                enchufes eléctricos están diseñados para usarse en EE. UU. Las
                tomas de corriente y la tensión difieren a nivel internacional.
                Es posible que este producto requiera un adaptador o conversor
                para poder usarse en su destino. Comprueba la compatibilidad
                antes de comprar.
              </p>

              <div className="cantidad mt-4">
                <p className="">Ingresa la cantidad que desea comprar</p>
                <input
                  type="number"
                  className="form-control form-control-lg numberStyle"
                  id="cantidad"
                  name="cantidad"
                />
              </div>

              <div className="boton mt-4">
                <button
                  type="Submit"
                  className="btn btn-dark btn-lg btn-rounded btn-add-cart"
                  id="Comprar"
                  value="Comprar"
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetalle;
