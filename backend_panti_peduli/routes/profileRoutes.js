import express from "express";
import {
  getProfile,
  getProfileById,
  getProfileByUserId,
  addNewProfile,
  updateProfile,
  deleteProfile,
  addCertificate,
  getPorfileByLoc,
} from "../controllers/profileController.js";

const router = express.Router();

router.post("/profiles", addNewProfile);
router.post("/profiles/certificate/:userId", addCertificate);
router.get("/profiles", getProfile);
router.get("/profiles/location", getPorfileByLoc);
router.get("/profiles/:id", getProfileById);
router.get("/profiles/user/:id", getProfileByUserId);
router.delete("/profiles/:id", deleteProfile);
// Choose one, adapt to the needs
// router.put('/profiles/:id', updateProfile);
router.patch("/profiles/:id", updateProfile);

export default router;
