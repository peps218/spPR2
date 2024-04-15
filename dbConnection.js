//SP_PR2/dbConnection.js

const mysql = require("mysql2");

const db_connection = mysql

    .createConnection({
        host: "localhost",
        user: "root",
        port: 3306,
        database: "sp_pr2",
        password: "",
    })

    .on("error", (err) => {
        console.log("Failed to connect to Database - ", err);
    });

module.exports = db_connection;