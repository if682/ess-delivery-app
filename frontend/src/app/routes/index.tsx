import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/Home'
import AdmRegister from '../pages/AdmRegister'
import ReservationPage from '../pages/PublicarReserva'
import BookingPage from '../pages/BookingPage'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/register-adm' element={<AdmRegister />} />
        <Route path='/reservation' element={<ReservationPage />} />
        <Route path="/booking/:id" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  )
}