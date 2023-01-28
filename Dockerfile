FROM node:16-alpine

RUN mkdir -p /usr/app/
WORKDIR /usr/app

COPY ./ ./

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]