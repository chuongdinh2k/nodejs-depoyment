// src/index.js
import express from "express";
import client from "./clients";
import Routes from "./routes";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});


const testKnexConnection = async () => {
  const check = await client.knex.testConnection();
  console.log("Is connecting DB?", check);
};

// routes
Routes(app);
testKnexConnection();
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});