import express from "express";
import { addUser } from "../controllers/usersController.js";

const router = express.Router();

router.post("/addUser", addUser);

export default router;
