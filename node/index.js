const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;

const mysqlConfig = { host: "db", user: "root", password: "root", database: "nodedb" };
const connection = mysql.createConnection(mysqlConfig);

const createNamesTableSQL = `CREATE TABLE IF NOT EXISTS names (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY(id));`;
const inserNamesSQL = `INSERT INTO names(name) VALUES ("Ihury"), ("João"), ("Maria");`;

connection.query(createNamesTableSQL);
connection.query(inserNamesSQL);

app.get("/", (req, res) => {
  connection.query("SELECT * FROM names;", (err, results) => {
    if (err) {
      console.error(err)
      res.send(`<h1>Erro inesperado!</h1>`)
    } else {
      res.send(`
        <h1>Full Cycle Rocks!</h1>
        ${results.map(r => `<p>- ${r.name}</p>`).join("")}
      `)
    }
  })
});

app.listen(port, () => console.log(`Server running! Port: `, port));