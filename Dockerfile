FROM node:lts-alpine

WORKDIR /usr/src/api
COPY . .
RUN npm install
