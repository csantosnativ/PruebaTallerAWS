#!/bin/sh 
cd /home/ec2-user/pruebaAWS/
lsof -ti:3000 | xargs --no-run-if-empty kill -9