pipeline {
    agent any
    
    tools {
        nodejs: 'NodeJS 20.8.1' // Replace 'version' with the Node.js version you want to use
    }
    
    stages {
        stage('npm Install') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Run Script') {
            steps {
                sh 'npm run your-script-name' // Replace 'your-script-name' with the actual name of your npm script
            }
        }
    }
}
