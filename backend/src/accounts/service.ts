import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { Account } from "./model";

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
