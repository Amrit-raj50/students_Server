const express = require("express");
const app = express();

const cors = require("cors");
const students = [
    {
        id: 1,
        name: "Aarav Sharma",
        branch: "CSE",
        semester: 8,
        cgpa: 9.3
    },
    {
        id: 2,
        name: "Ishita Verma",
        branch: "IT",
        semester: 7,
        cgpa: 8.9
    },
    {
        id: 3,
        name: "Rohan Kulkarni",
        branch: "ECE",
        semester: 6,
        cgpa: 8.4
    },
    {
        id: 4,
        name: "Meera Iyer",
        branch: "CSE",
        semester: 8,
        cgpa: 9.1
    },
    {
        id: 5,
        name: "Kunal Deshmukh",
        branch: "IT",
        semester: 5,
        cgpa: 7.8
    },
    {
        id: 6,
        name: "Ananya Reddy",
        branch: "CSE",
        semester: 6,
        cgpa: 8.7
    },
    {
        id: 7,
        name: "Vikram Patil",
        branch: "ECE",
        semester: 7,
        cgpa: 8.2
    },
    {
        id: 8,
        name: "Priyanka Nair",
        branch: "AI",
        semester: 4,
        cgpa: 8.8
    },
    {
        id: 9,
        name: "Harsh Mehta",
        branch: "Data Science",
        semester: 5,
        cgpa: 8.0
    },
    {
        id: 10,
        name: "Neha Gupta",
        branch: "CSE",
        semester: 6,
        cgpa: 7.9
    }
];

app.get("/", (req, res) => {
    res.send("Express server is running");
});

app.get("/students", (req, res) => {
    res.status(200).json(students);
});

// app.get("/users/:id", (req, res) => {
//   const userId = Number(req.params.id);
//   const user = users.find(u => u.id === userId);

//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   res.status(200).json(user);
// });

app.get("/students/topper", (req, res) => {
    if (students.length === 0) {
        return res.status(404).json({ message: "No students found" });
    }

    let max = students[0].cgpa;
    for (let i = 1; i < students.length; i++) {
        max = max > students[i].cgpa ? max : students[i].cgpa;
    }

    const toppers = students.filter(s => s.cgpa === max);

    res.status(200).json(toppers);
})

app.get("/students/average", (req, res) => {
    if (students.length === 0) {
        return res.status(404).json({ message: "No students found" });
    }

    let sum = 0;
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].cgpa;
    }

    let avg = sum / students.length;
    res.status(200).json({ averageCGPA: avg });
})

app.get("/students/count", (req, res) => {
    if (students.length === 0) {
        return res.status(404).json({ message: "No students found" });
    }
    //    let avg = sum / students.length;
    res.status(200).json({ totalStudents: students.length });
})

app.get("/students/:id", (req, res) => {
    const userId = Number(req.params.id);
    const user = students.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
});

app.get("/students/branch/:branchName", (req, res) => {
    const branch = req.params.branchName;
    const user = students.find(u => u.branch === branch);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
});
app.use(cors());
app.listen(3000, () => {
    console.log("Server started on port 3000");
});