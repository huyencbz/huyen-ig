import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { Account } from "./model";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const getAccountById = async (id: string) => {
  return await prisma.accounts.findUnique({ where: { id } });
};

export const registerAccount = async (account: Account) => {
  const { email, username, password, birthday } = account;
  const hashedPassword = await bcrypt.hash(password, 10);

  return await prisma.accounts.create({
    data: {
      email,
      username,
      password: hashedPassword,
      birthday: birthday ? new Date(birthday) : "",
    },
  });
};

export const updateAccount = async (id: string, updateData: Account) => {
  if (updateData.password) {
    updateData.password = await bcrypt.hash(updateData.password, 10);
  }
  return await prisma.accounts.update({
    where: { id },
    data: updateData,
  });
};

export const authenAccount = async (username: string, password: string) => {
  const user = await prisma.accounts.findUnique({ where: { username } });
  if (!user) throw new Error("Invalid email or password");

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) throw new Error("Invalid email or password");

  const SECRET = "your_jwt_secret";

  // Create a token with the user ID (using 'id' instead of 'name' for clarity)
  return jwt.sign({ id: user.id, name: user.username }, SECRET, {
    expiresIn: "1h",
  });
};
