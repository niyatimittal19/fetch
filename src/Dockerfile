 # @file Dockerfile
 #
 # @brief Contains dockerfile variable
 #
 # @ingroup src
 #
 # @author Niyati Mittal
 # Created on : 27 Aug 2024

#  FROM node:14-alpine

#  WORKDIR /usr/bin/local/
 
#  COPY package*.json app.js /usr/bin/local/
 
#  COPY controllers /usr/bin/local/controllers
 
#  COPY services /usr/bin/local/services
 
#  COPY routes /usr/bin/local/routes
 
#  RUN npm install
 
#  RUN npm install express

#  RUN npm install uuid
 
#  EXPOSE 3000
 
#  CMD ["node","app.js"]

# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Copy the rest of the application code to the working directory
COPY app.js ./
COPY controller/ ./controller/
COPY services/ ./services/
COPY routes ./routes/

# Install the dependencies
RUN npm install express uuid

# Expose the port on which the app runs (if applicable)
EXPOSE 3000

# Define the command to run the app
CMD ["node", "app.js"]

 