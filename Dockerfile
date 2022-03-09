FROM node:14.17-alpine as build
RUN npm install -g npm

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm ci --silent
COPY . ./
RUN npm run build

FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
# Basic Auth
# COPY .htpasswd /etc/nginx/.htpasswd
COPY --from=build /app/build .

EXPOSE 80

ENTRYPOINT nginx -g 'daemon off;'
