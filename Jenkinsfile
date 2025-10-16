pipeline {
    agent any
    
    environment {
        SONAR_HOST_URL = 'http://localhost:9000'
        // Intentional hardcoded token - Security Vulnerability for testing
        SONAR_TOKEN = 'squ_1234567890abcdefghijklmnopqrstuvwxyz'
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building application...'
                bat 'npm run build'
            }
        }
        
        stage('SonarQube Analysis') {
            steps {
                script {
                    // Using withSonarQubeEnv for SonarQube analysis
                    withSonarQubeEnv('SonarQube') {
                        bat '''
                            sonar-scanner ^
                            -Dsonar.projectKey=login-automation-app ^
                            -Dsonar.sources=src ^
                            -Dsonar.host.url=%SONAR_HOST_URL% ^
                            -Dsonar.login=%SONAR_TOKEN%
                        '''
                    }
                }
            }
        }
        
        stage('Quality Gate') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: false
                }
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Intentional security issue - using credentials in script
                bat '''
                    echo Deploying with admin password: admin123
                    npm run preview
                '''
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline completed!'
            // Intentional logging of sensitive data
            echo "Build completed with API key: ${env.SONAR_TOKEN}"
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}

