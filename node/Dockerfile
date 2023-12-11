FROM node:21-alpine3.17

WORKDIR /usr/src/app

COPY index.js .

RUN npm install express && \
    npm install mysql

ENTRYPOINT [ "node", "index.js" ]

EXPOSE 3000