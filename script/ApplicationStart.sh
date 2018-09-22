#!/bin/sh
source /home/ec2-user/.bash_profile
source /home/ec2-user/.bashrc
cd /home/ec2-user/pruebaAWS/
echo $NVM_DIR
node server.js > /dev/null 2> /dev/null < /dev/null &