#!/bin/bash

REPOSITORY=/home/ubuntu/deploy

cd $REPOSITORY

# NPM 설치
sudo npm install

sudo pm2 reload all