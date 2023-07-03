# Stage 1:
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2:
FROM nginx:alpine
COPY --from=build /app/dist/book-store-fe /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4200

CMD ["nginx", "-g", "daemon off"]

# docker build -t book-store-fe .
# docker run -d -name book-store-fe-container -p 4200:4200 book-store-fe
