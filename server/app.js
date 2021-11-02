const express = require('express')
const app = express()
const port = 3003
const mysql = require('mysql')
const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jewelry",
    password: "Root1234"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


// Visi produktai
app.get('/juvelyrika', (req, res) => {
    const sql = `
        SELECT *
        FROM juvelyrika
    `;
    con.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

// Prideti produkta
// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);
app.post('/juvelyrika', (req, res) => {
    const sql = `
        INSERT INTO juvelyrika
        (product, quantity, price, in_stock, last_order)
        VALUES (?, ?, ?, ?, ?)
    `;
    con.query(sql, [
        req.body.product,
        req.body.quantity,
        req.body.price,
        req.body.in_stock,
        req.body.last_order
    ], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

// Redaguoja produkta
// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;
app.put('/juvelyrika/:id', (req, res) => {
    const sql = `
        UPDATE juvelyrika
        SET product = ?, quantity = ?, price = ?, in_stock = ?, last_order = ?
        WHERE id = ?
    `;
    con.query(sql, [
        req.body.product,
        req.body.quantity,
        req.body.price,
        req.body.in_stock,
        req.body.last_order,
        req.params.id
    ], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

// Trina produkta
// DELETE FROM table_name
// WHERE some_column = some_value
app.delete('/juvelyrika/:id', (req, res) => {
    const sql = `
        DELETE FROM juvelyrika
        WHERE id = ?
        `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})

app.listen(port, () => {
    // console.log(`Example app listening at http://localhost:${port}`)
})