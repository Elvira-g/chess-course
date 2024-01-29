FROM node:16-alpine

ENV NODE_PATH /usr/local/lib/node_modules

RUN mkdir -p /app
WORKDIR /app


COPY ./package.json ./yarn.lock ./

RUN yarn install

COPY ./node_modules /app/node_modules
COPY ./next.config.js ./next.config.js
COPY ./tsconfig.json ./tsconfig.json


EXPOSE ${PORT}

CMD ["yarn", "dev"]