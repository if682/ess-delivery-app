FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080
EXPOSE 5555

CMD npx prisma studio & npm run start:dev