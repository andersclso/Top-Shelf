FROM node:8
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 3006
CMD ["npm","start"]
