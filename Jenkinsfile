pipeline{
            agent any
            stages{
                    stage ("deploy") {
                       
                        steps{
                            sh """
                            ssh -i "/home/jenkins/.ssh/Final-Project.pem" ubuntu@10.0.1.50 -oStrictHostKeyChecking=no << EOF
                            echo -e "Host github.com\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
                            fuser -k 3000/tcp
                            rm -rf ~/frontend/
                            git clone https://github.com/the-winning-team-for-this-project/frontend.git
                            cd ./frontend
                            git checkout \${GIT_BRANCH#*/}
                            npm install 
                            npm start
                            """
                        }
                    }
                    
    }
}