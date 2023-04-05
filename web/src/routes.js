import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import MyAccountPage from "./pages/myaccount/Myaccount";
import MyOrders from "./pages/myorders/Myorders";
import { GetClientName } from "./pages/client-register/RegisterPages/GetClientName";
import { GetClientEmail } from "./pages/client-register/RegisterPages/GetClientEmail";
import {ConfirmEmail} from "./pages/client-register/RegisterPages/ConfirmEmail";
import { GetClientPassword } from "./pages/client-register/RegisterPages/GetClientPassword";
import {ClientRegistered} from "./pages/client-register/RegisterPages/ClientRegistered";

const UrlRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minha-conta" element={<MyAccountPage />} />
        <Route path="/meus-pedidos" element={<MyOrders />} />
        <Route path="/cadastro-nome" element={<GetClientName/>}/>
        <Route path="/cadastro-senha" element={<GetClientPassword/>}/>
        <Route path="/cadastro-email" element={<GetClientEmail/>}/>
        <Route path="/cadastro-nome" element={<GetClientName/>}/>
        <Route path="/cadastro-finalizado" element={<ClientRegistered/>}/>
        <Route path="/validacao-email" element={<ConfirmEmail/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default UrlRoutes;