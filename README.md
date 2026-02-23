📘 Student Management API
🚀 Project Title

Student Management REST API

🎯 Objective

This project is a simple REST API built using Express.js that manages student data stored in a static in-memory array.

The API provides endpoints to:

Retrieve all students

Find topper(s)

Calculate average CGPA

Count total students

Fetch student by ID

Fetch students by branch

This project demonstrates understanding of:

REST API structure

Route parameters

Status codes

Array operations (filter, find, loops)

Basic backend logic

📌 List of Implemented Routes
Method	Route	Description
GET	/	Check if server is running
GET	/students	Get all students
GET	/students/topper	Get student(s) with highest CGPA
GET	/students/average	Get average CGPA
GET	/students/count	Get total number of students
GET	/students/:id	Get student by ID
GET	/students/branch/:branchName	Get students by branch
🌐 Sample API URLs

If running locally:

http://localhost:3000/
http://localhost:3000/students
http://localhost:3000/students/topper
http://localhost:3000/students/average
http://localhost:3000/students/count
http://localhost:3000/students/1
http://localhost:3000/students/branch/CSE

🛠 Steps to Run Locally

1️⃣ Clone the repository

git clone <your-repo-link>


2️⃣ Navigate into project folder

cd student-api


3️⃣ Install dependencies

npm install express cors


4️⃣ Run the server

node index.js


5️⃣ Open browser or Postman

http://localhost:3000

🌍 Deployed Link

Add your deployed backend URL here:

https://your-deployed-link.com


(You can deploy using Render, Railway, or Vercel)

📚 Tech Stack

Node.js

Express.js

CORS

JavaScript (ES6)

👨‍💻 Author

Amrit Raj
