import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "../components/navigation";
import HomePage from "../pages/Homepage";
import ProductPage from "../pages/ProductPage";
import ProductDetalle from "../components/productDetalle";
import CarritoPage from "../pages/CarritoPage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="productDetail/:id" element={<ProductDetalle />} />
          <Route path="carrito" element={<CarritoPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
export default AppRouter;
