# 📘 Student Management REST API

## 🚀 Project Overview

Student Management REST API is a simple backend application built using **Express.js** that manages student data stored in a static in-memory array.

This project demonstrates core backend concepts such as:
- REST API design
- Route parameters
- Status codes
- Filtering & aggregation
- Basic server setup

---

## 🎯 Objective

The objective of this project is to:

- Build a RESTful API using Node.js and Express
- Perform filtering and aggregation on static data
- Handle dynamic routes and parameters
- Return proper HTTP status codes
- Structure a backend project correctly

---

## 🛠 Tech Stack

- Node.js
- Express.js
- CORS
- JavaScript (ES6)

---

## 📂 Implemented Routes

### 1️⃣ Health Check
| Method | Route | Description |
|--------|--------|------------|
| GET | `/` | Checks if server is running |

---

### 2️⃣ Get All Students
| Method | Route |
|--------|--------|
| GET | `/students` |

Returns all student records.

---

### 3️⃣ Get Topper(s)
| Method | Route |
|--------|--------|
| GET | `/students/topper` |

Returns student(s) with the highest CGPA.  
Returns `404` if no students exist.

---

### 4️⃣ Get Average CGPA
| Method | Route |
|--------|--------|
| GET | `/students/average` |

Returns average CGPA of all students.

---

### 5️⃣ Get Total Students Count
| Method | Route |
|--------|--------|
| GET | `/students/count` |

Returns total number of students.

---

### 6️⃣ Get Student By ID
| Method | Route |
|--------|--------|
| GET | `/students/:id` |

Returns a student matching the given ID.  
Returns `404` if student not found.

---

### 7️⃣ Get Students By Branch
| Method | Route |
|--------|--------|
| GET | `/students/branch/:branchName` |

Returns student(s) belonging to the specified branch.  
Returns `404` if no students found.

---

## 🌐 Sample API URLs (Local Testing)

```bash
http://localhost:3000/
http://localhost:3000/students
http://localhost:3000/students/topper
http://localhost:3000/students/average
http://localhost:3000/students/count
http://localhost:3000/students/1
http://localhost:3000/students/branch/CSE
```

---

## ▶️ Steps to Run Locally

### 1️⃣ Clone the repository

```bash
git clone <your-repository-link>
```

### 2️⃣ Navigate into project folder

```bash
cd student-api
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Install required packages (if not installed)

```bash
npm install express cors
```

### 5️⃣ Start the server

```bash
node index.js
```

Server will run at:

```
http://localhost:3000
```

---

## 🌍 Deployment

You can deploy this API using:

- Render
- Railway
- Vercel
- Cyclic

### 🔗 Deployed Link

```
https://your-deployed-link.com
```

(Add your actual deployed link here)

---



## 👨‍💻 Author

**Amrit Raj**

---

---
