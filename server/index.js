const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "crudgame",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const { name } = req.body;
  const { cost } = req.body;
  const { category } = req.body;

  let mysql = "INSERT INTO games ( name, cost, category) VALUES (?, ?, ?)";
  db.query(mysql, [name, cost, category], (err, response) => {
    if (err) console.log(err);
  });
});

app.listen(3001, () => {
  console.log("rodando na porta 3001");
});
