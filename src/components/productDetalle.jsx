import React from "react";
import Celular from "../assets/img/celularventa1.jpeg";

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
              <h2>
                Sony ZV-1F Cámara de Vlog para Creadores de Contenido y Vloggers
                Negro
              </h2>
              <h3 className="fw-bold">US$498.00</h3>
              <p>
                <span className="fw-bold">Nombre del modelo: </span>ZV-1F
              </p>
              <p>
                <span className="fw-bold">
                  Resolución del sensor fotográfico:
                </span>
                20,1 MP
              </p>
              <p>
                <span className="fw-bold">Tamaño del sensor de foto: </span>
                1-inch
              </p>
              <p>
                <span className="fw-bold">Estabilización de imagen: </span>
                Digital
              </p>
              <p>
                <span className="fw-bold">Velocidad Mínima de Obturación:</span>
                1/16000 Segundos
              </p>
              <p>
                <span className="fw-bold">Control de exposición: </span>
                Manual
              </p>
              <p>
                <span className="fw-bold">Resolución inmóvil efectiva: </span>
              </p>
              <ul>
                <span className="fw-bold">Sobre este artículo</span>
                <li>
                  <p>
                    La lente ultra ancha de 0.787 in* lo consigue todo en el
                    marco, incluso a la longitud del brazo
                  </p>
                </li>
                <li>
                  <p>
                    Sensor grande de 1" y lente F2, para fondos con poca luz y
                    desenfoque
                  </p>
                </li>
                <li>
                  <p>
                    Pantalla táctil de articulación lateral LCD para fotos
                    selfie fáciles de componer
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
