# docker build -t react-starter .
# docker run -d -p 80:80 --name react-container react-starter

FROM node:alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build:prod

FROM nginx:stable-alpine
COPY --from=build /app/bundle /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]