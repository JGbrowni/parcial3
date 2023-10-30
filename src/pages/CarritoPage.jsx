import React from "react";
const CarritoPage = () => {
  return (
    <>
      <div className="carritofondo p-5">
        <div className="container">
          <div className="container-cart-products">
            <div className="row-product">
              <div className="cart-product">
                <div className="info-cart-product">
                  <span className="cantidadImp">1</span>
                  <p className="productoImp">Marca de celular</p>
                  <span className="precioImp">$230</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 384 512"
                  className="icon-close"
                >
                  <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                </svg>
              </div>
            </div>

            <div className="cart-total">
              <h3>Total:</h3>
              <span className="totalImp">$230</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarritoPage;