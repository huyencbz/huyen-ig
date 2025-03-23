import express, { json } from "express";
import cors from "cors";
import accountRouters from "./accounts/routes";
import { VercelRequest, VercelResponse } from "@vercel/node";

const app = express();
const corsOptions = {
  origin: process.env.VERCEL
    ? "https://huyen-ig-backend.vercel.app"
    : "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.use(json());

app.use("/api/accounts", accountRouters);

if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3002;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res);
};
