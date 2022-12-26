FROM node:18

ENV NODE_ENV=production

WORKDIR /app

COPY frontend/package.json ./
COPY frontend/public/* /app/public/

RUN npm install serve

EXPOSE 3000
CMD ["npx", "serve", "/app/public", "-l", "tcp://0.0.0.0:3000"]

