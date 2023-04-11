import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import MyAccountPage from "./pages/myaccount/Myaccount";
import MyOrders from "./pages/myorders/Myorders";
import { GetClientName } from "./pages/client-register/RegisterPages/GetClientName/GetClientName";
import { GetClientEmail } from "./pages/client-register/RegisterPages/GetClientEmail/GetClientEmail";
import { ConfirmEmail } from "./pages/client-register/RegisterPages/ConfirmEmail/ConfirmEmail";
import { GetClientPassword } from "./pages/client-register/RegisterPages/GetClientPassword/GetClientPassword";
import { ClientRegistered } from "./pages/client-register/RegisterPages/ClientRegistered/ClientRegistered";
import  Login from "./pages/client-login/ClientLogin";
import ForgetPwd from "./pages/client-login/ForgetPwd/ForgetPwd";
import { RestaurantMenu } from "./pages/restaurant-menu/RestaurantMenu";
import OrderTotals from "./pages/client-orderTotals/OrderTotals";
import MyData from "./pages/mydata/Mydata";
import RestaurantTotal from "./pages/client-restaurantTotal/RestaurantTotal";

const UrlRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minha-conta" element={<MyAccountPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetPwd" element={<ForgetPwd />} />
        <Route path="/meus-pedidos" element={<MyOrders />} />
        <Route path="/cadastro-nome" element={<GetClientName/>}/>
        <Route path="/cadastro-senha" element={<GetClientPassword/>}/>
        <Route path="/cadastro-email" element={<GetClientEmail/>}/>
        <Route path="/cadastro-finalizado" element={<ClientRegistered/>}/>
        <Route path="/validacao-email" element={<ConfirmEmail/>}/>
        <Route path="/cardapio" element={<RestaurantMenu/>} />
		    <Route path="/total-pedidos" element={<OrderTotals />} />
        <Route path="/meus-dados" element={<MyData />} />
        <Route path="/total-pedidos/restaurante/:restaurantId" element={<RestaurantTotal />} />
        <Route path="*" element={<h1>404 - Página não Encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default UrlRoutes;