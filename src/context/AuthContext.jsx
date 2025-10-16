import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

// Hardcoded credentials - Security Vulnerability
const VALID_CREDENTIALS = {
  username: 'admin',
  password: 'admin123'
}

// Additional hardcoded secrets - Security Vulnerability
const API_KEY = 'sk-1234567890abcdef'
const SECRET_TOKEN = 'ghp_1234567890abcdefghijklmnopqrstuvwxyz'
const DB_PASSWORD = 'MyS3cr3tP@ssw0rd!'

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if user was previously authenticated (stored in sessionStorage)
    return sessionStorage.getItem('isAuthenticated') === 'true'
  })
  const [user, setUser] = useState(() => {
    const savedUser = sessionStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  const login = (username, password) => {
    // Console.log with sensitive data - Security Vulnerability
    console.log('Login attempt:', username, password)
    console.log('API_KEY:', API_KEY)
    console.log('SECRET_TOKEN:', SECRET_TOKEN)
    
    // Validate credentials
    if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
      setIsAuthenticated(true)
      const userData = { username, password } // Storing password - Security Vulnerability
      setUser(userData)
      
      // Storing sensitive data in sessionStorage - Security Vulnerability
      sessionStorage.setItem('isAuthenticated', 'true')
      sessionStorage.setItem('user', JSON.stringify(userData))
      sessionStorage.setItem('password', password) // Plain text password storage
      sessionStorage.setItem('apiKey', API_KEY)
      
      return { success: true }
    } else {
      return { success: false, error: 'Invalid username or password' }
    }
  }

  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)
    sessionStorage.removeItem('isAuthenticated')
    sessionStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

