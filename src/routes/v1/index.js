import express from "express";
import { createUser, login } from "../../controllers/auth-controller.js";
import { createQuestion, deleteQuestion, updateQuestion } from "../../controllers/question-controller.js";
import { createTestcase, deleteTestcase, updateTestcase } from "../../controllers/testcase-controller.js";
import { createQuestionSubmission } from '../../controllers/submission-controller.js'
import { authenticate, checkRole } from "../../middlewares/authenticate.js";
const router = express.Router();


//Auth Routes
router.post('/signup', createUser)
router.post('/login', login);


//Question Routes(ADMIN PROTECTED)
router.post('/questions', authenticate, checkRole(["admin"]), createQuestion);
router.delete('/questions', authenticate, checkRole(["admin"]), deleteQuestion);
router.put('/questions', authenticate, checkRole(["admin"]), updateQuestion);


//TestCase Routes(ADMIN PROTECTED)
router.post('/testcases', authenticate, checkRole(["admin"]), createTestcase);
router.delete('/testcases/', authenticate, checkRole(["admin"]), deleteTestcase);
router.put('/testcases/', authenticate, checkRole(["admin"]), updateTestcase);


//Solution Submission Routes
router.post('/submission', createQuestionSubmission)

export default router;