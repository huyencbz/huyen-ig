import express, { json } from "express";
import accountRouters from "./accounts/routes";

const app = express();

app.use(json());

app.use("/accounts", accountRouters);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
