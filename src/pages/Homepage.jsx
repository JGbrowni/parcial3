import React from "react";
import { Link } from "react-router-dom";
import videoFile from "../assets/img/MovingGradientBackground.mp4";
import Celular from "../assets/img/celularventa1.png";
import Celular1 from "../assets/img/celularventa2.png";
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
          <h1>Siente el poder de la segunda generacion en tus manos</h1>
          <p>Ya disponible nuevo Galaxy A53</p>
        </div>
      </div>
      <section className="mostrarpfondo">
        <div className="mostrarproductos">
          <div className="celuproductos">
            <img src={Celular} alt="" />
            <p>Samnsung Galaxy A53</p>
            <Link to="/productDetail">
              <button
                type="Submit"
                className="btn btn-dark btn-lg btn-rounded btn-add-cart"
                id="Comprar"
                value="Comprar"
              >
                Mas informacion
              </button>
            </Link>
          </div>
          <div className="celuproductos">
            <img src={Celular1} alt="" />
            <p>Samsung Galaxy A14</p>
            <Link to="/productDetail2">
              <button
                type="Submit"
                className="btn btn-dark btn-lg btn-rounded btn-add-cart"
                id="Comprar"
                value="Comprar"
              >
                Mas informacion
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
