import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAccountById = async (id: string) => {
  return await prisma.accounts.findUnique({ where: { id } });
};
