import  express from "express";
import { createUser ,login } from "../../controllers/auth-controller.js";
import { createQuestion, deleteQuestion, updateQuestion } from "../../controllers/question-controller.js";

import { authenticate,checkRole } from "../../middlewares/authenticate.js";
const router=express.Router();


//Auth Routers
router.post('/signup',createUser)
router.post('/login', login);


//Question Routers
router.post('/questions', createQuestion);
router.delete('/questions', deleteQuestion);
router.put('/questions', updateQuestion);


// Admin Protected Route
router.get(
    "/admin-protectd",
    authenticate,
    checkRole(["admin"]),
    async (req, res) => {
      return res.json("Hello Admin");
    }
  );
  
export default router;