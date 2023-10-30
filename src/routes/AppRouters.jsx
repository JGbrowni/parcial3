import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "../components/navigation";
import HomePage from "../pages/Homepage";
import ProductPage from "../pages/ProductPage";
import ProductDetalle from "../components/productDetalle";
import ProductDetalle2 from "../components/productDetalle2";
import ProductDetalle3 from "../components/productDetalle3";
import CarritoPage from "../pages/CarritoPage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="productDetail" element={<ProductDetalle />} />
          <Route path="productDetail2" element={<ProductDetalle2 />} />
          <Route path="productDetail3" element={<ProductDetalle3 />} />
          <Route path="carrito" element={<CarritoPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
export default AppRouter;
