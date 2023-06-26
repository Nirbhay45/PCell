// REQUIRING MODULES
const express = require("express");
const router = express.Router();
// REQUIRING STUDENTS CONTROLLER
const studentsController = require("../controllers/students_controller");


// SUB ROUTING AND HANDLING THE REQUEST OVER TO CONTROLLERS
router.post("/update/:id", studentsController.update);
router.get("/add-student", studentsController.addStudent);
router.get("/edit-student/:id", studentsController.editStudent);
router.post("/create", studentsController.create);
router.get("/destroy/:studentId", studentsController.destroy);

module.exports = router;
