import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyAccountPage from "./pages/myaccount/myaccount";

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