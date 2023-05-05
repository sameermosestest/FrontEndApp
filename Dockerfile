FROM node:18-alpine 

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /react-app

# Installing dependencies
COPY ./package.json /react-app

# Copying all the files in our project
COPY . .

RUN npm install
# start thhe application

RUN  npm start



















