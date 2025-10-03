import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import {
  getPublicProfile,
  getPrivateProfile,
  DeleteProfile,
  PatchProfile
} from "../controllers/profile.controller.js";

const router = Router();

router.get("/public", getPublicProfile);

router.get("/private", authMiddleware, getPrivateProfile);

router.delete("/delete", authMiddleware, DeleteProfile);

router.patch("/patch", authMiddleware, PatchProfile);

export default router;
