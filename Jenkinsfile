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
                    sh 'npm run _publish'
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
