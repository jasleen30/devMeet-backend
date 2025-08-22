import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import { AuthProvider } from './context/AuthContext'
import type { FC } from 'react'
import Dashboard from './pages/Dashboard'
import { ProtectedRoute } from './components/layouts/ProtectedRoute'


const AppRoute:FC = () => {
  const isAuthenticated = false;
  
  return (
   <Routes>
        <Route path="/register" element={isAuthenticated? <Navigate to='/'/>:<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<ProtectedRoute><Outlet/></ProtectedRoute>}>
          <Route index element={<Dashboard/>}/>
          <Route index element={<Dashboard/>}/>
        </Route>
      </Routes>
  )
}

function App() {

  return (
    <AuthProvider>
     <Router>
     <AppRoute/>
    </Router>
    </AuthProvider>
  )
}

export default App
