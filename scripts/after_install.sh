#!/bin/bash
echo 'run after_install.sh: ' >> /home/ubuntu/backend/nodejs-depoyment/deploy.log

echo 'cd /home/ec2-user/nodejs-server-cicd' >> /home/ubuntu/backend/nodejs-depoyment/deploy.log
cd /home/ubuntu/backend/nodejs-depoyment >> /home/ubuntu/backend/nodejs-depoyment/deploy.log

echo 'npm install' >> /home/ubuntu/backend/nodejs-depoyment/deploy.log 
npm install >> /home/ubuntu/backend/nodejs-depoyment/deploy.log