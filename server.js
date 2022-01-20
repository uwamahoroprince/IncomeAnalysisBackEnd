const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./src/config/db");
const cors = require("cors");

const auth = require("./src/routes/auth");
const user = require("./src/routes/user");
const memberShip = require("./src/routes/memberShip");
const activity = require("./src/routes/activity");
const budgetPlan = require("./src/routes/budgetPlan");
const account = require("./src/routes/account");
const transaction = require("./src/routes/transaction");
const client = require("./src/routes/client");

const app = express();
const PORT = process.env.PORT;
//loading middlewares
app.use(express.json());
app.use(cors());
//excuting routes

app.use("/IncomeAnalysis/authentication", auth);
app.use("/IncomeAnalysis/register", user);
app.use("/IncomeAnalysis/memberShip", memberShip);
app.use("/IncomeAnalysis/activity", activity);
app.use("/IncomeAnalysis/budgetPlan", budgetPlan);
app.use("/IncomeAnalysis/account", account);
app.use("/IncomeAnalysis/transaction", transaction);
app.use("/IncomeAnalysis/client", client);
//LOADING DOTENV FILE
dotenv.config({ path: "./src/config/config.env" });
dbConnect();
app.listen(PORT, () => {
  console.log(`application started http://localhost:${PORT}`);
});
