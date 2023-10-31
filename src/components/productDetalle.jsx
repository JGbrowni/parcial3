import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetalle = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const updateImageUrls = (data, baseUrl) => {
    return data.map((product) => ({
      ...product,
      image: `${baseUrl}${product.image}`,
      image2: `${baseUrl}${product.image2}`,
    }));
  };

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();

        const updatedData = updateImageUrls(jsonData, baseUrl);

        const selectedProduct = updatedData.find((item) => item.id === id);

        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          console.error("Product not found");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div className="d-flex flex-row my-5 py-4">
        <div className="container">
          <Link to={"/products"} className="btn btn-dark btn-lg btn-rounded">
            <i className="fa-solid fa-left-long mr-4"></i> Productos
          </Link>
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
                      src={product.image}
                      className="d-block w-100"
                      alt="Imagen 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={product.image2}
                      className="d-block w-100"
                      alt="Imagen 2"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-5 col-sm-4 col-12 mt-[5rem]">
              <h3 className="text-[24px] text-black font-bold mb-4">
                {product.product}
              </h3>

              <h3 className="text-[20px] mb-2">
                <span className="font-bold">Precio:</span> $284.31
              </h3>

              <p className="text-[20px] mb-2">
                <span className="fw-bold">Almacenamiento:</span>
                {product.storage}
              </p>

              <p className="text-[20px] mb-2">
                <span className="fw-bold">SIM: </span>
                {product.sim}
              </p>
              <p className="text-[20px] mb-2">
                <span className="fw-bold">Pantalla: </span>
                {product.display}
              </p>

              <p className="text-[20px] mb-2">
                <span className="fw-bold">Sistema operativo: </span>
                {product.operating_system}
              </p>

              <h3 className="fw-bold text-[24px] mb-2">Sobre este artículo</h3>

              <p className="text-[15px] mb-2">
                <span className="fw-bold">Privacidad y seguridad:</span>{" "}
                {product.privacy_and_security}
              </p>

              <p className="text-[15px] mb-2">
                <span className="fw-bold">Diseño moderno</span>:{" "}
                {product.design}
              </p>

              <p className="text-[15px] mb-4">
                <span className="fw-bold">Bateria:</span> {product.battery}
              </p>

              <p className="text-[16px] mb-2">
                <span className="fw-bold">Nota:</span>{" "}
                {product.compatibility_note}
              </p>

              <div className="boton mt-4">
                <button
                  type="Submit"
                  className="btn btn-dark btn-lg btn-rounded btn-add-cart text-gray-700"
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
