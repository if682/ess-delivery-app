import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/Home'
import AdmRegister from '../pages/AdmRegister'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path='/register-adm' element={<AdmRegister/>}/>
      </Routes>
    </BrowserRouter>
  )
}