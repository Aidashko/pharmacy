import React from "react";
import { Route, Routes } from "react-router-dom";
import LogIn from "./componets/Auth/LogIn";
import Register from "./componets/Auth/Register";
import ProdList from "./componets/Products/ProdList";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/products" element={<ProdList />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
