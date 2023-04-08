import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import AdmRegisterPage from "../pages/AdmRegister";
import ReservationPage from "../pages/PublicarReserva";
import MyReservationsPage from "../pages/MyReservations";
import ReservationHistoryPage from "../pages/ReservationHistory";
import Favorites from "../pages/Favorites";
import UserData from "../pages/UserData";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/register-adm" element={<AdmRegisterPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/my-reservations" element={<MyReservationsPage />} />
        <Route
          path="/reservation-history"
          element={<ReservationHistoryPage />}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/user-data" element={<UserData />} />
      </Routes>
    </BrowserRouter>
  );
}
