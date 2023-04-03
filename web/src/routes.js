import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyAccountPage from "./pages/myaccount/Myaccount";

const UrlRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyAccountPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default UrlRoutes;