FROM node:14.4.0

WORKDIR /app/web

COPY package*.json /app/web/

RUN npm install
RUN npm install -g @angular/cli@10.1.1

COPY . /app/web/
EXPOSE 4200
CMD ["npm", "run", "start"]