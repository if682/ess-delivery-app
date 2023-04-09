import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/Home'
import AdmRegister from '../pages/AdmRegister'
import ReservationPage from '../pages/PublicarReserva'
import Reservas from '../pages/MinhasReservas'
import ReservasAdmin from '../pages/ReservasAdmin'


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path='/register-adm' element={<AdmRegister/>}/>
        <Route path = '/reservation' element={<ReservationPage/>}/>
        <Route path = '/my-reservation' element={<Reservas/>}/>
        <Route path = '/reservation-admin' element={<ReservasAdmin/>}/>
      </Routes>
    </BrowserRouter>
  )
}