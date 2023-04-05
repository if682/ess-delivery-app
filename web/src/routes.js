import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import MyAccountPage from "./pages/myaccount/Myaccount";
import MyOrders from "./pages/myorders/Myorders";
import OrderTotals from "./pages/client-orderTotals/OrderTotals";

const UrlRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minha-conta" element={<MyAccountPage />} />
        <Route path="/meus-pedidos" element={<MyOrders />} />
		    <Route path="/total-pedidos" element={<OrderTotals />} />
      </Routes>
    </BrowserRouter>
  );
};

export default UrlRoutes;