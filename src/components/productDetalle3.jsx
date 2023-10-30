import React from "react";
import Celular1 from "../assets/img/celularventa3_1.png";
import Celular2 from "../assets/img/celularventa3_2.png";

const ProductDetalle3 = () => {
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
                      src={Celular1}
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
              <h2>Motorola Moto e40 4G/LTE</h2>
              <h3 className="fw-bold">US$133.99</h3>
              <p>
                <span className="fw-bold">Almacenamiento: </span>
                68 GB
              </p>
              <p>
                <span className="fw-bold">SIM: </span>
                doble SIM
              </p>
              <p>
                <span className="fw-bold">Tamaño de pantalla: </span>
                6.5 pulgadas
              </p>
              <p>
                <span className="fw-bold">Sistema operativo: </span>
                Android
              </p>
              <ul>
                <span className="fw-bold">Sobre este artículo:</span>
                <li>
                  <p>Android 11, Unisoc T700, Octa-core 1.8 GHz</p>
                </li>
                <li>
                  <p>
                    Cámara trasera: 50MP, f/1.8, (ancha) + 5MP, f/2.2,
                    (ultrawide) + 2MP, f/2.4, (macro), cámara frontal: 13MP,
                    f/2.0, batería de 5000 mAh
                  </p>
                </li>
                <li>
                  <p>
                    Modelo internacional - Sin garantía en los Estados Unidos.
                    Compatible con la mayoría de los operadores GSM como
                    T-Mobile, MetroPCS, etc. No funcionará con operadores CDMA
                    como Verizon, Sprint, Boost
                  </p>
                </li>
              </ul>
              <p>
                <span className="fw-bold">Nota: </span>
                Para los compradores de EE. UU.: Este teléfono inteligente no es
                compatible/no funcionará con ninguna red CDMA, incluyendo:
                VERIZON, SPRINT, US CELLULAR. Consulta con tu proveedor de red
                para verificar la compatibilidad de 3G o 4G/LTE antes de
                comprar.
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

export default ProductDetalle3;
