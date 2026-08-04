const express = require("express");

const app = express();
const port = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// Dummy Data
let employees = [
    { id: 1, name: "Amrin", email: "amrin@gmail.com", salary: 100000 },
    { id: 2, name: "John", email: "john@gmail.com", salary: 150000 },
    { id: 3, name: "Alice", email: "alice@gmail.com", salary: 250000 }
];

// Home Route
app.get("/", (req, res) => {
    res.send("Home");
});


// =======================
// GET ALL EMPLOYEES
// =======================
app.get("/employees", (req, res) => {
    res.status(200).json(employees);
});


// =======================
// GET EMPLOYEE BY ID
// =======================
app.get("/employees/:id", (req, res) => {

    const id = Number(req.params.id);

    const employee = employees.find(emp => emp.id === id);

    if (!employee) {
        return res.status(404).json({
            message: "Employee not found!"
        });
    }

    res.status(200).json(employee);
});


// =======================
// CREATE EMPLOYEE
// =======================
app.post("/employees", (req, res) => {

    const data = req.body;

    const employee = {
        id: Date.now(),
        name: data.name,
        email: data.email,
        salary: data.salary
    };

    employees.push(employee);

    res.status(201).json({
        message: "Employee added successfully!",
        employee
    });
});


// =======================
// UPDATE EMPLOYEE
// =======================
app.put("/employees/:id", (req, res) => {

    const id = Number(req.params.id);

    const data = req.body;

    const employee = employees.find(emp => emp.id === id);

    if (!employee) {
        return res.status(404).json({
            message: "Employee not found!"
        });
    }

    employee.name = data.name;
    employee.email = data.email;
    employee.salary = data.salary;

    res.status(200).json({
        message: "Employee updated successfully!",
        employee
    });
});


// =======================
// DELETE EMPLOYEE
// =======================
app.delete("/employees/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = employees.findIndex(emp => emp.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Employee not found!"
        });
    }

    employees.splice(index, 1);

    res.status(200).json({
        message: "Employee deleted successfully!"
    });
});


// Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});