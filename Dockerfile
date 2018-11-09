# stage 1: build the app
FROM node:10.13.0 as react-build
RUN mkdir /app
WORKDIR /app
COPY . ./
RUN npm install
RUN npm test
RUN npm run build

# stage 2: deploy the app
FROM nginx:alpine
COPY --from=react-build /app/build /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]