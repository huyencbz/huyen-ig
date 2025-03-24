import { Request, Response } from "express";
import {
  getAccountById,
  registerAccount,
  updateAccount,
  authenAccount,
} from "./service";

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

export const login = async (req: Request, res: Response) => {
  try {
    const token = await authenAccount(req.body.username, req.body.password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: (error as Error).message });
  }
};
