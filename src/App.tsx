import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import LoginPage from './modules/login/LoginPage'
import HomePage from './modules/home/HomePage'
import PublicRoute from './components/PublicRoute'
import PrivateRoute from './components/PrivateRoute'
import DatatablePage from './modules/ejemplos/DatatablePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />}></Route>
        </Route>

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="/datatables" element={<DatatablePage />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
