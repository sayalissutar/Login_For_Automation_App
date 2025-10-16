# Enterprise Login Application

A **100% static frontend-only** login application with predefined credentials. No backend, no server, no database - everything runs in the browser!

## Features

- 🔐 Simple login with predefined credentials (client-side only)
- 🎨 Clean, minimalistic enterprise UI
- 📱 Responsive design
- ⚡ Fast and lightweight (React + Vite)
- 🛡️ Protected routes (client-side routing)
- 💾 Session persistence (browser storage only)
- 🌐 **100% Static** - No backend required!

## Predefined Credentials

```
Username: admin
Password: admin123
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── context/
│   └── AuthContext.jsx      # Authentication context and logic
├── pages/
│   ├── Login.jsx            # Login page component
│   ├── Login.css            # Login page styles
│   ├── Welcome.jsx          # Welcome/Dashboard page
│   └── Welcome.css          # Welcome page styles
├── App.jsx                  # Main app with routing
├── main.jsx                 # Application entry point
└── index.css                # Global styles
```

## Architecture

**This is a 100% STATIC application:**
- ✅ Pure frontend React application
- ✅ No backend server required
- ✅ No database connections
- ✅ No API calls
- ✅ All authentication logic runs in the browser
- ✅ Can be deployed to any static hosting (GitHub Pages, Netlify, Vercel, S3, etc.)

## How It Works

1. User enters credentials on the login page
2. Credentials are validated **client-side** against predefined values (admin/admin123)
3. On successful login, user is redirected to the welcome page
4. Session is stored in browser's sessionStorage for persistence
5. Protected routes ensure only authenticated users can access the welcome page (client-side routing)
6. Logout clears the browser storage and redirects to login
7. **Everything happens in the browser - no server communication!**

## Technologies Used

- **React** - UI library
- **React Router** - Routing
- **Vite** - Build tool
- **CSS** - Styling

## Security Note

⚠️ **WARNING**: This application contains **INTENTIONAL SECURITY VULNERABILITIES** for testing SonarQube and Jenkins security scanning tools.

**DO NOT use this code in production!**

### Intentional Vulnerabilities Included:
- ❌ Hardcoded credentials and API keys
- ❌ Console.log with sensitive data
- ❌ eval() usage
- ❌ XSS vulnerabilities (dangerouslySetInnerHTML)
- ❌ SQL injection patterns
- ❌ Weak cryptography (Math.random())
- ❌ Insecure storage (localStorage/sessionStorage)
- ❌ Command injection patterns
- ❌ Path traversal vulnerabilities
- ❌ Code smells (unused variables, dead code, etc.)

### For Testing with SonarQube

1. **Install SonarQube** (if not already installed):
   ```bash
   # Download and run SonarQube server
   # Default: http://localhost:9000
   ```

2. **Install SonarScanner**:
   ```bash
   npm install -g sonarqube-scanner
   ```

3. **Run Analysis**:
   ```bash
   npm run sonar
   # or
   sonar-scanner
   ```

4. **View Results**:
   - Open http://localhost:9000
   - Check the project dashboard for vulnerabilities

### For Testing with Jenkins

1. **Setup Jenkins with SonarQube plugin**
2. **Configure SonarQube server in Jenkins**
3. **Create a new Pipeline job**
4. **Use the provided `Jenkinsfile`**
5. **Run the pipeline**

### Expected SonarQube Findings

- **Security Hotspots**: 15+
- **Code Smells**: 20+
- **Bugs**: 5+
- **Vulnerabilities**: 10+

See `VULNERABILITIES.md` for a complete list of intentional issues.

