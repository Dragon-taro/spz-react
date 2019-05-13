# build
FROM node:10.13-alpine AS build-env

COPY . .

RUN npm run build

# production
FROM node:10.13-alpine

# 一個目のコンテナからbuildの成果物を持ってくる
COPY --from=build-env ./server/ ./server/

# いるパッケージだけinstall
RUN npm install express ejs body-parser

WORKDIR /server

CMD ["node", "server.js"]