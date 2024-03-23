pipeline {
    agent any
        
    stages {
        stage('npm Install') {
            steps {
                bat 'node -v'
                bat 'npm install'
            }
        }
        
        stage('Run Script') {
            steps {
                bat 'npm run your-script-name' // Replace 'your-script-name' with the actual name of your npm script
            }
        }
    }
}
