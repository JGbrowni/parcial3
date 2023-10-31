import React from "react";
import { Link } from "react-router-dom";

const CardProductHome = (product) => {
  const idProduct = product.id;

  return (
    <>
      <div className="celuproductos">
        <img src={product.imgProduct} alt="" />
        <p>{product.nameProduct}</p>
        <Link to={`/productDetail/${idProduct}`} >
          <button
            type="Submit"
            className="btn btn-dark btn-lg btn-rounded btn-add-cart text-gray-600"
            id="Comprar"
            value="Comprar"
          >
            Mas informacion
          </button>
        </Link>
      </div>
    </>
  );
};

export default CardProductHome;
