import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CarritoPage = () => {
  const storedCart = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(storedCart);
  const ivaRate = 0.13;

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const iva = subtotal * ivaRate;
  const total = subtotal + iva;

  const removeProduct = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setCart(updatedCart);

    toast.success("Producto eliminado del carrito.", {
      position: "top-right",
    });
  };

  return (
    <>
      <span className="text-[25px] d-flex justify-content-center p-4">Tus compras:</span>
      <div className="carritofondo p-5">
        <div className="container">
          <div className="container-cart-products">
            <div className="row-product">
              {cart.map((item, index) => (
                <div key={index} className="cart-product">
                  <div className="info-cart-product">
                    <span className="cantidadImp">{item.quantity}</span>
                    <p className="productoImp">{item.product}</p>
                    <span className="precioImp">$ {item.price}</span>
                  </div>
                  <img
                    src={item.image}
                    alt={item.productName}
                    className="w-[200px] h-[200px]"
                  />
                  <button
                    className="text-red-500"
                    onClick={() => removeProduct(index)}
                  >
                    <i className="fa-solid fa-trash mr-3"></i> Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-total mt-1">
              <h3>Subtotal:</h3>
              <span className="totalImp text-[20px]">$ {subtotal}</span>
              <h3>IVA ({(ivaRate * 100).toFixed(0)}%):</h3>
              <span className="totalImp text-[20px]">$ {iva}</span>
              <h3>Total:</h3>
              <span className="totalImp text-[20px]">$ {total}</span>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default CarritoPage;
