import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Register } from './pages/register';
import { Login } from './pages/login';
import { ListUsers } from './pages/user-list';

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/p/list-users" element={<ListUsers />} />
      </Routes>
    </BrowserRouter>
  )
}
