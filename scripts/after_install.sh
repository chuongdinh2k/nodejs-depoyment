#!/bin/bash

# Redirect all outputs to the deploy.log file
exec >> /home/ubuntu/backend/nodejs-deployment/deploy.log 2>&1

echo 'run after_install.sh'

echo 'cd /home/ubuntu/backend/nodejs-deployment'
cd /home/ubuntu/backend/nodejs-deployment

echo 'npm install'
/home/ubuntu/.nvm/versions/node/v20.11.1/bin/npm install
