import { Router } from "express";
import { getAccount, postAccount, putAccount, login } from "./controller";
import { authenticateToken } from "../authMiddleware";

const router = Router();
router.post("/login", login);
router.get("/:id", authenticateToken, getAccount);
router.post("/register", authenticateToken, postAccount);
router.put("/:id", authenticateToken, putAccount);

export default router;
