FROM node:18-alpine 

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /react-app

# Installing dependencies
COPY ./package.json /react-app
COPY public/ public/
COPY src/ src/
RUN npm ci
RUN npm run build

# Copying all the files in our project
COPY . .

#ngnix build
FROM nginx:1.23.2-alpine as builder
COPY frontend.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
RUN touch /var/run/nginx.pid
RUN chown -R nginx:nginx /var/run/nginx.pid /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d
USER nginx
# Starting our application
#CMD npm start
EXPOSE 3000 
CMD ["nginx", "-g", "daemon off;"]




















