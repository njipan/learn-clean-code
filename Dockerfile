FROM node:9.3.0-alpine

WORKDIR /APP

COPY package.json /APP

RUN npm install

COPY . /APP

CMD node index.js
