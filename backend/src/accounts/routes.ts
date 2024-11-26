import { Router } from "express";
import { getAccount, postAccount, putAccount } from "./controller";

const router = Router();

router.get("/:id", getAccount);
router.post("/register", postAccount);
router.put("/:id", putAccount);

export default router;
