FROM node:12-alpine

WORKDIR /app

COPY . .

RUN npm i --production
# keep time log correct
CMD env TZ='Asia/Shanghai' node index.js