FROM node:12-alpine

WORKDIR /app

COPY . .

RUN npm i --production --registry https://registry.npm.taobao.org

CMD node index.js