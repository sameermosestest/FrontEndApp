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
FROM nginx:1.23.2-alpine
COPY frontend.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
# Starting our application
#CMD npm start
EXPOSE 3000 
CMD ["nginx", "-g", "daemon off;"]