// This file contains intentional security vulnerabilities for testing

// Hardcoded secrets - Security Vulnerability
const AWS_ACCESS_KEY = 'AKIAIOSFODNN7EXAMPLE'
const AWS_SECRET_KEY = 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'
const PRIVATE_KEY = '-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEA...'
const JWT_SECRET = 'my-super-secret-jwt-key-123456'

// Weak cryptography - Security Vulnerability
export function weakHash(password) {
  let hash = 0
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }
  return hash.toString()
}

// Insecure random - Security Vulnerability
export function generateToken() {
  return Math.random().toString(36).substring(2)
}

// SQL Injection vulnerability - Security Vulnerability
export function unsafeQuery(userInput) {
  return `SELECT * FROM users WHERE id = ${userInput}`
}

// Command Injection vulnerability - Security Vulnerability
export function executeCommand(userCmd) {
  // This would be dangerous in Node.js
  const command = 'ls -la ' + userCmd
  return command
}

// Eval usage - Critical Security Vulnerability
export function dynamicCode(code) {
  return eval(code)
}

// XSS vulnerability - Security Vulnerability
export function unsafeHTML(userInput) {
  return `<div>${userInput}</div>`
}

// Unused function - Dead code
function unusedFunction() {
  console.log('This is never called')
  const secret = 'another-hardcoded-secret'
  return secret
}

// Complex function - Code smell (high cyclomatic complexity)
export function complexFunction(a, b, c, d, e) {
  if (a > 0) {
    if (b > 0) {
      if (c > 0) {
        if (d > 0) {
          if (e > 0) {
            return a + b + c + d + e
          } else {
            return a + b + c + d
          }
        } else {
          return a + b + c
        }
      } else {
        return a + b
      }
    } else {
      return a
    }
  } else {
    return 0
  }
}

// Password in plain text - Security Vulnerability
export const defaultCredentials = {
  username: 'admin',
  password: 'admin123',
  email: 'admin@example.com',
  apiKey: 'sk-proj-1234567890',
  privateToken: 'ghp_abcdefghijklmnopqrstuvwxyz123456'
}

// Insecure deserialization - Security Vulnerability
export function deserializeUser(userString) {
  return JSON.parse(userString) // No validation
}

// Path traversal vulnerability - Security Vulnerability
export function readFile(filename) {
  return `./uploads/${filename}` // No sanitization
}

// Regular expression DoS - Security Vulnerability
export function validateEmail(email) {
  const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  return regex.test(email)
}

// Debug code left in production - Security Vulnerability
if (true) {
  console.log('AWS_ACCESS_KEY:', AWS_ACCESS_KEY)
  console.log('AWS_SECRET_KEY:', AWS_SECRET_KEY)
  console.log('JWT_SECRET:', JWT_SECRET)
}

// Duplicated code - Code smell
export function duplicateFunction1(x) {
  const result = x * 2 + 10
  console.log('Processing:', result)
  return result
}

export function duplicateFunction2(x) {
  const result = x * 2 + 10
  console.log('Processing:', result)
  return result
}

// Magic numbers - Code smell
export function calculatePrice(quantity) {
  return quantity * 19.99 + 5.99 - 2.50
}

export default {
  weakHash,
  generateToken,
  unsafeQuery,
  executeCommand,
  dynamicCode,
  unsafeHTML,
  complexFunction,
  defaultCredentials,
  deserializeUser,
  readFile,
  validateEmail,
  duplicateFunction1,
  duplicateFunction2,
  calculatePrice
}

