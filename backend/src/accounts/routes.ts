import { Router } from "express";
import { getAccount } from "./controller";

const router = Router();

router.get("/:id", getAccount);

export default router;
