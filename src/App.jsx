import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { RegisterUser } from './pages/register';
import { Login } from './pages/login';

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
  