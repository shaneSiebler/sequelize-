const express = require("express");
const app = express();

const mysql = require("mysql");

// const db = require("./models");
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "FakeDatabase",
});

app.get('/insert', (req, res) => {

    db.query('INSERT INTO countries (countryName, population) VALUES ("USA", 300000000)', (err, result) => {
        if (err) {
            console.log(err)
        }

        res.send(result);
        }
    );
});

app.listen(3001, () => {
    console.log("server running");
});

// db.sequelize.sync().then((req) => {
//     app.listen(3001, () => {
//         console.log("server running");
//     });
// });
