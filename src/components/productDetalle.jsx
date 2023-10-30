import React from "react";
import Celular from "../assets/img/celularventa1.png";
import Celular2 from "../assets/img/celularventa1_2.png";

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
                      src={Celular2}
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
                <span className="fw-bold">Sistema operativo: </span>
                Android
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
                <li>
                  <p>
                    Batería de larga duración: Tu ajetreada vida merece una
                    batería construida para ocupada; ya sea que estés haciendo
                    una videollamada en tu viaje, poniéndote al día con tu
                    programa favorito o con amigos y familiares.
                  </p>
                </li>
              </ul>
              <p>
                <span className="fw-bold">Nota: </span>Para los compradores de
                EE. UU.: Este teléfono inteligente no es compatible/no
                funcionará con ninguna red CDMA, incluyendo: VERIZON, SPRINT, US
                CELLULAR. Consulta con tu proveedor de red para verificar la
                compatibilidad de 3G o 4G/LTE antes de comprar.
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
                  Agregar a carrito
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
