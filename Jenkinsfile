pipeline {
    agent any
    options {
        disableConcurrentBuilds()
        buildDiscarder(logRotator(numToKeepStr: '3'))
    }
    stages {
        stage ('Build') {
            steps {
                #sh 'npm run _publish'
                #sh 'sudo /opt/bin/npmdeploy @ilb/autoclick autoclick latest /home/autoclick'
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
