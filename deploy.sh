#!/bin/bash

REPOSITORY=/home/ubuntu/deploy

cd $REPOSITORY

# NPM 설치
sudo npm install

# PM2 재시작
sudo pm2 reload all
