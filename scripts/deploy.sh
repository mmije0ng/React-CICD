#!/bin/bash

# 환경 변수 설정
export NODE_ENV=production

# 애플리케이션 소스 코드가 설치될 디렉토리로 이동
cd /home/ubuntu/app

# NPM 종속성 설치
echo "Installing dependencies..."
npm install

# PM2 프로세스 관리자로 애플리케이션 시작
echo "Starting the application..."
pm2 startOrReload ecosystem.config.js --env production

# PM2 serve로 정적 파일 서빙을 시작
echo "Starting PM2 serve for static files..."
pm2 serve build --port 3000

# 배포 완료 메시지 출력
echo "Deployment completed successfully."