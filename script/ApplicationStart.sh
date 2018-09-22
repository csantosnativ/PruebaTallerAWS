#!/bin/sh
source /home/ec2-user/.bashrc
cd /home/ec2-user/pruebaAWS/
nvm use 8.12.0
node server.js > /dev/null 2> /dev/null < /dev/null &