import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Register } from './pages/register';
import { Login } from './pages/login';
import { UsersList } from './pages/user-list';

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/p/list-users" element={<UsersList />} />
      </Routes>
    </BrowserRouter>
  )
}
