To run the Node.js application, you can Dockerize it and execute the following steps:

Steps to Dockerize and Run the Application

1. Navigate to the Project Directory:
Go to the `fetch-assignment/src` directory where the Dockerfile is located.

2. Build the Docker Image:
Build the Docker image by executing the following command:

   docker build -t my-app .

3. Run the Docker Container:
Run the Docker container using the built image with the following command:

   docker run -p 3000:3000 my-app

4. Access the Running Application:
Once the container is up and running, you can check the application using tools like curl or    Postman at:

   http://localhost:3000/receipts

These steps will allow you to set up and run the application within a Docker container efficiently.


