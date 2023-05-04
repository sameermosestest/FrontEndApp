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
FROM nginx:1.23.2-alpine
COPY frontend.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
RUN touch /var/run/nginx.pid
RUN chown -R nginx:nginx /var/run/nginx.pid /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d
USER nginx
# Starting our application
#CMD npm start
EXPOSE 3000 
CMD ["nginx", "-g", "daemon off;"]




















apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: {{ .Values.global.ingress.virtualServiceName }}
  namespace: {{ .Release.Namespace }}
spec:
  hosts: {{- toYaml .Values.app.ingress.host | nindent 6 }}
  gateways:
  - {{ .Values.global.ingress.gatewayName }}
  http:
  - match:
    - uri:
        prefix: /azureAdRedirect
    route:
    - destination:
        port:
         number: 81
        host: is01-isc-app-svc
  - match:
    - uri:
        prefix: /authenticate
    route:
    - destination:
        port:
         number: 81
        host: is01-isc-app-svc
  - match:
    - uri:
        prefix: /loginError
    route:
    - destination:
        port:
         number: 81
        host: is01-isc-app-svc
  - match:
    - uri:
        prefix: /azurelogout
    route:
    - destination:
        port:
         number: 81
        host: is01-isc-app-svc
  - match:
    - uri:
        prefix: /inStoreClosureProcess
    route:
    - destination:
        port:
          number: 80
        host: is01-storeclosureprocess-svc
  - match:
    - uri:
        prefix: /user-service
    route:
    - destination:
        port:
          number: 80
        host: is01-isc-service-svc
  - match:
    - uri:
        prefix: /product-service
    route:
    - destination:
        port:
          number: 80
        host: is01-psc-service-svc