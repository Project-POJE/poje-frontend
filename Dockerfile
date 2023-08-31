FROM node:16-alpine 

WORKDIR /POJE-APP

COPY package*.json ./

RUN npm cache clean --force && npm cache verify && npm install -g npm@8.5.5 && npm install craco

COPY ./ ./

RUN npm run build

EXPOSE 3000
CMD npm run start