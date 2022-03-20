# build stage
FROM node:lts-alpine as build-stage
# ARG VUE_APP_BACK_URL
# ENV VUE_APP_BACK_URL $VUE_APP_BACK_URL

# ARG VUE_APP_FRONT_URL
# ENV VUE_APP_FRONT_URL $VUE_APP_FRONT_URL

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage

EXPOSE $PORT
RUN mkdir /app
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /app