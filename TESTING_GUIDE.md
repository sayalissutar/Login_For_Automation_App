# Security Testing Guide

This guide will help you test the application with SonarQube and Jenkins to detect the intentional vulnerabilities.

## 📋 Quick Summary

The application now contains **30+ intentional security issues** including:

### 🔴 Critical Vulnerabilities (10+)
1. Hardcoded credentials in multiple files
2. API keys and secrets in source code
3. eval() usage with user input
4. XSS via dangerouslySetInnerHTML
5. SQL injection patterns
6. Command injection patterns
7. Insecure password storage
8. Console.log with sensitive data
9. Weak cryptography (Math.random())
10. Path traversal vulnerabilities

### 🟡 Code Smells (20+)
1. Unused variables
2. Unused imports
3. Dead code
4. High cyclomatic complexity
5. Code duplication
6. Magic numbers
7. Commented code
8. TODO comments

## 🔧 Setup Instructions

### Option 1: SonarQube (Recommended)

#### Step 1: Start SonarQube Server
```bash
# Download SonarQube Community Edition
# https://www.sonarqube.org/downloads/

# Start the server
cd sonarqube-x.x.x/bin/[your-os]
./sonar.sh start

# Access at http://localhost:9000
# Default credentials: admin/admin
```

#### Step 2: Install SonarScanner
```bash
npm install -g sonarqube-scanner
```

#### Step 3: Run Analysis
```bash
# In your project directory
npm run sonar
# OR
sonar-scanner
```

#### Step 4: View Results
1. Open http://localhost:9000
2. Login with admin/admin
3. Find your project "login-automation-app"
4. Review the issues dashboard

### Option 2: Jenkins Pipeline

#### Step 1: Install Jenkins
```bash
# Download Jenkins from https://www.jenkins.io/download/
# Install and start Jenkins
```

#### Step 2: Install Required Plugins
1. Open Jenkins (http://localhost:8080)
2. Go to Manage Jenkins → Manage Plugins
3. Install:
   - SonarQube Scanner
   - Pipeline
   - NodeJS

#### Step 3: Configure SonarQube
1. Manage Jenkins → Configure System
2. Add SonarQube Server:
   - Name: SonarQube
   - Server URL: http://localhost:9000
   - Server authentication token (generate in SonarQube)

#### Step 4: Create Pipeline Job
1. New Item → Pipeline
2. Name: "Login-App-Security-Scan"
3. Pipeline section:
   - Definition: Pipeline script from SCM
   - Or paste the Jenkinsfile content

#### Step 5: Run Pipeline
1. Click "Build Now"
2. View console output
3. Check SonarQube results

## 📊 Expected Results

### SonarQube Dashboard Should Show:

**Bugs**: 5-10
- Unused variables
- Potential null pointer issues
- Logic errors

**Vulnerabilities**: 10-15
- Hardcoded credentials
- eval() usage
- Insecure storage
- XSS risks
- SQL injection patterns

**Security Hotspots**: 15-20
- Sensitive data exposure
- Weak cryptography
- Command injection
- Path traversal

**Code Smells**: 20-30
- Dead code
- Code duplication
- Unused imports
- High complexity
- Magic numbers

**Debt Ratio**: 15-25%
**Coverage**: 0% (no tests)

## 🔍 Where to Find Vulnerabilities

### Critical Files with Issues:

1. **src/context/AuthContext.jsx**
   - Hardcoded credentials
   - Console.log with passwords
   - Insecure storage

2. **src/pages/Login.jsx**
   - eval() usage
   - Weak random generation
   - localStorage with passwords

3. **src/pages/Welcome.jsx**
   - dangerouslySetInnerHTML (XSS)
   - SQL injection pattern
   - Sensitive data display

4. **src/utils/insecure.js**
   - Multiple hardcoded secrets
   - All vulnerability types
   - Weak cryptography

5. **src/App.jsx**
   - Hardcoded API keys
   - Unused imports
   - Dead code

6. **Jenkinsfile**
   - Hardcoded tokens
   - Sensitive logging

## 🎯 Testing Checklist

- [ ] SonarQube detects hardcoded credentials
- [ ] eval() usage flagged as critical
- [ ] XSS vulnerability identified
- [ ] SQL injection pattern detected
- [ ] Weak cryptography warnings
- [ ] Unused variable warnings
- [ ] Dead code identified
- [ ] Code duplication reported
- [ ] High complexity warnings
- [ ] Console.log warnings
- [ ] Insecure storage issues
- [ ] Magic numbers detected

## 📝 Notes

- The application will still run normally despite vulnerabilities
- All issues are intentional for testing purposes
- SonarQube may take 1-2 minutes to analyze
- Jenkins pipeline includes intentional failures for testing

## 🔗 Resources

- SonarQube Docs: https://docs.sonarqube.org/
- Jenkins Docs: https://www.jenkins.io/doc/
- OWASP Top 10: https://owasp.org/www-project-top-ten/

## ⚠️ IMPORTANT

**This code is for TESTING ONLY. Never deploy to production!**

