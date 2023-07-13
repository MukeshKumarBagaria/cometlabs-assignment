import express from "express";
import { createUser, login } from "../../controllers/auth-controller.js";
import { createQuestion, deleteQuestion, updateQuestion } from "../../controllers/question-controller.js";
import { createTestcase, deleteTestcase, updateTestcase } from "../../controllers/testcase-controller.js";

import { authenticate, checkRole } from "../../middlewares/authenticate.js";
const router = express.Router();


//Auth Routers
router.post('/signup', createUser)
router.post('/login', login);


//Question Routers(ADMIN PROTECTED)
router.post('/questions',authenticate,checkRole(["admin"]), createQuestion);
router.delete('/questions',authenticate,checkRole(["admin"]), deleteQuestion);
router.put('/questions', authenticate,checkRole(["admin"]),updateQuestion);


//TestCase Routers(ADMIN PROTECTED)
router.post('/testcases',authenticate,checkRole(["admin"]), createTestcase);
router.delete('/testcases/',authenticate,checkRole(["admin"]), deleteTestcase);
router.put('/testcases/',authenticate,checkRole(["admin"]), updateTestcase);



export default router;