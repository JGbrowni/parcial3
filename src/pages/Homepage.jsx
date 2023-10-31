import React, { useEffect, useState } from "react";
import videoFile from "../assets/img/MovingGradientBackground.mp4";
import Celular2 from "../assets/img/celular2.png";
import CardProductHome from "../components/cardProductHome";

const Homepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();

        const updatedData = jsonData.map((product) => ({
          ...product,
          image: `${baseUrl}${product.image}`,
          image2: `${baseUrl}${product.image2}`,
        }));

        setData(updatedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="video-container">
        <video
          playsInline={true}
          autoPlay={true}
          muted={true}
          loop={true}
          className="img-fluid"
        >
          <source src={videoFile} type="video/mp4" />
        </video>
        <div className="content">
          <img src={Celular2} alt="" className="celulares" />
          <h1>Siente el poder de la segunda generacion en tus manos</h1>
          <p>Ya disponible nuevo Galaxy A53</p>
        </div>
      </div>
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

export default Homepage;
