import React, { useEffect, useState } from "react";
import CardProductHome from "../components/cardProductHome";

const ProductPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="mostrarpfondo h-[80vh]">
        <div className="grid grid-cols-4 gap-5 place-content-center w-11/12 mx-auto px-0">
          {data.map((product, index) => (
            <CardProductHome
              id={product.id}
              data={product}
              key={index}
              imgProduct={product.image}
              nameProduct={product.product}
              priceProduct={product.price}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductPage;
