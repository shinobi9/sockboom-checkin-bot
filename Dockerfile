FROM node:12-alpine

WORKDIR /app

COPY . .

RUN npm i --production

CMD node index.js