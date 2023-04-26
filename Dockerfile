FROM node:18-alpine 

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /react-app

# Installing dependencies
COPY ./package.json /react-app
RUN npm install

# Copying all the files in our project
COPY . .

#ngnix build
FROM nginx:stable-alpine
COPY - from=build /app/build /usr/share/nginx/html
COPY - from=build /frontend.conf /etc/nginx/conf.d/default.conf

# Starting our application
CMD npm start