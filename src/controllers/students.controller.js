const httpError = require("http-errors");

const Student = require("../models/students.model");

const findAllStudents = async (req, res, next) => {
    try {
        const student = await Student.find();
        if (!student) throw httpError(404, "Students not found");
        res.status(200).json({ data: student });
    } catch (error) {
        next(error)
    }
}

const createStudent = async (req, res, next) => {
    try {
        const { body } = req;
        const newStudent = new Student(body);
        const savedStudent = await newStudent.save();
        if (!savedStudent) throw httpError(500, "Student not created");
        res.status(201).json({ message: "Movie created", data: savedStudent });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    findAllStudents,
    createStudent,
}