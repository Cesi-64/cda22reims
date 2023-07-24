FROM node:18-alpine

ADD . /app
WORKDIR /app

RUN npm i

EXPOSE 9000
CMD npm start