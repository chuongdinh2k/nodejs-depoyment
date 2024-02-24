#!/bin/bash

# Redirect all outputs to the start.log file
exec >> /home/ubuntu/backend/nodejs-depoyment/start.log 2>&1

echo 'Running application_start.sh'

# Change to the project directory
PROJECT_DIR="/home/ubuntu/backend/nodejs-depoyment"
cd "$PROJECT_DIR" || { echo "Unable to change to directory $PROJECT_DIR"; exit 1; }

# Specify the full path to the pm2 executable
PM2_PATH=$(which pm2)

# Use pm2 to start your application
$PM2_PATH start dist/src/app.js -f

echo 'Application start completed'
