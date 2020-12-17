pipeline {
    agent any
    options {
        disableConcurrentBuilds()
        buildDiscarder(logRotator(numToKeepStr: '3'))
    }
    stages {
        stage ('Build') {
            steps {
                nodejs('node10') {
                    sh 'npm install'
                    sh 'npm run build'
                    sh 'npm run check:es:build'
                    sh 'npm unpublish @ilb/autoclick@1.0.0'
                    sh 'npm publish'
                    sh 'sudo /opt/bin/npmdeploy10 @ilb/autoclick autoclick latest /home/autoclick'
               }
            }
        }
    }
    post {
        always {
            deleteDir()
        }
    }
}
