FROM node:latest

RUN npm install -g pnpm

WORKDIR /temp/next

COPY . .

RUN rm -rf node_modules

RUN pnpm install

RUN pnpm run build
 
RUN sleep 10

RUN mkdir -p /var/www/html

RUN mv .next/* /var/www/html

VOLUME /var/www/html

WORKDIR /

RUN rm -rf /temp/next