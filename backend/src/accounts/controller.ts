import { Request, Response } from "express";
import { getAccountById, registerAccount, updateAccount } from "./service";

export const getAccount = async (req: Request, res: Response) => {
  try {
    const account = await getAccountById(req.params.id);
    res.json(account);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const postAccount = async (req: Request, res: Response) => {
  try {
    const newAccount = await registerAccount(req.body);
    res.status(201).json(newAccount);
  } catch (error) {
    res.status(400).json({ error: "User could not be created" });
  }
};

export const putAccount = async (req: Request, res: Response) => {
  try {
    const newAccount = await updateAccount(req.params.id, req.body);
    res.status(201).json(newAccount);
  } catch (error) {
    res.status(400).json({ error: "User could not be created" });
  }
};
