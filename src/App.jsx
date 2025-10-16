import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import Login from './pages/Login'
import Welcome from './pages/Welcome'

// Unused imports - Code smell
import { useState, useEffect } from 'react'

// Hardcoded API key - Security Vulnerability
const GOOGLE_API_KEY = 'AIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGewQe'

// Protected Route component
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? children : <Navigate to="/login" replace />
}

// Public Route component (redirect to welcome if already logged in)
function PublicRoute({ children }) {
  const { isAuthenticated } = useAuth()
  return !isAuthenticated ? children : <Navigate to="/welcome" replace />
}

function AppRoutes() {
  return (
    <Routes>
      <Route 
        path="/login" 
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } 
      />
      <Route 
        path="/welcome" 
        element={
          <ProtectedRoute>
            <Welcome />
          </ProtectedRoute>
        } 
      />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

function App() {
  // Console.log with API key - Security Vulnerability
  console.log('Initializing app with API key:', GOOGLE_API_KEY)
  
  // Unused variable - Code smell
  const unusedConfig = { apiKey: GOOGLE_API_KEY, debug: true }
  
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  )
}

// Commented out code - Code smell
// function oldAppVersion() {
//   return <div>Old App</div>
// }

// TODO: Remove this before production
const DEBUG_MODE = true
const ADMIN_PASSWORD = 'P@ssw0rd123'

export default App

