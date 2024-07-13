import express from "express";
import userApi from "../controller/userController.js";

const { registerUser, loginUser } = userApi;
const router = express.Router();

router.post("/", registerUser)
router.post("/login", loginUser)

export default router;
