import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { PublicRoute } from '../context/ProtectedRoutes'
// Login register forgot password reset password
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import ForgotPassword from '../pages/auth/components/ForgotPassword'


const Auth = () => {
  return (
    <>
    <Routes>
    <Route element={<PublicRoute restricted={true} />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>
<Route
                path="/forgot-password/:resetToken"
                element={<ForgotPassword />}
              /></Routes>
              </>
  )
}

export default Auth