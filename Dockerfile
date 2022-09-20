FROM node:14.19.2

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY server.js .

CMD ["npm", "start"]
