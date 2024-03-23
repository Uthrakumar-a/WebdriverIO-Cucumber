pipeline {
    agent any
    
    toools:{
        'node: version'
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
