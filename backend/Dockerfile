FROM node:18-slim

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 8080
EXPOSE 5555

RUN npx prisma generate

CMD npx prisma studio & npm run start:dev