import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import MyAccountPage from "./pages/myaccount/Myaccount";
import MyOrders from "./pages/myorders/Myorders";
import  Login from "./pages/client-login/ClientLogin";
import ForgetPwd from "./pages/client-login/ForgetPwd/ForgetPwd";
import { RestaurantMenu } from "./pages/restaurant-menu/RestaurantMenu";

const UrlRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minha-conta" element={<MyAccountPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetPwd" element={<ForgetPwd />} />
        <Route path="/meus-pedidos" element={<MyOrders />} />
        <Route path="/restaurantMenu" element={<RestaurantMenu/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default UrlRoutes;