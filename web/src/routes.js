import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import MyAccountPage from "./pages/myaccount/Myaccount";
import MyOrders from "./pages/myorders/Myorders";
import  Login from "./pages/client-login/ClientLogin";

const UrlRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minha-conta" element={<MyAccountPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/meus-pedidos" element={<MyOrders />} />
      </Routes>
    </BrowserRouter>
  );
};

export default UrlRoutes;