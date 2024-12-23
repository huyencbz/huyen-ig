import { Router } from "express";
import { getAccount, postAccount, putAccount, login } from "./controller";

const router = Router();

router.get("/:id", getAccount);
router.post("/register", postAccount);
router.put("/:id", putAccount);
router.post("/login", login);

export default router;
