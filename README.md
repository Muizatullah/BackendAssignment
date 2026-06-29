### Class-Work On Introduction to Backend

# Question 1 : Explain the difference between HTTP and HTTPS in simple term

# ANS

:HTTP(HyperText Transfer protocol):HTTP is the protocol used to transfer information between your web browser and a website.
-Not secure
-Data is sent in plain text
-Suitable for non-sensitive websites

:HTTPS(HyperText Transfer protocol secure):HTTPS is the secure version of HTTP.
-secure
-Data is encrypted
-uitable for websites handling sensitive information

# Question 2 : Generate a JSON object representing a student enrolled at marusoft Technologies

# ANS

{
"studentId": 2023,
"firstName": "Bakri",
"lastName": "Muizat",
"gender": "Female",
"email": "bakri.muizat@example.com",
"phone": "+2349131767490",
"course": "Full Stack Web Development",
"department": "Software Development",
"enrollmentDate": "2026-04-28",
"duration": "6 Months",
"modeOfStudy": "Physical",
"status": "Active",
"institution": {
"name": "Marusoft Technologies",
"location": "Lagos, Nigeria"
},
"skills": [
"HTML",
"CSS",
"JavaScript",
"React",
"Git",
"GitHub"
]
}

# Queation 3: List five real world API we use Everyday

## ANswer

-YouTube Data Api
-Google MAP Api
-Twitter Api
-whatsapp Business Api
-Spotify Api

# Question 4: compare restApi and GraphQL

# Answer : RESTAPI

-Fixed endpoint
-Multiple request
-Easier
-Vey popular
-Get extra data

# :GraphQL

-Flexible query
-single request
-More complex
-Growing
-No extra data

# Question 5 : Explain the request- response circle using a banking application as an example

# Answer:

# step 1: User Action (by opening banking app and checking account balance)

# step 2: Client send request

# step 3: Server process

# step 4: Server send respone

# step 5: Client display results

### Assignment

## Question One : Explain Backend Development in your own words

# Answer

- Backend development is the part of software development that runs on the server. It handles business logic, databases, authentication, file storage, payments, emails, and communication between the frontend and the database.

## Question Two : Draw a Client–Server architecture diagram.

# Answer

- User

↓

Browser

↓

DNS

↓

Internet

↓

Web Server

↓

Backend

↓

Database

↓

Backend

↓

Browser

↓

User

## Question Three : Compare HTTP and HTTPS.

# Answer

- :HTTP(HyperText Transfer protocol):HTTP is the protocol used to transfer information between your web browser and a website.
  -Not secure
  -Data is sent in plain text
  -Suitable for non-sensitive websites

:HTTPS(HyperText Transfer protocol secure):HTTPS is the secure version of HTTP.
-secure
-Data is encrypted
-uitable for websites handling sensitive information

## Quetion Four : Explain the Request–Response cycle using a real-world example (e.g., online shopping or ATM transaction).

# Answer:

- User

↓

insert card

↓

enter pin

↓

Withdraw 2,000

↓

Server

↓

verifies pin

↓

check account balance

↓

Deduct the 2,000 in database

↓

process the transaction

↓

Dispense cash and print receipt

## Question Five : Crete three valid JSON objects representing

- A student
- A course
- A product

{
"studentName": "Muizat",
"gender": "Female",
"email": "bakri.muizat@example.com",
"phone": "+2349131767490",
"department": "computer sciencet",
}

{
    "course": "Full-Stack web developement",
    "title" : "Introduction to Backend",
    "Units" : 6,
    "Instructor": "Alimi Kehinde",

}
{
    "ProductId": "190U38",
    "name": "brikenstock sandal",
    "size": 40,
    "price": 25k,

}
## Question Six : List five HTTP methods and describe when each should be used.

# Answer
-GET :  retrieve data
-POST: create data
-PUT: Edit data
-PATCH : change data
-DELETE: delete data

## Question Seven : Research one public API (e.g., weather, movies, or books) and explain what it does.

## Question Eight :Compare REST APIs and GraphQL, listing at least three advantages and three disadvantages of each
# Answer  REST API
-Advantage: simple
: for documentation
excellent cacheing

-Disadvantages : over fetching
:very complex
-chnages may require endpoints

#       GraphQl
Advantage: single endpoint 
: precise data fetching
: built-in documentation

-Disadvantage : complex cacheing
: higer derver side complexity
steeper learning curve