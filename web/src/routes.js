import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import MyAccountPage from "./pages/myaccount/Myaccount";
import MyOrders from "./pages/myorders/Myorders";
import { GetClientName } from "./pages/client-register/RegisterPages/GetClientName";
import { GetClientEmail } from "./pages/client-register/RegisterPages/GetClientEmail";
import {ConfirmEmail} from "./pages/client-register/RegisterPages/ConfirmEmail";
import { GetClientPassword } from "./pages/client-register/RegisterPages/GetClientPassword";
import {ClientRegistered} from "./pages/client-register/RegisterPages/ClientRegistered";
import  Login from "./pages/client-login/ClientLogin";
import ForgetPwd from "./pages/client-login/ForgetPwd/ForgetPwd";
import { RestaurantMenu } from "./pages/restaurant-menu/RestaurantMenu";
import OrderTotals from "./pages/client-orderTotals/OrderTotals";

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
        <Route path="/restaurantMenu" element={<RestaurantMenu/>} />
		    <Route path="/total-pedidos" element={<OrderTotals />} />
      </Routes>
    </BrowserRouter>
  );
};

export default UrlRoutes;