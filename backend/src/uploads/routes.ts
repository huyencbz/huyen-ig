import { Router } from "express";
import { uploadSingleFile } from "./controller";
import { authenticateToken } from "../authMiddleware";

const router = Router();

// Protected routes (require authentication)
router.post("/single", authenticateToken, uploadSingleFile);

export default router;
