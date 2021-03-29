pipeline {
    agent any
    options {
        disableConcurrentBuilds()
        buildDiscarder(logRotator(numToKeepStr: '3'))
    }
    stages {
        stage ('Build') {
            steps {
                sh 'sudo /opt/bin/npmdeploygit autoclick'
            }
        }
    }
    post {
        always {
            deleteDir()
        }
    }
}
