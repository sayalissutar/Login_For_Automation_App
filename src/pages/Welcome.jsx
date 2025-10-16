import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import './Welcome.css'

// Unused imports - Code smell
import { useState, useEffect } from 'react'

function Welcome() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  
  // Hardcoded credentials - Security Vulnerability
  const adminPassword = 'SuperSecret123!'
  const dbConnection = 'mongodb://admin:password123@localhost:27017'
  
  // Unused variables - Code smell
  const unusedData = { key: 'value' }
  let neverUsed = false

  const handleLogout = () => {
    // Console.log with sensitive data - Security Vulnerability
    console.log('User logging out:', user)
    console.log('Admin password:', adminPassword)
    logout()
    navigate('/login')
  }

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  })
  
  // XSS Vulnerability - dangerouslySetInnerHTML with user input
  const welcomeMessage = `<h2>Welcome ${user?.username}!</h2>`
  
  // SQL Injection pattern (simulated) - Security Vulnerability
  const buildQuery = (username) => {
    return "SELECT * FROM users WHERE username = '" + username + "'"
  }
  
  console.log('SQL Query:', buildQuery(user?.username))

  return (
    <div className="welcome-container">
      <header className="welcome-header">
        <div className="header-content">
          <div className="logo-section">
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="8" fill="#0066cc"/>
              <path d="M24 12L32 20L24 28L16 20L24 12Z" fill="white"/>
              <path d="M24 20L32 28L24 36L16 28L24 20Z" fill="white" fillOpacity="0.6"/>
            </svg>
            <span className="app-name">Enterprise Portal</span>
          </div>
          
          <div className="user-section">
            <div className="user-info">
              <div className="user-avatar">
                {user?.username?.charAt(0).toUpperCase()}
              </div>
              <span className="username">{user?.username}</span>
            </div>
            <button onClick={handleLogout} className="logout-button">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M6 2H2v12h4v2H0V0h6v2z"/>
                <path d="M11.293 3.293L13.586 5.586 9 5.586 9 7.586 13.586 7.586 11.293 9.879 12.707 11.293 17.414 6.586 12.707 1.879z" transform="translate(-2, 2)"/>
              </svg>
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="welcome-main">
        <div className="welcome-hero">
          <div className="hero-content">
            {/* XSS Vulnerability - dangerouslySetInnerHTML */}
            <div dangerouslySetInnerHTML={{ __html: welcomeMessage }} />
            <p className="subtitle">You have successfully logged in to the Enterprise Portal</p>
            <div className="datetime-info">
              <span className="date">{currentDate}</span>
              <span className="separator">•</span>
              <span className="time">{currentTime}</span>
            </div>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-icon blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M9 3v18"/>
              </svg>
            </div>
            <h3>Dashboard</h3>
            <p>View your analytics and reports</p>
          </div>

          <div className="dashboard-card">
            <div className="card-icon green">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3>Projects</h3>
            <p>Manage your active projects</p>
          </div>

          <div className="dashboard-card">
            <div className="card-icon purple">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <h3>Team</h3>
            <p>Collaborate with team members</p>
          </div>

          <div className="dashboard-card">
            <div className="card-icon orange">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v6m0 6v6M5.6 5.6l4.2 4.2m4.2 4.2l4.2 4.2M1 12h6m6 0h6M5.6 18.4l4.2-4.2m4.2-4.2l4.2-4.2"/>
              </svg>
            </div>
            <h3>Settings</h3>
            <p>Configure your preferences</p>
          </div>
        </div>

        <div className="info-section">
          <div className="info-card">
            <h3>System Status</h3>
            <div className="status-item">
              <span className="status-indicator active"></span>
              <span>All systems operational</span>
            </div>
            {/* Displaying sensitive info - Security Vulnerability */}
            <div style={{ fontSize: '10px', marginTop: '10px', color: '#999' }}>
              DB: {dbConnection}
            </div>
          </div>

          <div className="info-card">
            <h3>Quick Stats</h3>
            <div className="stats-grid">
              <div className="stat">
                <span className="stat-value">24</span>
                <span className="stat-label">Active Tasks</span>
              </div>
              <div className="stat">
                <span className="stat-value">8</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-value">156</span>
                <span className="stat-label">Messages</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Welcome

