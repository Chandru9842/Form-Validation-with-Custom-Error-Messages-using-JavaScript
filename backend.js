const express = require("express");
const mysql = require("mysql");
const app = express();

app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "testdb"
});

db.connect();

// CREATE
app.post("/add", (req, res) => {
    let data = req.body;
    let sql = "INSERT INTO users SET ?";
    db.query(sql, data, (err) => {
        if (err) throw err;
        res.send("User Added");
    });
});

// READ
app.get("/users", (req, res) => {
    db.query("SELECT * FROM users", (err, result) => {
        res.json(result);
    });
});

// UPDATE
app.put("/update/:id", (req, res) => {
    let sql = "UPDATE users SET name=? WHERE id=?";
    db.query(sql, [req.body.name, req.params.id], () => {
        res.send("Updated");
    });
});

// DELETE
app.delete("/delete/:id", (req, res) => {
    db.query("DELETE FROM users WHERE id=?", [req.params.id], () => {
        res.send("Deleted");
    });
});

app.listen(3000);