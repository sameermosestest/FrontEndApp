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
RUN npm run build

# nginx state for serving content
FROM nginx:alpine
COPY frontend.conf /etc/nginx/conf.d/default.conf
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]




















