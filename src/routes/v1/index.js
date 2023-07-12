import  express from "express";
import { createUser ,login } from "../../controllers/auth-controller.js";
import { authenticate,checkRole } from "../../middlewares/authenticate.js";
const router=express.Router();

router.post('/signup',createUser)

router.post('/login', login);



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