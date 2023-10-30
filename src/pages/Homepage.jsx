import React from "react";
import videoFile from "../assets/img/MovingGradientBackground.mp4";
import Celular from "../assets/img/celularventa1.png";
import Celular2 from "../assets/img/celular2.png";

const Homepage = () => {
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
          <h1>Mismo modelo, multiples colores para elegir</h1>
          <p>Este es el contenido que aparecerá encima del video.</p>
        </div>
      </div>
      <section className="mostrarpfondo">
        <div className="mostrarproductos">
          <div className="celuproductos">
            <img src={Celular} alt="" />
            <p>Aqui va a ir un texto</p>
          </div>
          <div className="celuproductos">
            <img src={Celular} alt="" />
            <p>Aqui va a ir un texto</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
