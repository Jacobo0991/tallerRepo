const express = require("express");
const router = express.Router();

const {
    findAllStudents,
    createStudent,
  } = require("../controllers/students.controller");

  router.post("/", createStudent);
  router.get("/", findAllStudents);

  module.exports = router;