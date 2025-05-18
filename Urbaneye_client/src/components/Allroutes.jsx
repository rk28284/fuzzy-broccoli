
import { Routes, Route } from 'react-router-dom'

import { Login } from '../pages/Login'
import Register from '../pages/Register'
import { CreateComplaint } from '../pages/CreateComplaint'
import { Dashboard } from '../pages/Dashboard'
export const Allroutes = () => {
  return (
    <div>
      <Routes>
<Route path="/complaint" element={<Dashboard/>} />
<Route path="/create-complaint" element={<CreateComplaint />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}
