#!/bin/bash

echo 'run application_start.sh: ' >> /home/ubuntu/backend/nodejs-depoyment/deploy.log

echo 'pm2 restart nodejs-express-app' >> /home/ubuntu/backend/nodejs-depoyment/deploy.log
pm2 restart nodejs-express-app >> /home/ubuntu/backend/nodejs-depoyment/deploy.log