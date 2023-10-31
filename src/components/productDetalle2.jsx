import React from "react";
import Celular1 from "../assets/img/celularventa2.png";
import Celular2 from "../assets/img/celularventa2_2.png";

const ProductDetalle2 = () => {
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
              <h2>Samsung Galaxy A14 4G LTE</h2>
              <h3 className="fw-bold">US$132.31</h3>
              <p>
                <span className="fw-bold">Almacenamiento:</span>
                132 GB
              </p>
              <p>
                <span className="fw-bold">SIM: </span>
                doble SIM
              </p>
              <p>
                <span className="fw-bold">Tamaño de pantalla: </span>
                6.6 pulgadas
              </p>
              <p>
                <span className="fw-bold">Sistema operativo: </span>
                Android 12, un núcleo de interfaz de usuario 4.1
              </p>
              <ul>
                <span className="fw-bold">Sobre este artículo:</span>
                <li>
                  <p>
                    ROM de 128 GB, 4 GB de RAM, MicroSD expandible, Mediatek
                    MT6769 Helio G80 (12 nm), Octa-core, Mali-G52 MC2, huella
                    digital (montada lateralmente)
                  </p>
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

export default ProductDetalle2;
