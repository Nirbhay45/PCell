// REQUIRING MODULES
const express = require("express");
const router = express.Router();
// REQUIRING INTERVIEW CONTROLLER
const interviewController = require("../controllers/interviews_controller");

// SUB ROUTING AND HANDLING THE REQUEST OVER TO CONTROLLERS
router.get("/add-interview", interviewController.addInterview);
router.post("/create", interviewController.create);
router.post("/enroll-in-interview/:id", interviewController.enrollInInterview);
router.get("/deallocate/:studentId/:interviewId", interviewController.deallocate);

module.exports = router;
