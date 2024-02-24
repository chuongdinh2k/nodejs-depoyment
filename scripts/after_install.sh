#!/bin/bash

# Specify the full path to the node binary
NODE_PATH=$(which node)

# Specify the full path to the npm binary
NPM_PATH=$(which npm)

# Specify the full path to the deploy.log file
DEPLOY_LOG_PATH="/home/ubuntu/backend/nodejs-deployment/deploy.log"

# Create the deploy.log file if it doesn't exist
touch "$DEPLOY_LOG_PATH"

# Redirect all outputs to the deploy.log file
exec >> "$DEPLOY_LOG_PATH" 2>&1

echo 'run after_install.sh'

# Specify the full path to the project directory
PROJECT_DIR="/home/ubuntu/backend/nodejs-deployment"

echo "cd $PROJECT_DIR"
cd "$PROJECT_DIR" || exit 1

echo "Installing dependencies using npm"
"$NPM_PATH" install

# Additional commands if needed
# ...

# Restart your Node.js application or perform other necessary tasks
# ...

echo "Deployment completed successfully"
