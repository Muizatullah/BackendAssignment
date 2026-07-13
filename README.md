# Assignment

## Theory

1. What is Express.js, and why is it preferred over Node's built-in `http` module?
2. Explain the purpose of routes in an Express application.
3. What is middleware? Give three practical examples.
4. Explain the difference between the Request (`req`) and Response (`res`) objects.
5. List five common HTTP status codes and explain when each should be used.
6. Explain why JSON is the preferred format for REST APIs.



### Answer
1. Express.js is a minimal, unappointed web famework for Node.js that wrap the built-in http module
Why preferred over raw http : 
-Routing: Express provides clean routes definitions
-Middleware
-Request handling
-convenience methods


2. Routes in Express map incoming Http requests to specific handler functions based on the requests method and URL path
Purpose:
.Organization
.Request mathing
.Parameter Extraction
.Middleware chaining
 

 3. Middleware is a function that exectes between the request and response in Express it receive req, res and next.Examples are:
 . Logger middlewar
 . Authentication check
 . Error handler

 4. req carries data from the clients to your server.
 res carries data from your server back to the clients

 5. 200 = request succeeded 
 201 = created
 400 = Bad Request
 401 = unauthorized
 500 =Internal server Error

 6. JSON is preferred for REST APIs because:
 . Lightweight
 .Native javascript supports
 . Human-readable
 .Data Structure mapping
 



 
## Practical

### Project 1: Student API

Create an Express application with the following endpoints:

* `GET /students` – Retrieve all students.
* `GET /students/:id` – Retrieve a single student.
* `POST /students` – Add a new student.
* `PUT /students/:id` – Update an existing student.
* `DELETE /students/:id` – Remove a student.

Requirements:

* Use an in-memory array as the data source.
* Return appropriate HTTP status codes.
* Return all responses as JSON.
* Test all endpoints using Postman or Thunder Client.