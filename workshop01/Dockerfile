# select the base image
FROM node:latest

LABEL name="northwindapp" maintainer="keinyau@hotmail.com"

# explain mydb later
ENV DB_HOST=mydb DB_PORT=3306
ENV APP_PORT=3000 APP_DIR=/app

WORKDIR ${APP_DIR}

#ADD . .
ADD package.json .
ADD package-lock.json .
ADD main.js .
ADD config config
ADD public public
ADD views views

# INSTALL DEPENEDENCY
RUN npm install
#expose the port 3000
EXPOSE ${APP_PORT}
#start the app
ENTRYPOINT [ "node", "main.js" ]
# CMD [ "node", "main.js" ]