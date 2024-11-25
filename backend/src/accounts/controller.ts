import { Request, Response } from "express";
import { getAccountById } from "./service";

export const getAccount = async (req: Request, res: Response) => {
  try {
    const account = await getAccountById(req.params.id);
    res.json(account);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
