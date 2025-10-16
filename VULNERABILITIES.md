# Intentional Vulnerabilities for Testing

This document lists all intentional security vulnerabilities and code smells added to the application for SonarQube and security testing purposes.

## 🔴 Critical Security Vulnerabilities

### 1. **Hardcoded Credentials & Secrets**
- **Location**: `src/context/AuthContext.jsx`, `src/App.jsx`, `src/pages/Login.jsx`, `src/pages/Welcome.jsx`, `src/utils/insecure.js`
- **Description**: Multiple hardcoded passwords, API keys, tokens, and database credentials
- **Examples**:
  - API keys (AWS, Google, GitHub tokens)
  - Database passwords
  - JWT secrets
  - Admin passwords

### 2. **Use of eval()**
- **Location**: `src/pages/Login.jsx`, `src/utils/insecure.js`
- **Description**: Direct use of `eval()` with user input - allows arbitrary code execution
- **Risk**: Remote Code Execution (RCE)

### 3. **Console.log with Sensitive Data**
- **Location**: All component files
- **Description**: Logging passwords, API keys, user credentials to console
- **Risk**: Information disclosure

### 4. **Insecure Storage**
- **Location**: `src/context/AuthContext.jsx`, `src/pages/Login.jsx`
- **Description**: 
  - Storing passwords in plain text in sessionStorage and localStorage
  - Storing API keys in browser storage
- **Risk**: Credential theft

### 5. **XSS Vulnerability (Cross-Site Scripting)**
- **Location**: `src/pages/Welcome.jsx`, `src/utils/insecure.js`
- **Description**: Using `dangerouslySetInnerHTML` with unsanitized user input
- **Risk**: XSS attacks

### 6. **SQL Injection Pattern**
- **Location**: `src/pages/Welcome.jsx`, `src/utils/insecure.js`
- **Description**: String concatenation for SQL queries without parameterization
- **Risk**: SQL Injection

### 7. **Weak Cryptography**
- **Location**: `src/pages/Login.jsx`, `src/utils/insecure.js`
- **Description**:
  - Using `Math.random()` for security-sensitive operations
  - Weak custom hash function
- **Risk**: Predictable tokens, weak session IDs

### 8. **Command Injection Pattern**
- **Location**: `src/utils/insecure.js`
- **Description**: String concatenation for system commands
- **Risk**: Command injection

### 9. **Path Traversal**
- **Location**: `src/utils/insecure.js`
- **Description**: No sanitization of file paths
- **Risk**: Unauthorized file access

### 10. **Insecure Deserialization**
- **Location**: `src/utils/insecure.js`
- **Description**: JSON.parse without validation
- **Risk**: Code execution, data tampering

## 🟡 Code Smells & Maintainability Issues

### 1. **Unused Variables**
- **Location**: All component files
- **Description**: Multiple declared but unused variables

### 2. **Unused Imports**
- **Location**: `src/App.jsx`, `src/pages/Login.jsx`, `src/pages/Welcome.jsx`
- **Description**: Imported modules that are never used

### 3. **Dead Code**
- **Location**: `src/pages/Login.jsx`, `src/utils/insecure.js`
- **Description**: Functions that are never called

### 4. **High Cyclomatic Complexity**
- **Location**: `src/utils/insecure.js` (`complexFunction`)
- **Description**: Deeply nested if statements

### 5. **Code Duplication**
- **Location**: `src/utils/insecure.js`
- **Description**: Duplicate function implementations

### 6. **Magic Numbers**
- **Location**: `src/utils/insecure.js`
- **Description**: Hardcoded numbers without explanation

### 7. **Commented Out Code**
- **Location**: `src/App.jsx`
- **Description**: Old code left in comments

### 8. **TODO Comments**
- **Location**: `src/App.jsx`
- **Description**: Unresolved TODO items

## 📊 Expected SonarQube Findings

SonarQube should detect:
- **Security Hotspots**: 15+
- **Code Smells**: 20+
- **Bugs**: 5+
- **Vulnerabilities**: 10+

## 🎯 Testing Instructions

### For SonarQube:
```bash
# Install SonarScanner
npm install -g sonarqube-scanner

# Run SonarQube analysis
sonar-scanner
```

### For Jenkins:
1. Add SonarQube plugin to Jenkins
2. Configure SonarQube server in Jenkins
3. Add SonarQube analysis step in Jenkinsfile
4. Run the pipeline

## ⚠️ IMPORTANT

**DO NOT use this code in production!** All vulnerabilities are intentional for testing security scanning tools.

