
import express from "express";
import {students} from "./utils/data.js"

const app = express()
app.use(express.json())
const PORT = 2027;

app.get("/students", (req, res) => {
    res.status(200).json({
        message: "students retrieved successfully", students
    });

});
// Get single students
app.get("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = students.find(student => student.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  res.status(200).json(student);
});

// create student



// CREATE STUDENT
app.post("/students", (req, res) => {

  const { name, age, grade } = req.body;

  if (!name || !age || !grade) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  const newStudent = {
    id: students.length + 1,
    name,
    age,
    grade
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent
  });

});

// update student
app.put("/students/:id", (req, res) => {

  const id = Number(req.params.id);

  const student = students.find(student => student.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  student.name = req.body.name || student.name;
  student.age = req.body.age || student.age;
  student.grade = req.body.grade || student.grade;

  res.status(200).json({
    message: "Student updated successfully",
    student
  });

});
// delete student

app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = students.findIndex(student => student.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  students.splice(index, 1);

  res.status(200).json({
    message: "Student deleted successfully",
  });
});










app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    
}) 
