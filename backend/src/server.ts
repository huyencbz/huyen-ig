import express, { json, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import userRouters from "./accounts/routes";

const app = express();
const prisma = new PrismaClient();

app.use(json());

app.use("/accounts", userRouters);

// app.get("/accounts", async (req: Request, res: Response) => {
//   const users = await prisma.accounts.findMany();
//   res.json(users);
// });
app.post("/register", async (req: Request, res: Response) => {
  const { email, username, password, birthday } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.accounts.create({
      data: {
        email,
        username,
        password: hashedPassword,
        birthday: birthday ? new Date(birthday) : "",
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: "User could not be created" });
  }
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
