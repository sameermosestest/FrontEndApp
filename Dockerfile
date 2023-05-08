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

RUN npm config set proxy http://20.22.123.156:8082

# Starting our application
CMD npm start